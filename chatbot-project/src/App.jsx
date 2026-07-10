import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'hello',
      sender: 'user',
      id: 'id1'
    },
    {
      message: 'olleh',
      sender: 'robot',
      id: 'id2'
    },
    {
      message: 'bye',
      sender: 'user',
      id: 'id3'
    },
    {
      message: 'eyb',
      sender: 'robot',
      id: 'id4'
    }
  ]);

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
