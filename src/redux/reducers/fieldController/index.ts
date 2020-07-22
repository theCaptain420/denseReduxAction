import {UPDATE_MY_TEXT_FIELD,
UPDATE_TEXT_COLOR} from './../../actions'

export interface fieldState {
    currentString: string,
    currentColor: string
  }
  
  const initialState: fieldState = {
    currentString: "",
    currentColor: "blue"
  
  };
  
  export function fieldTextService(state: fieldState = initialState, action: GenericAction): fieldState {

    switch (action.type) {
      case UPDATE_MY_TEXT_FIELD.type: {  
        return {
          ...state,
          currentString:action._payload,
        };
      }
      case UPDATE_TEXT_COLOR.type :{
        return{
          ...state,
          currentColor:action._payload
        }
      }
    }
  
    return state;
  }
  