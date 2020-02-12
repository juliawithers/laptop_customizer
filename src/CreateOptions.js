import React, { Component } from 'react';
import slugify from 'slugify';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import USCurrencyCreate from './USCurrencyCreate'

export default class CreateOptions extends Component{
    render(){ 
        const itemHash = slugify(JSON.stringify(this.props.item));       
        const { feature, item } = this.props;

            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={this.props.item.name === this.props.selected[this.props.feature].name}
                        onChange={() => this.props.handleUpdateFeature(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {this.props.item.name} (<USCurrencyCreate cost={this.props.item.cost}/>)
                    </label>
                </div>
                );
            
        };
    }