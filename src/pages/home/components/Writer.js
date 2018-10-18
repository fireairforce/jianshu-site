import React,{ PureComponent } from 'react';
import {
    WriterWrapper,
    WriterItem,
    // List
} from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent{

    render(){
        const {list}=this.props;
        return(
            <WriterWrapper>
                {
                    list.map((item)=>(
                     <WriterItem key={item.get('id')}> 
                        <img 
                        className="writer-list"
                        src={item.get('imgUrl')} 
                        alt={item.get('id')}
                        />
                        {/* <List>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="content">{item.get('content')}</p>     
                        </List> */}
                     </WriterItem>       
                    ))
                }
            </WriterWrapper>    
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer);