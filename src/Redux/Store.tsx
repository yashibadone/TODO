import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from './TodoSlider'

export default configureStore({
    reducer: {
        toDo: toDoReducer
    }
})