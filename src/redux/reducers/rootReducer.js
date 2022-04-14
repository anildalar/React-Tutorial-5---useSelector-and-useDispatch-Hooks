import { combineReducers } from "redux";
import { A, B, C, D, E, F } from "../constants/constants";
import initialState from "../data/initialState";



let reducer1 = (prevState = initialState,action)=>{
    let newState ='';
    switch(action.type){
      case A:
        newState = { 
                      ...prevState,
                      name:'ABHISHESK'
                    }
        break;
      case B:
        newState = { 
          ...prevState,
          name:'RITIK'
        }
        break;
      case C:
        newState = { 
          ...prevState,
          name:'KIRAN'
        }
        break;
  
      default:
        newState = prevState;
    }
    return newState;
  }

  let reducer2 = (prevState = initialState,action)=>{
    let newState ='';
    switch(action.type){
      case D:
        newState = { 
                      ...prevState,
                      name:'Shivkanya'
                    }
        break;
      case E:
        newState = { 
          ...prevState,
          name:'Anjali'
        }
        break;
      case F:
        newState = { 
          ...prevState,
          name:'Aaachal'
        }
        break;
  
      default:
        newState = prevState;
    }
    return newState;
  }

  let rootReducer = combineReducers({
    reducer1:reducer1,
    reducer2:reducer2,
  })

  export default rootReducer;