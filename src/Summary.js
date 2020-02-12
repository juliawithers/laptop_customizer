import React, { Component } from 'react';
import CreateSummaryOption from './CreateSummaryOption'


export default class Summary extends Component{

    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <CreateSummaryOption
                    key={featureHash}
                    feature={feature}
                    option={selectedOption.name}
                    cost={selectedOption.cost}/>
            );
        });
        return summary
    }
}