import React from 'react';

import StyledLoginForm from '../elements/StyledLoginForm';

interface LoginProps {
  onLogin: (state: LoginState) => void;
}
interface LoginState {
  username: string;
  phone: string;
  password: string;
}

const LoginForm = (props: LoginProps): JSX.Element => {
  const [state, setState] = React.useState<LoginState>({
    username: '',
    phone: '',
    password: '',
  });

  const { username, phone, password } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = event.target.value;
    const inputName: string = event.target.name;

    setState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleKeyDown = (event): void => {
    if (event.key === 'Enter') {
      props.onLogin(state);
    }
  };

  const validateForm = () => username.length > 0 && password.length > 0;

  return (
    <StyledLoginForm>
      <label className="label">
        <input
          className="input"
          name="username"
          placeholder="Nom d'utilisateur *"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="phone"
          placeholder="Téléphone"
          value={phone}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="password"
          placeholder="Mot de passe *"
          type="password"
          value={password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button
        onClick={() => props.onLogin(state)}
        disabled={!validateForm()}
        className="loginBtn"
      >
        Connexion
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;
