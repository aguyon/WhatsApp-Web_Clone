import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

import StyledForm from '../../elements/StyledForm';

interface FormProps {
  type: string;
}

const Form = (props: FormProps): JSX.Element => {
  const [editable, setEditable] = React.useState<boolean>(false);

  const title: string = props.type === 'actu' ? 'Actu' : 'Votre nom';

  const toggleEditable = (): void => {
    if (!editable) setEditable(true);
    else {
      if (props.type === 'actu') {
        Meteor.users.update(
          { _id: Meteor.userId() },
          {
            $set: {
              'profile.status': state,
            },
          }
        );
      } else {
        Meteor.call('user.username', Meteor.userId(), state);
      }
      setEditable(false);
    }
  };

  const value: string =
    props.type === 'actu' ? Meteor.user().profile.status : Meteor.user().username;

  const [state, setState] = React.useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue: string = event.target.value;

    setState(newValue);
  };

  return (
    <StyledForm>
      <span className="form--title">{title}</span>
      {!editable ? (
        <div className="form--container">
          <input readOnly={true} className="form--input __border" value={state} />
          <FontAwesomeIcon icon={faPen} className="form--icon" onClick={toggleEditable} />
        </div>
      ) : (
        <div className="form--container">
          <input
            readOnly={false}
            className="form--input __border"
            autoFocus
            value={state}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className="form--icon"
            onClick={toggleEditable}
          />
        </div>
      )}
    </StyledForm>
  );
};

export default Form;
