import React from "react";
 
const ToDoList=(props)=>{
    return <>
        <div className="todo_list">
        <li>
              <img src={props.srcImg} alt="to" className="img_del"  aria-hidden="true" onClick={()=>{
                   props.onSelect(props.id); 
              }} 

              />
            
               {props.text}</li>
            
        </div>
    </>
}

export default ToDoList;