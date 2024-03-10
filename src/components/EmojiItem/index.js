const EmojiItem = props => {
  const {item, onClickEmojiRevealBtn, activeEmojiId} = props
  const {id, isActive, emoji} = item

  const onClickBtn = () => {
    onClickEmojiRevealBtn(id)
  }

  return (
    <button
      onClick={onClickBtn}
      type="button"
      className={`emoji-btn ${activeEmojiId === id && 'active-emoji'}`}
    >
      {isActive === true && <p className="emoji">{emoji}</p>}
    </button>
  )
}

export default EmojiItem
