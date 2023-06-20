import React, { Component } from 'react';
import classes from './App.css';
import Layout from './Components/UI/Layout/Layout';
import Tagline from './Components/UI/Tagline/Tagline';
import Carousel from './Containers/Carousel/Carousel';
import Button from './Components/UI/Button/Button';

class App extends Component {
  render() {
    return (
            <div className={classes.App}>
              <Layout>
                 <Tagline/>
                 <Carousel/>
                 <Button/>
              </Layout>
            </div>
       
    );
  }
}

export default App;
