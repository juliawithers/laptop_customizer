import React, { Component } from 'react';
import USCurrencyCreate from './USCurrencyCreate';


export default class CreateSummaryOption extends Component{
    render(){
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.option}</div>
                <div className="summary__option__cost">
                <USCurrencyCreate cost={this.props.cost}/>
                </div>
            </div>
        );
    };
}