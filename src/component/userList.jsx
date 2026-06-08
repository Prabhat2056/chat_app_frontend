import { useSelector } from "react-redux";

function UsersList({ searchKey }) {
  const { allUsers } = useSelector((state) => state.user);

  return (
    allUsers
      // .filter((user) => {
      //   return (
      //     user.firstName.toLowerCase().includes(searchKey.toLowerCase()) ||
      //     user.lastName.toLowerCase().includes(searchKey.toLowerCase())
      //   );
      // })
      .map((user) => {
        console.log(allUsers);
        return (
          <div class="user-search-filter">
            <div class="filtered-user">
              <div class="filter-user-display">
                {/* <img
            src={user.profilePic}
            alt="Profile Pic"
            class="user-profile-image"
          /> */}
                <div class="user-default-profile-pic">
                  {user.firstName.charAt(0).toUpperCase() +
                    user.lastName.charAt(0).toUpperCase()}
                </div>
                <div class="filter-user-details">
                  <div class="user-display-name">
                    {user.firstName + " " + user.lastName}
                  </div>
                  <div class="user-display-email">{user.email}</div>
                  <div class="user-start-chat">
                    <button class="user-start-chat-btn">Start Chat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
  );
}

export default UsersList;
