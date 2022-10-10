import React from "react";
const Lang=({lname,duration,details,fees,cls})=>{
    return(
        <>
            <h1>Language Name :{lname}</h1>
            <h2>duration :{duration}</h2>
            <h3>Details :{details}</h3>
            <h4>Fees :{fees}</h4>
            <h3>Class :{cls}</h3>
            <hr/>
        </>
    )
}
export default Lang;