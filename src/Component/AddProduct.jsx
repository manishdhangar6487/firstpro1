import React,{useState} from "react";
const AddProduct=()=>{
    let[data,updatedata]=useState({name:'',price:'0',cat:'',cmp:''});
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data);
    }
    return(
        <>
        <form onSubmit={submit}>
            Name<input type="text" name="name" value={data.name} onChange={change} /><br/>
            Price<input type="number" name="price" value={data.price} onChange={change}/><br/>
            Catogary<input type="text" name="cat" value={data.cat} onChange={change}/><br/>
            Compony<input type="text" name="cmp" value={data.cmp} onChange={change}/><br/>
            <button>Add</button>
        </form>
        </>
    )
}
export default AddProduct;