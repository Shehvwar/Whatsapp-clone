import React,{useState} from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import {AttachFile, SearchOutlined, MoreVert} from '@material-ui/icons'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import axios from './axios'
function Chat({messages})
{
    const [input, setInput] =useState("")
    const sendMessage = async (e) =>
    {
        e.preventDefault();

        await axios.post('/messages/new',{
            message:input,
            name:"Demo",
            timestamp:"just now!",
            received:false

        })

        await axios.get('/messages/sync',{
            message:input,
            name:"Demo0",
            timestamp:"just now!",
            received:true

        })
        setInput('')
    }
        return(
            <div className = "chat">
                <div className = "chat_header">
                    <Avatar />
                    <div className = "chat_headerInfo">
                        <h3>Room Name</h3>
                        <p>last Seen at..?</p>
                    </div>
                    <div className = "chat_header_right">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert/>
                        </IconButton>

                    </div>
                </div>
                <div className = "chat_body">
                    {messages.map(message =>(
                        <p className = {`chat_message ${message.received  && "chat_receiver"}`}>
                        <span className = "chat_name">{message.name}</span>
                        {message.message}
                        <span className = "chat_timestamp">
                            {message.timestamp}

                        </span>
                    </p>

                    ))}
                    {/* <p className = "chat_message">
                        <span className = "chat_name">subuhi</span>
                        This is message Component
                        <span className = "chat_timestamp">
                            {new Date().toUTCString()}

                        </span>
                    </p> */}
                    {/* <p className = "chat_message chat_receiver">
                        <span className = "chat_name">shehvwar</span>
                        This is message Component
                        <span className = "chat_timestamp">
                            {new Date().toUTCString()}

                        </span>
                    </p> */}

                </div>
                <div className = "chat_footer">
                    <EmojiEmotionsOutlinedIcon />
                    <form>
                        <input 
                        value = {input}
                        onChange= {(e) => setInput(e.target.value)}
                        placeholder = "typr your message"
                        type = "text"
                        />
                        <button onClick = {sendMessage} type = "submit">send message</button>

                    </form>
                    <MicNoneOutlinedIcon />
                </div>
            </div>
            
        )
}
export default Chat;