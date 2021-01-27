import React from 'react'
import './CardOffer.scss'

class CardOffer extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card text-white bg-warning mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-offer-title">Primary card title</h5>
                <p className="card-offer-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default CardOffer;
