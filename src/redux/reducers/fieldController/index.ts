import {UPDATE_MY_TEXT_FIELD,
UPDATE_TEXT_COLOR,
UPDATE_VP_VISABILITY,
RESET_TEXT_COLOR,
RESET_TEXT,
GET_THE_PERSON_ARTICLE,
GOTTEN_PERSON_ARTICLE} from './../../actions'

export interface fieldState {
    currentString: string,
    currentColor: string,
    showingVP:boolean,
    artWriter:string
  }
  
  const initialState: fieldState = {
    currentString: "",
    currentColor: "blue",
    showingVP:false,
    artWriter:"click me"
  
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
      case UPDATE_VP_VISABILITY.type :{
        return{
          ...state,
          showingVP:action._payload
        }
      }
      case RESET_TEXT_COLOR.type :{
        return {
          ...state,
          currentColor:"black"
        }
      }
      case RESET_TEXT.type :{
        return {
          ...state,
          currentString:""
        }
      }
      case GET_THE_PERSON_ARTICLE.type :{
        return{
          ...state,
          artWriter:"loading"
        }
      }
      case GOTTEN_PERSON_ARTICLE.type :{
        return{
          ...state,
        artWriter:action._payload
      }
      }
    }
  
    return state;
  }
  