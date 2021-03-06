import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ListView from '../components/ListView'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../components/NavBar'
import {
  getItems
} from '../actions/items/index'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    getItems()(this.props.dispatch)
  }

  render(){
    return (
      <div>
        <NavBar/>
        <div className='PicHeader'/>
        <ListView
          data={this.props.items}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    isFetching,
    items,
  } = state.item || {
    isFetching: true,
    items: []
  }
  return {
    isFetching,
    items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
