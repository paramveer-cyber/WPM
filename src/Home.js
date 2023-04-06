import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Notification from './Components/Notification'
import Typing from './Components/typing'

export default function Home() {
  const [alert, setalert] = useState(null);
  const [type, settype] = useState("danger");
  function showalert(msg) {
    setalert(msg)
  }
  function chngtype(type){
    settype(type)
  }
  return (
    <div>
        <Navbar />
        <Notification msg={alert} type={type} />
        <Typing func={showalert} func1={chngtype}/>
    </div>
  )
}
