import {
    UPDATE_MY_BUTTON_NUMBER
} from '../../actions';

export interface ButtonState {
  currentValue: number 
}

const initialState: ButtonState = {
  currentValue: 0,

};

export function buttonService(state: ButtonState = initialState, action: GenericAction): ButtonState {
  switch (action.type) {
    case UPDATE_MY_BUTTON_NUMBER.type: {
      return {
        ...state,
        currentValue: state.currentValue+1,
      };
    }
    
  }

  return state;
}
