const MessageItem = ({ message, sender, currentUserId }) => {
  const imgSrc = sender.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'

  return (
    <div className="message-item">
      <div className="message-pfp">
        <img src={imgSrc} className="pfp" />
      </div>
      { message.body }
      { currentUserId === sender.id && <button>Edit</button>}
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  sender: state.entities.users[ownProps.message.senderId]
})

export default connect(mSTP)(MessageItem);
