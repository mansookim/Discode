import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SettingsPage = ({ toggleSettings, subject, type, updateSubject, deleteSubject, history }) => {
  if (!subject) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { subjectName: subject.name }
  });

  const [showRed, setShowRed] = useState(false);
  const watchName = watch("subjectName");

  const afterDeletePath = type === "Server" ? '/@me' : `/channels/${subject.serverId}`

  const handleDelete = () => {
    deleteSubject(subject.id)
      .then(() => {
        if (history.location.pathname !== afterDeletePath) history.push(afterDeletePath)
      })
      .then(() => toggleSettings(null));
  }

  const checkThenExit = () => {
    if (isDirty) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const onSubmit = (data) => (
    updateSubject(subject.id, { name: data.subjectName})
      .then(() => {
        setShowRed(false);
        reset({ subjectName: watchName});
      },
      () => {})
  );

  const prompt = (
    <div className={`save-prompt ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!
      <button onClick={() => {
        setShowRed(false);
        reset();
      }}>
        Reset
      </button>
      <button>Save Changes</button>
    </div>
  )

  const subjectTitleDiv = type === "Server" ? (
    <div>
      { watchName }
    </div>
  ) : (
    <div>
      # { watchName } TEXT CHANNELS
    </div>
  )

  const overviewText = type === "Server" ?
    (<h2>Server Overview</h2>) : (<h2>OVERVIEW</h2>)

  const formInner = type === "Server" ? (
    <div>
      <label>SERVER NAME</label>
      <input type="text" placeholder={subject.name} {...register("subjectName", {
        required: "This field is required",
        minLength: {
          value: 2,
          message: "Must be between 2 and 100 in length"
        },
        maxLength: {
          value: 100,
          message: "Must be between 2 and 100 in length"
        }
      })} />
      { errors.subjectName?.message }
    </div>
  ) : (
    <div>
      <label>CHANNEL NAME</label>
      <input type="text" placeholder={subject.name} {...register("subjectName", { required: "This field is required" })} />
      { errors.subjectName?.message }
    </div>
  )

  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          { subjectTitleDiv }
          <ul>
            <li>
              Overview
            </li>
            <li onClick={handleDelete}>
              Delete { type }
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          { overviewText }
          <form onSubmit={handleSubmit(onSubmit)}>
            { formInner }
            { isDirty && prompt }
          </form>
        </div>
      </div>

      <div className="close-settings">
        <button onClick={checkThenExit}>X</button>
      </div>
    </div>
  )
}

export default SettingsPage;