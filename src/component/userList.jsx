import { useSelector } from "react-redux";

function UsersList({ searchKey }) {
  const { allUsers, allChats } = useSelector((state) => state.user);

  // console.log("searchKey:", searchKey);
  // console.log("allUsers:", allUsers);

  return allUsers
    .filter((user) => {
      return (
        (user.firstName.toLowerCase().includes(searchKey.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchKey.toLowerCase())) &&
        searchKey
      );
    })
    .map((user) => {
      return (
        <div className="user-search-filter">
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
                {!allChats.find((chat) => chat.members.includes(user.id)) && (
                  <div className="user-start-chat">
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
