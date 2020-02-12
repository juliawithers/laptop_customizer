import React, { Component } from 'react';
import CustomizeOptions from './CustomizeOptions'

export default class CreateForm extends Component{
    render(){
        return(
           <form className="main_form">
                <h2>Customize your laptop</h2>
                <CustomizeOptions 
                    selected = {this.props.selected}
                    features = {this.props.features}
                    handleUpdateFeature = {this.props.handleUpdateFeature}
                />
          </form> 
        )
    }
}





