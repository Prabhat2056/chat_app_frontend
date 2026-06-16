import { useSelector } from "react-redux";

function ChatArea() {
  const { selectedChat } = useSelector((state) => state.user);
  return <div>{selectedChat && <h2>{selectedChat.id}</h2>}</div>;
}
export default ChatArea;
