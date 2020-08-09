import { takeLatest,put,all,select,call } from "redux-saga/effects"

import {GET_THE_PERSON_ARTICLE,GOTTEN_PERSON_ARTICLE} from './../../actions/index'
import { AnyAction } from "redux"

async function requestStuff(url:string) { ///simple request
    const res = await fetch(url)
        .then(respJson => respJson.json())
        .catch(err => console.log(err));

    return res;

}


async function* getFirstComment() {
    try {

        //gets the story and the comments id(kids of type array)
        var result1 = await requestStuff("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");

        //gotta yield the result.
        //when running .next(), it runs the code down to the "yield" youre running
        yield result1;


        //gets the comment-text given the comment-id
        var resID = result1.kids[0];
        var result2 = await requestStuff("https://hacker-news.firebaseio.com/v0/item/" + resID + ".json?print=pretty")
        var resText = result2.text

        yield resText;

    } catch (error) {
        console.log(error)
    }
}


 function* processFetching(action :AnyAction){
    switch(action.type){
        case GET_THE_PERSON_ARTICLE.type:{
            let result1 = yield call( requestStuff,"https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");
            yield put (GOTTEN_PERSON_ARTICLE.create("Got the article, waiting for rest..."))
            let res2 = yield call(requestStuff, "https://hacker-news.firebaseio.com/v0/item/" + result1.kids[0] + ".json?print=pretty" )
            yield put (GOTTEN_PERSON_ARTICLE.create(res2.text))


            break;
        }
    }
}


export function* getWriter(){
    yield takeLatest(
        [GET_THE_PERSON_ARTICLE.type],
        processFetching
    )
}