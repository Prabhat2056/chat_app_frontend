import { useSelector } from "react-redux";

function ChatArea() {
  const { selectedChat, user, allUsers } = useSelector((state) => state.user);

  if (!selectedChat) {
    return <div>Select a chat</div>;
  }

  const selectedUserId = selectedChat.members.find(
    (member) => member !== user.id,
  );

  const selectedUser = allUsers.find((u) => u.id === selectedUserId);

  return (
    <div className="app-chat-area">
      <div className="app-chat-area-header">
        {selectedUser?.firstName} {selectedUser?.lastName}
      </div>

      <div>CHAT AREA</div>

      <div>SEND MESSAGE</div>
    </div>
  );
}

export default ChatArea;
