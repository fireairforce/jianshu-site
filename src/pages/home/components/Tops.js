import React,{ PureComponent } from 'react';
import {TopicWrapper,TopicItem} from '../style.js';
import {connect} from 'react-redux';


class Tops extends PureComponent{
    render(){
        const {list}=this.props;
        return(
            <TopicWrapper>
              {list.map((item)=>(
                    <TopicItem key={item.get('id')}>
                    <img 
                        className="topic-pic"
                        src={item.get('imgUrl')} 
                        alt={item.get('id')}
                    />
                    {item.get('title')}
                   
                </TopicItem> 
              ))}
            </TopicWrapper>
        )
    }
}
const mapState=(state)=>({
   list:state.getIn(['home','topicList'])
});

export default connect(mapState,null)(Tops);