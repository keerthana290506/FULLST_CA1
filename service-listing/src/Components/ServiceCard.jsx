import { useState } from "react";
import axios from "axios";


function ServiceCard(){
    const[service,setservice] = useState('');
    const[description,setdescription] = useState('')

    const handlesub = async(e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5174',{service,description})
            setservice(' ')
            setdescription(' ')
            }catch(err){
                console.log(err)
            }
    }

    return(
        <>
        <form onSubmit={handlesub}>
             <input type="text" placeholder="Title" value={service} onChange={(e) => setservice(e.target.value)} required />
             <input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} required />
             <button type="submit">add</button>
        </form>
        </>
    )

}

export default ServiceCard


