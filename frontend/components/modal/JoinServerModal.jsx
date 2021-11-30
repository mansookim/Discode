import { closeModalOnEscape } from '../../utils/close_utils';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const JoinServerModal = ({ closeModal, servers, openModal, history }) => {

  closeModalOnEscape(closeModal);

  const { register, formState: { isDirty }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });


  const onSubmit = (data) => {
    console.log(`joining server with id ${data.serverId}`)
    // createChannel(channel)
    //   .then(({ res })=> history.push(`/channels/${res.channel.serverId}/${res.channel.id}`))
    //   .then(() => closeModal());
  }

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="modal-header">
          <h2>Join a Server</h2>
          <p>Select an existing server to join.</p>
        </div>

        <div className="modal-content">

          { servers.map(server => {
            return (
              <div key={server.id}>
                <label>
                  { server.name }
                  <input type="radio" id="server" value={server.id} {...register("serverId")} />
                </label>
              </div>
            )
          })}

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={() => openModal({
            type: "server"
          })}>
            Back
          </button>
          <button className="submit-button blue-button" disabled={!isDirty}>
            <div>Join Server</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { selectJoinableServers } from '../../reducers/selectors';

const mSTP = (state) => ({
  servers: selectJoinableServers(state)
})

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(JoinServerModal);