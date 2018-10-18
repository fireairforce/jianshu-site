//由header的reducer来管理自己的数据
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';
// immutable库
// immutable对象
const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage:1,
    showScroll:false     
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      });
}
const addArticleList=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
    });
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case actionTypes.TOGGLE_SCROLL_TOP:
             return state.set('showScroll',action.show) 
        default:
          return state;    
    }
}
