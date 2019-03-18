import  React from 'react';
import { Component } from 'react';
import StageStore from '../stores/StageStore';
import StageDimensions from '../utils/StageDimensions';

class Stage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        {this.props.stageKey}
      </div>
    );
  }
}

export default Stage;
