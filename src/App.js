/* eslint-disable import/no-extraneous-dependencies */
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Welcome from './components/Welcome'
import PlayGame from './components/PlayGame'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/play-game" component={PlayGame} />
    </Switch>
  </BrowserRouter>
)

export default App
