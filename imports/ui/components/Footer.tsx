import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

import StyledFooter from '../elements/StyledFooter';

interface FooterProps {
  onSend: (value: string) => void;
}

const Footer = (props: FooterProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [iconName, setIconName] = React.useState(faMicrophone);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    const name = event.target.value !== '' ? faPaperPlane : faMicrophone;
    setIconName(name);
  };

  const handleClick = (): void => {
    if (iconName === faMicrophone) return;
    props.onSend(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (event): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faSmile} className="iconFooter" />
      <label className="message--label">
        <input
          value={inputValue}
          onChange={handleChange}
          className="message--input"
          placeholder="Taper un message"
          onKeyDown={handleKeyDown}
        />
      </label>
      <FontAwesomeIcon icon={iconName} className="iconFooter" onClick={handleClick} />
    </StyledFooter>
  );
};

export default Footer;
