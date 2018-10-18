//由header的reducer来管理自己的数据
import {
    fromJS
} from 'immutable';
import * as actionTypes from './actionTypes';
// immutable库
// immutable对象

const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHNAGE_DETAIL:
           return state.merge({
               title:action.title,
               content:action.content
           })
        default:
            return state;
    }
}
