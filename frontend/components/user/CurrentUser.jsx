import UserSettings from './UserSettings';
import { useState } from 'react';

const CurrentUser = ({ currentUser }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => (setShowSettings(!showSettings));

  return (
    <div>
      <div>
        { currentUser.username }
        #{ currentUser.tag }
      </div>
      <button onClick={toggleSettings}>Settings</button>

      { showSettings && <UserSettings currentUser={currentUser} toggleSettings={toggleSettings} />}
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP)(CurrentUser);
