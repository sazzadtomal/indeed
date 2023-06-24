import React, { Component } from 'react';
import classes from './App.css';
import Layout from './Components/UI/Layout/Layout';
import Tagline from './Components/UI/Tagline/Tagline';
import Categories from './Components/Catagories/Categories';
import Button from './Components/UI/Button/Button';
import {BrowserRouter,Route} from "react-router-dom"
import Music from './Containers/Music/Music';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
              <div className={classes.App}>
                <Layout>
                   <Tagline/>
                   <Route path="/" exact component={Categories} />
                   <Route path="/music" exact component={Music} />
                   <Button/>
                </Layout>
              </div>
            </BrowserRouter>
    );
  }
}

export default App;
