import {ADDTASK,DELATE,COMPLETE,EDITTASK  } from "./ActionType";

export const addtask=(newTask)=>{
    return{
type:ADDTASK,
payload:newTask
    }
}

export const delatetask=(id)=>{
    return{
type:DELATE,
payload:id
        }    
}
export const completetask=(id)=>{
    return{
type:COMPLETE,
payload:id
        }    
}
export const edittask=(newTask)=>{
    return{
type:EDITTASK,
payload:newTask
        }    
}
