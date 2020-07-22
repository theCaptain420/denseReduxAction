import { takeLatest,put } from "redux-saga/effects"

import {UPDATE_MY_TEXT_FIELD,UPDATE_TEXT_COLOR} from './../../actions/index'
import { AnyAction } from "redux"



function randomColor():string{
    let colorArr = ["blue", "red", "gray", "yellow","green"]
    let random = Math.floor(Math.random()*colorArr.length)
    return colorArr[random]

}

function* processNewColor(action :AnyAction){
    switch(action.type){
        case UPDATE_MY_TEXT_FIELD.type:{
            yield put(UPDATE_TEXT_COLOR.create(randomColor()))
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