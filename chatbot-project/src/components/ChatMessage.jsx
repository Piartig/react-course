import RoboPB from '../assets/robot.png'
import UserPB from '../assets/user.png'
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {

  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>

      {sender == "robot" && (
        <img src={RoboPB} className="chat-message-profile"></img>
      )}

      <div className="chat-message-text">
        {message}
      </div>

      {sender == "user" && (
        <img src={UserPB} className="chat-message-profile"></img>
      )}

    </div>
  );
}