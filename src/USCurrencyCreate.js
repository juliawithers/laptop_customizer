import React from 'react';


export default class USCurrencyCreate extends React.Component{
   
   render(){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
  
    return USCurrencyFormat.format(this.props.cost)
   }
    
}

