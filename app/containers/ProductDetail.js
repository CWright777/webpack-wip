import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getItem
} from '../actions/items/index'
import NavBar from '../components/NavBar'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    getItem(this.props.params.id)(this.props.dispatch)
  }
  render(){
    return (
      <div>
        <NavBar/>
        <p>{this.props.item.id}</p>
        <p>{this.props.item.title}</p>
        <img src={this.props.item.img}/>
        <p>{this.props.item.price}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    isFetching,
    item,
  } = state.item || {
    isFetching: true,
    item: []
  }
  return {
    isFetching,
    item
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
