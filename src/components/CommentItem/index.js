import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {
    id,
    nameInput,
    commentInput,
    date,
    isLiked,
    initialClassName,
  } = commentDetails

  const initial = nameInput[0].toUpperCase()
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'btn-style active' : 'btn-style'

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteBtn = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{nameInput}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{commentInput}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onClickLikeBtn}
            data-testid="like"
            className={likeTextClassName}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onClickDeleteBtn}
          data-testid="delete"
          className="btn-style"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
