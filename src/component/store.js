import { createStore, combineReducers } from 'redux'
import producs from './store/producs'
import addedProducts from './store/addedProducts'

const alreatTeacher = (store)=>(next)=>(action)=>{
    if(action.type === 'UPDATE_TEACHER'){
        alert('teacher  '+store.getState().teacher.teacher.find(x => x.id).name+'\n' +store.getState().puiple.puiple.map(x=>x.name).join(',   '))
        return next(action)
    }
    else{
        return next(action)
    }
    }


const reducer = combineReducers( {producs ,addedProducts})
const store = createStore(reducer)
window.store = store
export default store