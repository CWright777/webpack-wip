import React, { Component } from 'react';
import AutoResponsive from 'autoresponsive-react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

let getItemStyle = function() {
  return {
    width: 180,
    height: parseInt(Math.random() * 20 + 15) * 10,
    color: '#3a2d5b',
    cursor: 'default',
    borderRadius: 5,
    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset',
    backgroundColor: '#5c439b',
    borderColor: '#796b1d',
    fontSize: '80px',
    lineHeight: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '1px 1px 0px #816abe'
  };
}

let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let styleList = {};
const events = [];

arrayList.map(function(i) {
  styleList[i] = getItemStyle();
});

export default class ListView extends Component {
  constructor(props) {
    super(props)
    this.bindEventMapContent();
    this.state = {
      styleList: styleList,
    }
  }

  bindEventMapContent() {
    events.forEach(i => {
      this[i] = this[i].bind(this);
    });
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: this.refs.container.clientWidth
      });
    }, false);
  } 
  
  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }
  render(){
    return (
      <div className="albumPanel">
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {
            this.props.data.map((i, index) => {
              let style = {
                width: index%3 !== 0 ? 190 : 390,
                height: index%3 !== 0 ? 240 : 370
              };
              return (
                <a href={`#/item/${i.id}`} className={`${i.w} album item`} style={style} key={index}>
                  <Card>
                    <CardHeader
                      title={i.title}
                    />
                    <CardMedia style={{width: index%3 !== 0 ? '120px':'250px',margin: 'auto'}}>
                      <img src={i.img}/>
                    </CardMedia>
                    <CardTitle subtitle={i.price}/>
                  </Card>
                </a>
              );
            })
          }
        </AutoResponsive>
      </div>
    )
  }
}
