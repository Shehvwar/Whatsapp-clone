import React, { Component } from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'; 
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_header">
                    <Avatar src="" />
                    <div className="sidebar_header_right">

                        <IconButton >
                            <DonutLargeIcon />
                        </IconButton>
                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                     </div>
                </div>
                <div className="sidebar_search">
                    <div className="sidebar_search_container">
                        <SearchOutlinedIcon />
                        <input placeholder="search" type="text" />
                    </div>
                </div>
                <div className = "sidebar_chat">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    
                </div>
            </div>
        )
    }

}
export default Sidebar;