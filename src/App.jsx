import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import styles from './App.module.css';
import WaterWave from 'react-water-wave';
import image from './img/backgrounds/main.png';
import Document from './components/Document/Document';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: {
        color: 'transparent',
        active: false,
        coords: [0, 0],
      },
      asideOpen: false,
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleAsideOpen = this.handleAsideOpen.bind(this);
    this.handleAsideClose = this.handleAsideClose.bind(this);
  }

  handleMouseMove(event) {
    const target = event.target;
    const newCoords = [event.pageX, event.pageY];
    const isActive = !!(target.dataset.cursorActive);
    const color = target.dataset.cursorActive || 'white';

    this.setState({
      cursor: {
        color: color,
        active: isActive,
        coords: newCoords,
      },
    });
  }

  handleAsideOpen() {
    this.setState(state => ({
      asideOpen: !state.asideOpen,
    }));
  }

  handleAsideClose() {
    this.setState({
      asideOpen: false,
    });
  }

  render() {
    return (
        <HashRouter>
          <Switch>
            <Route exact path='/' render={() => (
                <WaterWave onMouseMove={this.handleMouseMove}
                           className={styles.page}
                           imageUrl={image}
                           perturbance='0.03'
                           resolution='512'>
                  {() => (
                      <Document asideCloseFunc={this.handleAsideClose}
                                asideOpenFunc={this.handleAsideOpen}
                                asideOpen={this.state.asideOpen}
                                cursor={this.state.cursor}/>
                  )}
                </WaterWave>
            )}/>
            <Route render={() => (
                <div onMouseMove={this.handleMouseMove} className={styles.page}>
                  <Document asideCloseFunc={this.handleAsideClose}
                            asideOpenFunc={this.handleAsideOpen}
                            asideOpen={this.state.asideOpen}
                            cursor={this.state.cursor}/>
                </div>
            )}/>
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
