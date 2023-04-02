const redux = require('redux');

const createStore = redux.createStore;


const TEACHER_COME = 'TEACHER_COME';

function teacherCome(){

    return{
        type:TEACHER_COME
    }
}


const initialState = {

    numberOfTeacher : 100
}


const reducer = (state = initialState , action)=>{

    switch(action.type){

        case TEACHER_COME : return{
            ...state,
            numberOfTeacher: state.numberOfTeacher - 1
        }

        default: return state

    }
}


const store = createStore(reducer);

console.log('Initial state' , store.getState());
store.subscribe(()=> console.log('update state' , store.getState()));

store.dispatch(teacherCome());
store.dispatch(teacherCome());