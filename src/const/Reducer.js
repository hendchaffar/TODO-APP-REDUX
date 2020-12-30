import {ADDTASK,DELATE,COMPLETE,EDITTASK  } from "./ActionType";

const initState={
    tasks:[{id:1,description:"mazhboula",isDone:false}]
}
const Reducer=(state=initState,action)=>{
switch(action.type){
    case ADDTASK:
        return{...state,tasks:[...state.tasks,action.payload]};

    case DELATE:
        return{...state,tasks:[...state.tasks.filter(tasks=>tasks.id!==action.payload)]};  

    case COMPLETE:
        return{...state,tasks:[...state.tasks.map(tasks=>tasks.id===action.payload?{...tasks,isDone:!tasks.isDone}:tasks )]};
        
    case EDITTASK:
        return{...state,tasks:[...state.tasks.map(el=>el.id===action.payload.index?{...el,description:action.payload.editedText}:el)]};
        
    default: 
return state
}
}
export default Reducer