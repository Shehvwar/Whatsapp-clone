import React,{useEffect,useState} from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Pusher from 'pusher-js'
import axios from './axios'
function App() {

  const [messages, setMessages] =  useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then((res)=>{
      setMessages(res.data)
    })
  }, [])

useEffect(() => {
  const pusher = new Pusher('c2f5552e52342ab964dd', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('mssages');
  channel.bind('inserted', (newMessage) => {
    setMessages([...messages,newMessage]);

  });
  return ()=>
  {
    channel.unbind_all();
    channel.unsubscribe();
  }
}, [messages])
console.log(messages)
  return (
    <div className="app">
      <div className = "app_body">
      <Sidebar />
      <Chat messages = {messages}/>
      </div>
     </div>
  );
}

export default App;
