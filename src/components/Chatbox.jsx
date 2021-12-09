import ReactChatBot from "react-simple-chatbot";

const ChatboxComponent = () => {
  return (
    <div>
      <ReactChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hola, soy tu asistente virtual",
            end: true,
          },
        ]}
      />
    </div>
  );
};
export default ChatboxComponent;
