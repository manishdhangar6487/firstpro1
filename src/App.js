import React from "react";
//import Lang from "./Component/One";
import './App.css';
import { data } from "./Component/Data";
//import Lang from "./Component/Lang";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/Card";
//import Input from "./Component/Input";
import AddProduct from "./Component/AddProduct";
const App=()=>{
  return(
    <>
    <AddProduct/>
    {data.map((v)=>{
      return(
        <>
        <div className="col-sm-3">
        <Card id={v.id} name={v.name} price={v.price} cat={v.cat} cmp={v.cmp} img={v.img}/>
        </div>
        </>
      )
    })}
    </>
  )
}
export default App;
