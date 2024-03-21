import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Notes from "./Pages/notes/Notes";


import MockTest from "./Pages/mocktest/MockTest";
import MockTestInstructions from "./Pages/mocktest/MockTestInstructions";
import SelectSubject from "./Pages/selectSubject/SelectSubject";
import ChatApp from "./Pages/chatbot/ChatBot";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <ChatApp/>
    
  </React.StrictMode>
);
