import { combineReducers } from 'redux';
import { geoService } from './geoService';
import { speedController } from './speedController/index';
import {buttonService} from './buttoncontroller/index'
import {fieldTextService} from './fieldController/index'

const rootReducer = combineReducers({
  geoService,
  speedController,
  buttonService,
  fieldTextService
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;