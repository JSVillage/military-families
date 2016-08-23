import React, {Component, PropTypes} from 'react';
import * as actions from './forumAction';


class FroumAnswersReplyContainer extends Component {

constructor(props){
  super(props);
 this.state = {
   answers: []
 };

 componentDidMount(){
   const forumId = this.props.routeParams.forumId;
   actions.postQuestion(forumId).then(response => {
     this.setState({answers:response})
   });

   actions.postQuestion(forumId).then(response => {
     this.setState({answers:response})
 });

}


    render(){
        <div>   </div>
    }



}


export default FroumAnswersReplyContainer;
