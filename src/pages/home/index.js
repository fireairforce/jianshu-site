import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import {connect} from 'react-redux';
import Tops from './components/Tops';
import List from './components/List';
import Recomment from './components/Recomment';
import Writer from './components/Writer';
import { actionCreators } from './store';
class Home extends PureComponent{
    
   handleScrollTop(){
       window.scrollTo(0,0);
   }
    render(){
      return(
          <HomeWrapper>
              <HomeLeft>
                 <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4479/ae6b245924326d3fce832a682033255b862dea88.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="page-1"/>
                 <Tops />
                 <List /> 
              </HomeLeft>
              <HomeRight>
                  <Recomment />
                  <Writer />
              </HomeRight>
              {
                  this.props.showScroll? <BackTop  onClick={this.handleScrollTop}>回到顶部</BackTop>:null
              }                  
          </HomeWrapper>    
      )
    }
    componentDidMount(){
    this.props.changeHomeData();    
    this.bindEvents();   
   }
   componentWillUnmount(){
       window.removeEventListener('scroll',this.props.changeScrollTopShow);
   }
   bindEvents(){
       window.addEventListener('scroll',this.props.changeScrollTopShow);
   }

   
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
       const action= actionCreators.getHomeInfo();
       dispatch(action);
     },
     changeScrollTopShow(){
         if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true))
         }else{
            dispatch(actionCreators.toggleTopShow(false))
         }
        // console.log(document.documentElement.scrollTop);
     }
});
export default connect(mapState,mapDispatch)(Home);