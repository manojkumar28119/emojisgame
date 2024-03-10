// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {name: ''}

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onClickPlayBtn = () => {
    const {name} = this.state
    localStorage.setItem('userName', name)

    const {history} = this.props

    history.replace('/play-game')
  }

  render() {
    const {name} = this.state
    console.log(name)
    return (
      <div className="welcome-page">
        <div>
          <h1 className="heading">React Tiles</h1>
          <div className="details-card">
            <h1 className="heading">Enter your name </h1>
            <input
              className="input"
              type="text"
              onChange={this.onChangeNameInput}
            />
            <button type="button" className="btn" onClick={this.onClickPlayBtn}>
              Play
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
