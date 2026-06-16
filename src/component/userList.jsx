import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewChat } from "./../apiCall/chat";
import { hideLoader, showLoader } from "./../features/loaderSlice";
import { setAllChats, setSelectedChat } from "./../features/userSlice";

function UsersList({ searchKey }) {
  const {
    allUsers,
    allChats,
    user: currentUser,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const startNewChat = async (searchedUserId) => {
    let response = null;
    try {
      dispatch(showLoader());
      response = await createNewChat([currentUser.id, searchedUserId]);
      dispatch(hideLoader());

      if (response.success) {
        toast.success(response.message);
        const newChat = response.data;
        const updatedChat = [...allChats, newChat];
        dispatch(setAllChats(updatedChat));
        dispatch(setSelectedChat(newChat));
      }
    } catch (error) {
      toast.error(response.message);
      dispatch(hideLoader());
    }
  };
  const openChat = (selectedUserId) => {
    const chat = allChats.find(
      (chat) =>
        chat.members.map((m) => m.id).includes(currentUser.id) &&
        chat.members.map((m) => m.id).includes(selectedUserId),
    );
    if (chat) {
      dispatch(setSelectedChat(chat));
    }
  };

  return allUsers
    .filter((user) => {
      return (
        ((user.firstName.toLowerCase().includes(searchKey.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchKey.toLowerCase())) &&
          searchKey) ||
        allChats.some((chat) => chat.members.map((m) => m.id).includes(user.id))
      );
    })
    .map((user) => {
      return (
        <div
          className="user-search-filter"
          onClick={() => openChat(user.id)}
          key={user.id}
        >
          <div className="filtered-user">
            <div className="filter-user-display">
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile Pic"
                  className="user-profile-image"
                />
              )}
              {!user.profilePic && (
                <div className="user-default-profile-pic" key={user.id}>
                  {user.firstName.charAt(0).toUpperCase() +
                    user.lastName.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="filter-user-details">
                <div className="user-display-name">
                  {user.firstName + " " + user.lastName}
                </div>
                <div className="user-display-email">{user.email}</div>
                {!allChats.find((chat) =>
                  chat.members.map((m) => m.id).includes(user.id),
                ) && (
                  <div
                    className="user-start-chat"
                    onClick={() => startNewChat(user.id)}
                  >
                    <button className="user-start-chat-btn">Start Chat</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
}

export default UsersList;
