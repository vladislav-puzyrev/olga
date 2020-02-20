import React from 'react';
import Page from './Page/Page';
import Cursor from './Cursor/Cursor';
import Aside from './Aside/Aside';

function Document(props) {
  if (props.asideOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style['overflow-y'] = 'auto';
  }

  return (
      <React.Fragment>
        <Page asideOpenFunc={props.asideOpenFunc} asideOpen={props.asideOpen}/>
        <Aside asideIsOpen={props.asideOpen} asideCloseFunc={props.handleAsideClose}/>
        <Cursor cursor={props.cursor}/>
      </React.Fragment>
  );
}

export default Document;
