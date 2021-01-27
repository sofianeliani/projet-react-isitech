import React from 'react';
import CardOffer from '../card/CardOffer';

class Casino extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="CasinoApp">
        <CardOffer/>
      </div>
    );
  }
}

export default Casino;
