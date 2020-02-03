import React from 'react';
import styles from './Page.module.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Title from "./Title/Title";
import Footer from "./Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Manicure from "./Manicure/Manicure";
import Pedicure from "./Pedicure/Pedicure";
import Lashes from "./Lashes/Lashes";

function Page(props) {
    return (
        <React.Fragment>
            <Header asideOpenFunc={props.asideOpenFunc} asideOpen={props.asideOpen}/>
            <main className={styles.main}>
                <Navbar/>
                <Switch>
                    <Route exact path='/' render={() => (<Title/>)}/>
                    <Route path='/manicure' render={() => (
                        <Manicure/>
                    )}/>
                    <Route path='/pedicure' render={() => (
                        <Pedicure/>
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
