/* import react */
import React from 'react';

/* import components */
import Casino from '../../components/casino/Casino'

/* import navbar */
import Navbar from '../../components/features/navbar/Navbar'

/* import css file */
import './App.scss'

class App extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="text-and-title">
                <h1>GAGNANT-GAGNANT buffet <span className="title-span-red">GEANT</span></h1>
                <p className="text-muted">
                  Bénéficiez d'offres de bonus exclusives pour vos casinos et machines à sous préférées
                </p>
            </div>
        <Casino/>
      </div>
    );
  }
}

export default App;
