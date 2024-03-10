import {Component} from 'react'
import './index.css'

const celebrationEmojis = [
  '🎉', // Party Popper
  '🥳', // Partying Face
  '🎊', // Confetti Ball
  '🎈', // Balloon
  '🎆', // Fireworks
  '🎇', // Sparkler
  '🎂', // Birthday Cake
  '🥂', // Clinking Glasses
]

const arr = []

let i = 1

while (i <= 32) {
  arr.push(i)
  i += 1
}

class PlayGame extends Component {
  render() {
    const name = localStorage.getItem('userName')

    return (
      <div className="play-game-page">
        <div className="play-game-main-card">
          <h1 className="main-heading">Mahajong Game</h1>
          <div>
            <div className="score-time-card">
              <p>Score:1</p>
              <p>Time:1</p>
            </div>
            <div className="emojis-card">
              <p className="name">welcome {name} 👋</p>
              <div className="emojis-list-card">
                {arr.map(each => (
                  <button key={each} type="button" className="emoji-btn">
                    <p className="emoji">{celebrationEmojis[0]}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayGame
