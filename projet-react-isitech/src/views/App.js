import React from 'react';
import Casino from '../components/Casino';

class App extends React.Component{

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className="App">
        <Casino/>
      </div>
    );
  }
}

export default App;
