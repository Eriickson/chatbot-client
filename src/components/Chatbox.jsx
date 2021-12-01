import ReactChatBot from "react-simple-chatbot";

const ChatboxComponent = () => {
  return (
    <div>
      <ReactChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello World!",
            end: true,
          },
        ]}
      />
    </div>
  );
};
export default ChatboxComponent;
