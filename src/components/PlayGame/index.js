import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import EmojiItem from '../EmojiItem'
import Success from '../Success'

const arr = []

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

let i = 1

const gettingRandomEmoji = () =>
  celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)]

while (i <= 32) {
  const emoji = gettingRandomEmoji()

  arr.push({id: i, isActive: true, emoji})
  const countOfEmoji = arr.filter(each => emoji === each.emoji)

  if (countOfEmoji.length === 4) {
    const index = celebrationEmojis.indexOf(emoji)
    celebrationEmojis.splice(index, 1)
  }
  i += 1
}

class PlayGame extends Component {
  state = {
    emojisArr: arr,
    activeEmojiId: '',
    score: 0,
    time: 0,
    isGameOver: false,
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({time: prevState.time + 1}))
    }, 1000)

    this.setState({intervalId})
  }

  componentWillUnmount() {
    const {isGameOver, intervalId} = this.state
    if (isGameOver === true) {
      clearInterval(intervalId)
    }
  }

  onClickEmojiRevealBtn = id => {
    const {activeEmojiId, emojisArr} = this.state

    if (activeEmojiId !== '') {
      const activeEmoji = emojisArr.filter(each => each.id === activeEmojiId)[0]
        .emoji
      console.log(activeEmoji)

      const {emoji} = emojisArr.filter(each => each.id === id)[0]

      if (activeEmoji === emoji) {
        this.setState(prevState => ({
          emojisArr: prevState.emojisArr.map(each => {
            if (each.id === id || each.id === activeEmojiId) {
              return {
                ...each,
                isActive: false,
              }
            }
            return each
          }),
          score: prevState.score + 1,
          activeEmojiId: '',
        }))
      } else {
        this.setState(prevState => ({score: prevState.score - 1}))
      }
    } else {
      this.setState({activeEmojiId: id})
    }
  }

  render() {
    const {emojisArr, score, activeEmojiId, time, intervalId} = this.state
    const name = localStorage.getItem('userName')
    console.log(name)
    if (name === null) {
      return <Redirect to="/" />
    }
    const isGameOver = emojisArr.every(each => each.isActive === false)
    if (isGameOver === true) {
      clearInterval(intervalId)
    }

    let modifiedTime
    const divideBy60 = Math.floor(time / 60)

    if (time > 59) {
      if (time % 60 === 0) {
        modifiedTime = `${
          divideBy60.length === 2 ? divideBy60 : `0${divideBy60}`
        }:00`
      } else {
        const remainingTime = time % 60
        modifiedTime = `${
          divideBy60.length === 2 ? divideBy60 : `0${divideBy60}`
        }:${remainingTime > 9 ? remainingTime : `0${remainingTime}`}`
      }
    } else if (time > 9) {
      modifiedTime = `00:${time}`
    } else {
      modifiedTime = `00:0${time}`
    }

    return isGameOver === false ? (
      <div className="play-game-page">
        <div className="play-game-main-card">
          <h1 className="main-heading">Mahajong Game</h1>
          <div>
            <div className="score-time-card">
              <p>Score: {score}</p>
              <p>Time: {modifiedTime}</p>
            </div>
            <div className="emojis-card">
              <p className="name">welcome {name} 👋👋</p>
              <div className="emojis-list-card">
                {emojisArr.map(each => (
                  <EmojiItem
                    key={each.id}
                    item={each}
                    onClickEmojiRevealBtn={this.onClickEmojiRevealBtn}
                    activeEmojiId={activeEmojiId}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Success time={modifiedTime} score={score} />
    )
  }
}

export default PlayGame
