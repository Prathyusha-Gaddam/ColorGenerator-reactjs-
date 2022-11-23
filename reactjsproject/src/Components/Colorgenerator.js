import React, { useState } from "react";
import './Colorgenerator.css';
import Values from 'values.js';
import Singlecolor from "./Singlecolor";
function Colorgenerator(){
    const[color,setcolor]=useState();
    const[error,seterror]=useState(false);
    const[list,setlist]=useState(new Values('#f15025').all(8));
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
        let colors=new Values(color).all(8);
        setlist(colors);
        }catch{
           seterror(true);
        }
    }
    return(
        <div>
            <div className="textform">
                <h2>Color Generator</h2>
                <form className="generate" onSubmit={handleSubmit}>
                    <input type="text" placeholder="#f15025" className={`${error?'error':null}`} value={color} onChange={(e)=>setcolor(e.target.value)}/>
                    <button className="btn btn-primary">Generate</button>
                </form>
                <section className="colors">
                {list.map((color,index)=>{
                    return(
                        <article>
                            <Singlecolor key={index} index={index} {...color} hexcolor={color.hex} />
                        </article>
                    )
                })}
                </section>
            </div>
        </div>
    )
}export default Colorgenerator;