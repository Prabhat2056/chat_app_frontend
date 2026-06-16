import { useSelector } from "react-redux";

function ChatArea() {
  const { selectedChat, user } = useSelector((state) => state.user);

  if (!selectedChat) {
    return <div>Select a chat</div>;
  }

  const selectedUser = selectedChat.members?.find((u) => u.id !== user?.id);

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
