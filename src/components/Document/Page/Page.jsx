import React from 'react';
import styles from './Page.module.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Title from './Title/Title';
import Footer from './Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Manicure from './Nails/Manicure';
import Lashes from './Lashes/Lashes';

function Page(props) {
  return (
      <React.Fragment>
        <Header asideOpenFunc={props.asideOpenFunc}
                asideOpen={props.asideOpen}/>
        <main className={styles.main}>
          <Navbar/>
          <Switch>
            <Route exact path='/' render={() => (<Title/>)}/>
            <Route path='/nails' render={() => (
                <Manicure/>
            )}/>
            <Route path='/lashes' render={() => (
                <Lashes/>
            )}/>
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
  );
}

export default Page;
