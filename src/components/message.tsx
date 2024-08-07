import { IMessage } from "../interfaces";

interface Props {
  message: IMessage;
}

function Message({ message }: Props) {
  return (
    <p className="bg-[#3b72ff] p-4 rounded-xl font-xs font-sans text-white">
      {message.text}
    </p>
  );
}
export default Message;
