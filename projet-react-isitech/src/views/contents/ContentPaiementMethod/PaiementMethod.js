/* import react */
import React from 'react';

/* import components */

/* import navbar */
import Navbar from '../../../components/features/navbar/Navbar'

/* import css file */
import './PaiementMethod.scss'

class PaimentMethod extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="main-card">
            <div className="text-and-title">
                <h2>Trouvez le bon casino en fonction de vos méthodes de paiement préférées</h2>
                <p className="text-muted">
                Pour effectuer un dépôt d'argent dans un casino en ligne, vous disposez de nombreuses méthodes plus ou moins intéressantes pour vous. Encore une fois, à titre indicatif, notre but n'est pas de vous orienter vers telle ou telle méthode, mais plutôt de vous montrer les solutions disponibles afin que vous puissiez choisir celle qui vous convient le mieux.
                </p>
            </div>

            
            
            <div className="card-container">


                <div className="divgroup">

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                            <div class="carousel-item active">
                            <div className="card-payment card-blue">
                            <img src="https://wallpaperaccess.com/full/660387.png" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Paypal</h3>
                            </div>
                            </div>
                            <div className="card-payment card-purple">
                            <img src="https://blog.iqoption.com/wp-content/uploads/2019/02/skrill.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Skrill</h3>
                            </div>
                            </div>
                            <div className="card-payment card-red">
                            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgroupthink%2Ffiles%2F2014%2F02%2F8631889823_48c97e00cf_b.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Bitcoin</h3>
                            </div>
                            </div>
                            <div className="card-payment card-orange">
                            <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/mmc-landing/terrigen/qa/images/cards/blap_card-0bad0f13dc.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Carte bancaire</h3>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="card-payment card-blue">
                            <img src="https://wallpaperaccess.com/full/660387.png" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Paypal</h3>
                            </div>
                            </div>
                            <div className="card-payment card-purple">
                            <img src="https://blog.iqoption.com/wp-content/uploads/2019/02/skrill.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Skrill</h3>
                            </div>
                            </div>
                            <div className="card-payment card-red">
                            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgroupthink%2Ffiles%2F2014%2F02%2F8631889823_48c97e00cf_b.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Bitcoin</h3>
                            </div>
                            </div>
                            <div className="card-payment card-orange">
                            <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/mmc-landing/terrigen/qa/images/cards/blap_card-0bad0f13dc.jpg" alt="Img"/>
                            <div className="card-title-content">
                                <h3>Carte bancaire</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>


                    
                </div>
            </div>
	    </div>
      </div>
    );
  }
}

export default PaimentMethod;
