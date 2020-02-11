import React, { Component } from 'react';
import USCurrencyCreate from './USCurrencyCreate';


export default class Touch extends Component{
    render(){
     const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0);

        return <USCurrencyCreate cost = {total}/>
    }
}
