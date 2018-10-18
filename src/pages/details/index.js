import React,{PureComponent} from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from './style'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store'

class Details extends PureComponent{

    render(){
        // console.log(this.props.match.params.id);
        const {title}=this.props;
        const {content}=this.props;
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />            
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});
const mapDispatch=(dispatch)=>({
    getDetail(id){
       dispatch(actionCreators.getDetail(id));
    }
});
export default connect(mapState,mapDispatch)(withRouter(Details));