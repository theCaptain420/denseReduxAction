import { ActionCreator } from 'dense-redux-actions';

export const UPDATE_MY_TEXT_FIELD = new ActionCreator<string>('UPDATE_MY_TEXT_FIELD');

export const UPDATE_VP_VISABILITY = new ActionCreator<boolean>('UPDATE_VP_VISABILITY')

export const UPDATE_TEXT_COLOR = new ActionCreator<string>('UPDATE_TEXT_COLOR');