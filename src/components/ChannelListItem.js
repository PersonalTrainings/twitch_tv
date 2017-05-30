import React from "react";

const ChannelListItem = (props) => {    
    let { logo, name, url, status, game } = props.channel;
    let style = status ? {background: "#b8cca6"} : {background: "#8c8c8c"}; 
       
    let online_offline = status ? <div className="status" >{game}</div> : <div className="status" style={{color: "white"}}>Offline</div>;
        
    return (
        <li style={style} className="list-group-item" >                            
            <img className="smaller-image" src={logo} alt="pic" />                
            <a href={url}><h4 className="user-name">{name}</h4></a>
            {online_offline}          
        </li>
    );
}

export default ChannelListItem;