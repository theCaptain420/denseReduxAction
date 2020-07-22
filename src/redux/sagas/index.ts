import { all } from 'redux-saga/effects';
import { geoService } from './geoServices';
import { speedController } from './speedController';
import { changeColor} from './fieldtext'

function* rootSaga() {
  yield all([
    geoService(),
    speedController(),
    changeColor()
  ]);
}

export default rootSaga;