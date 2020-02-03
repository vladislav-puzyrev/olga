import React from 'react';
// import styles from './Document.module.css';
import Page from "./Page/Page";
import Cursor from "./Cursor/Cursor";
import Aside from "./Aside/Aside";

function Document(props) {
    return (
        <React.Fragment>
            <Page asideOpenFunc={props.asideOpenFunc} asideOpen={props.asideOpen}/>
            {props.asideOpen && <Aside asideCloseFunc={props.handleAsideClose}/>}
            <Cursor cursor={props.cursor}/>
        </React.Fragment>
    );
}

export default Document;
