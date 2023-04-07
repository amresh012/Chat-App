import React,{useEffect ,useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Index.css'
import '../index.css'

let socket;

const Chat = ({location}) => {
  const [name , setName] = useState('')
  const [room , setRoom] = useState('')
  const ENDPIONT = "localhost:5000"

 
  useEffect(()=>{
    const {name , room} = queryString.parse(location.search)
    socket = io(ENDPIONT);

    setName(name);
    setRoom(room);
     
    socket.emit('join',{name , room})
    console.log(socket)

  },[ENDPIONT , location.search])



  return (
    <div>
        
    </div>
  )
}

export default Chat