import React, { Component } from 'react';
import Summary from './Summary'
import Total from './Total'

export default class CreateSection extends Component{
    render(){
        return(
            <section className="main_summary">
                <h2>Your cart</h2>
                <Summary 
                selected={this.props.selected}
                />
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    <Total 
                    selected={this.props.selected}
                    />
                </div>
                </div>
          </section>
        )
    }
}

