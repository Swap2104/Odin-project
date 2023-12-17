import { useState } from "react";

const CustomInput = () => {
    const [val, setVal]=useState("hello")
    return ( 
        <>
        <input 
        type="text" 
        value={val} 
        onChange={(e)=>{setVal(e.target.value, console.log(e.target))}}/>
        <h4>{val}</h4>
        </>
     );
}
 
export default CustomInput;