import { takeLatest,put,all,select } from "redux-saga/effects"

import {UPDATE_MY_TEXT_FIELD,UPDATE_TEXT_COLOR,UPDATE_VP_VISABILITY} from './../../actions/index'
import { AnyAction } from "redux"



function randomColor():string{
    let colorArr = ["blue", "red", "gray", "yellow","green"]
    let random = Math.floor(Math.random()*colorArr.length)
    return colorArr[random]

}

function containsVP(theText:string):boolean{
    return theText.includes("420")
}

function* processNewColor(action :AnyAction){
    switch(action.type){
        case UPDATE_MY_TEXT_FIELD.type:{
            const state = yield select();
            const viewingText = state.fieldTextService.currentString
            yield put (UPDATE_TEXT_COLOR.create(randomColor()))
            if(containsVP(viewingText)){
                yield put (UPDATE_VP_VISABILITY.create(containsVP(viewingText)))
            }
            yield put (UPDATE_VP_VISABILITY.create(containsVP(viewingText)))
            break
        }
    }
}


export function* changeColor(){
    yield takeLatest(
        [UPDATE_MY_TEXT_FIELD.type],
        processNewColor
    )
}