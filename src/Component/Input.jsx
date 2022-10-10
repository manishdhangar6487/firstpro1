import React,{useState} from "react";
const Input=()=>{
    let[n,updatedvalue1]=useState({n1:0,n2:0,r:0});
    function change(e)
    {
        updatedvalue1({...n,[e.target.name]:e.target.value});
    }
    function add(e)
    {
        updatedvalue1({...n,r:parseInt(n.n1)+parseInt(n.n2)});
    }
    function sub(e)
    {
        updatedvalue1({...n,r:parseInt(n.n1)-parseInt(n.n2)});
    }
    return(
        <>
            <h1>Input componet is running{n.r}</h1>
            <input type="number" name="n1" id="n1"  onChange={change} />
            <input type="number" name="n2" id="n2"  onChange={change} />
            <button onClick={add}>Add</button>
            <button onClick={sub}>sub</button>
        </>
    )
}
export default Input;