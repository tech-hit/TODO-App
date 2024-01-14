import React from 'react'

export const PlannerItem = ({planner, onDelete}) => {
    return (
        <>
        <div className="body">
        <div>
           <h4>{planner.title}</h4>
           <p>{planner.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(planner)}}>Delete</button> 
        </div>
        </div>
        <hr style={{color:'darkblue'}}/> 
        </>
    )
}
