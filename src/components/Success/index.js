import './index.css'

const Success = () => {
  const name = localStorage.getItem('userName')

  return (
    <div className="welcome-page">
      <div>
        <h1 className="heading">React Tiles</h1>
        <div className="score-time-card">
          <p>Score: 1</p>
          <p>Time: 1</p>
        </div>
        <div className="details-card success-card">
          <p className="name">welcome {name} 👋👋</p>
          <h1 className="heading">Game Finished!</h1>
          <p className="success-text">Score</p>
          <p className="success-text">Time Taken</p>
        </div>
      </div>
    </div>
  )
}
export default Success
