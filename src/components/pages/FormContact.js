import { useState } from "react"
import './FormContact.css'
function FormContact(){
    const [name,setname] = useState("")
    const [show,setshow] = useState(true)
    const changeName = (e)=>{
        setname(e.target.value)
    }
    const FormHandler=(e)=>{
        e.preventDefault();
        if(!name.length){
            setshow(false);
            return;
        } 
        console.log(name)
        setshow(true)
    }
    return(
        
        <form onSubmit={FormHandler}>
            {!show && <p className="empty">fill this info</p>}
            <input type="text" placeholder="Your Name" onChange={changeName}/>
            {!show && <p className="empty">fill this info</p>}
            <input type="email" placeholder="Email" onChange={changeName}/>
            {!show && <p className="empty">fill this info</p>}
            <input type="phone" placeholder="Phone Number" onChange={changeName}/>
            {!show && <p className="empty">fill this info</p>}
            <input type="depart" placeholder="Department" onChange={changeName}/>
            <textarea placeholder="Type Message"></textarea>
            <button>Submit</button>
        </form>
    )
}
export default FormContact