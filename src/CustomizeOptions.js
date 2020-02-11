import React, { Component } from 'react';
import CreateOptions from './CreateOptions'
import CreateFeatures from './CreateFeatures'



export default class CustomizeOptions extends Component{
   
    render(){ 
        const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
            return(
            <CreateOptions 
                item={item}
                selected={this.props.selected}
                feature={feature}
                handleUpdateFeature = {this.props.handleUpdateFeature}/>)
        });

        return (
            <CreateFeatures 
                featureHash={featureHash}
                feature={feature}
                options={options}/>
        );
                
  });
    return features;
}}