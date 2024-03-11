import {withRouter} from 'react-router-dom'
import './index.css'

const Success = props => {
  const name = localStorage.getItem('userName')
  const {time, score} = props

  const onClickPlayAgain = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="welcome-page">
      <div>
        <h1 className="heading">React Tiles</h1>
        <div className="score-time-card">
          <p>Score: {score}</p>
          <p>Time: {time}</p>
        </div>
        <div className="details-card success-card">
          <p className="name">welcome {name} 👋👋</p>
          <h1 className="heading">Game Finished!</h1>
          <p className="success-text">Score: {score}</p>
          <p className="success-text">Time Taken: {time}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClickPlayAgain}
        className="btn play-again-btn"
      >
        Play again
      </button>
    </div>
  )
}
export default withRouter(Success)
