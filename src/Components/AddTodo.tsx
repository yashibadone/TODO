import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Redux/TodoSlider';
import { FiPlusCircle } from "react-icons/fi";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        content: '',
        contentError:null
    });
    const handleChange = (e:any)=>{
        setState({...state, [e.target.name]:e.target.value})
    }
    const add =()=>{
        if(content === ''){
            setState({...state, contentError:'Please Enter Atleast One Task'});
            return;
        }
        dispatch(addToDo({newContent: content}));
        setState ({...state, content:''})
    }
    const {content, contentError} = state;

  return (
    <div className='form'>
        <h2 style={{color:'white'}}>Task For Today</h2>
        <input type='text' name='content' value = {content} onChange = {handleChange}/>
        <FiPlusCircle  className='button' onClick={add}/>
        {contentError ? <div className='error'>{contentError}</div>: null}

    </div>
  )
}
export default AddTodo