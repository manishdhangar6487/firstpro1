import React from "react"
const Card=({id,name,price,cat,cmp,img})=>{
    return(
        <>
            <div className="card" style={{'width': "18rem;"}}>
            <img src={img} className="card-img-top" style={{'hieght':'100px','width':'270px'}} alt="..." />
            <div className="card-body">
                <h1 className="text-danger card-title">{id} {name}</h1>
                <h2 className="card-subtitle">{price} {cat}</h2>
                <p className="card-text">{cmp}</p>
            </div>
            </div>
        </>
)}
export default Card;