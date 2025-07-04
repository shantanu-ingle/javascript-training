import React , {type FC} from "react";


type MessageModel = {
    msg: string;
    from: string;
    to: string;
};

type MessageType = {
    messageDetails: MessageModel
};

const Message: FC<MessageType> = (props:MessageType)=>{
    return <h1>{props.messageDetails.msg}</h1>
}

export default Message;