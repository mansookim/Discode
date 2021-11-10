import FriendIndexItem from "./FriendIndexItem";

const PendingIndex = ({ currentUser, incomings, outgoings, updateFriendship, deleteFriendship }) => {

  const handleUpdate = (friendId) => {
    updateFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  const handleDelete = (friendId) => {
    deleteFriendship({
      user_id: currentUser.id,
      friend_id: friendId
    });
  };

  return (
    <div>
      { incomings.map(friend => <FriendIndexItem key={friend.id} friend={friend} type="incoming" action1={handleUpdate} action2={handleDelete} />)}
      { outgoings.map(friend => <FriendIndexItem key={friend.id} friend={friend} type="outgoing" action1={handleDelete} />)}
    </div>
  )
}
import { connect } from 'react-redux';
import { updateFriendship, deleteFriendship } from "../../actions/friendship_actions";
import { selectOutgoings, selectIncomings } from '../../reducers/selectors';

const mSTP = (state) => ({
  currentUser: state.session,
  outgoings: selectOutgoings(state),
  incomings: selectIncomings(state)
});

const mDTP = (dispatch) => ({
  updateFriendship: (ids) => dispatch(updateFriendship(ids)),
  deleteFriendship: (ids) => dispatch(deleteFriendship(ids))
});

export default connect(mSTP, mDTP)(PendingIndex);
