import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { deleteToDO,editTodo } from "../Redux/TodoSlider";
import {AiFillEdit, AiOutlineCloseCircle} from 'react-icons/ai'
 
const ListTodo = () => {
    
    
    const {todoList} = useSelector((state:any)=>state.toDo);
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [state, setState] = useState({
        id: '',content: '',contentError: null 
    });
    const onEditToggle = (id:any, content:any) =>{
        setEditing(true);
        setState({...state, id, content})
       
    }
    const handleChange = (e:any)=>{
        setState({...state, [e.target.name]:e.target.value});
    }
    const {content, contentError, id} = state;
    const edit = () =>{
        if(content === ''){
            setState({...state, contentError: 'Please Enter Task '});
            return;
            
        }
        dispatch((editTodo({content,id})))
            setEditing(false);
    }
  return <div>
        {
            isEditing ? 
            <div className="form">
                <h2 style={{color:'white'}}>Update your Task</h2>
                <input type='text' value={content} name = 'content' onChange={handleChange}/>
                <button type='button' className="button" onClick={edit}>Edit</button>
                {contentError ? <div className="error">{contentError}</div>:null
                }
            </div>:
            <ul className="todos">
                {
                    todoList.map(({id, content}:any)=>{
                        return <li className="grid" key ={id}>
                            <span className="content">{content}</span>
                            <span className="todo-action">
                                <AiOutlineCloseCircle className="close" onClick ={()=>dispatch(deleteToDO({id}))}/>
                                <AiFillEdit className="edit" onClick={()=>onEditToggle(id, content)}/>
                            </span>
                        </li>
                    })
                }
            </ul> 
     }   
               
        
    </div>;
  
}
export default ListTodo