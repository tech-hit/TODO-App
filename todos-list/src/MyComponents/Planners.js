import React from 'react'
import {PlannerItem} from "./PlannerItem";

export const Planners = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <center><h3 className="my-3"><u>Planners List</u></h3></center>
            {props.planners.length===0? <center><>No Planners to display</></center>:  
            props.planners.map((planner)=>{
                console.log(planner.sno);
                return (<PlannerItem planner={planner} key={planner.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
