import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {


    let rendered = () =>{
        let listItems = props.children.map((element, i)=>{
            return(
                <div  key={i} >{element}</div>
                // width: "250px", height: "450px", style={{ display: "inline",  backgroundColor: "blue" }}, style={{display:"inline"}}
            )
        })
        return listItems;
    };


    return (
        <div>
            <h1>{props.header}</h1>
        
            <div style={{ display: "grid", gridTemplateColumns: "250px 250px 250px 250px 250px", gridGap: "10px"}} >
            {/* style={{ display: "grid", gridTemplateColumns: "250px 250px 250px 250px 250px", gridGap: "10px"}} */}
                
            {rendered()}
            
        </div>
        </div>
    )
}

export default FourColGrid
