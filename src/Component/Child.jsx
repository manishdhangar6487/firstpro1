import React from "react";
const Child=()=>{
    return<h1>Child component is running</h1>
}
const Ppoint=()=>{
    <>
    return<h1>Ppoint is running</h1>
    <Indore />
    <Bhopal />
    </>
}
const Indore=()=>{
    return<h1>indore is running</h1>
}
const Bhopal=()=>{
    return<h1>bhopal is running</h1>
}
export default Child;
export {Ppoint};
