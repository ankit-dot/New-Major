import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you?", from: 'bot' },
    { id: 2, text: "Feel free to ask any questions.", from: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMessages = [...messages, { id: messages.length + 1, text: newMessage, from: 'user' }];
    setMessages(newMessages);
    setNewMessage("");

    // Simulate a response from the "bot"
    setTimeout(() => {
      const botResponse = "I'm just a simple simulation. sdf;akdjf;lsdjf;laksdjf;askdjf;lasdjf;lalsksdjjfal;lsdkjfa;lsdkjfa;ldkjf;aslkdjfa;lsdjfa;ldjfa;ldjfa;ldjf;lasdjfj;lasldjf;laskdjfj;laskdjf;lasdjfj;allsdfj;lalsdj";
      const updatedMessages = [...newMessages, { id: newMessages.length + 1, text: botResponse, from: 'bot' }];
      setMessages(updatedMessages);
    }, 500); // Delayed response for a more realistic feel
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        {messages.map(message => (
          <div key={message.id} className={`flex mb-4 ${message.from === 'user' ? 'justify-end' : ''}`}>
            <div className={`bg-${message.from === 'user' ? 'blue' : 'gray'}-600 text-white p-3 rounded-lg max-w-xs`}>
              <p className="break-words">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Send
        </button>
      </div>
      {/* Response Section */}
      
      {/* End of Response Section */}
    </div>
  );
};

export default ChatApp;
