import { useState } from 'react';

const NewConversationPopup = ({ top, conversations, setShowPopup, currentUser, friends, createConversation, history}) => {

  const [selectedFriends, setSelectedFriends] = useState({});

  const toggleFriend = (friend) => {
    setSelectedFriends(prevState => ({...prevState, [friend.id]: friend}));
  }

  const arrayEquals = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx])

  const handleCreate = () => {
    console.log(selectedFriends);
    const groupIds = [currentUser.id, ...Object.keys(selectedFriends)].map(id => parseInt(id)).sort((a,b) => a-b);
    console.log(groupIds);
    for (let conversation of conversations) {
      console.log(conversation.members);
      if (arrayEquals(conversation.members, groupIds)) {
        if (history.location.pathname !== `/channels/@me/${conversation.id}`) history.push(`/channels/@me/${conversation.id}`);
        setShowPopup(false);
        return;
      }
    }
    createConversation({member_ids: groupIds})
      .then(({ res })=> history.push(`/channels/@me/${res.conversation.id}`))
      .then(() => setShowPopup(false));
  }

  const count = Object.keys(selectedFriends).length

  return (
    <div className="popup-container">

      <div className="new-conversation-popup" style={{top: `${top+25}px`}}>

        <h3>Select Friends</h3>

        { count <= 8 ? <p>You can add {9-count} more friends.</p> : <p>This group has a 10 member limit.</p>}

        <div>
          { Object.values(selectedFriends).map(friend => friend.username).join(" ") }
        </div>

        { friends.map(friend => {
          return (
            <div key={friend.id} onMouseDown={e => e.preventDefault()} onClick={() => toggleFriend(friend)}>
              {friend.username}
            </div>
          )
        })}

        <button onMouseDown={e => e.preventDefault()} onClick={handleCreate} disabled={count > 9}>Create Group DM</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectStatus } from '../../reducers/selectors';
import { createConversation } from '../../actions/conversation_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  friends: selectStatus(state, 3)
});

const mDTP = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation))
});

export default withRouter(connect(mSTP, mDTP)(NewConversationPopup));
