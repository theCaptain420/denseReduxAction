import { all } from 'redux-saga/effects';
import { geoService } from './geoServices';
import { speedController } from './speedController';
import { changeColor} from './fieldtext'
import {getWriter} from './articleWriter'

function* rootSaga() {
  yield all([
    geoService(),
    speedController(),
    changeColor(),
    getWriter()
  ]);
}

export default rootSaga;