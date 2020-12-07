import React from 'react';

import StyledDropdown from '../elements/StyledDropdown';

interface DropdownProps {
  menuItems: { item: string; onClick?: () => void }[];
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const renderMenuItems = (): JSX.Element => {
    return (
      <ul className="dropdown--list">
        {props.menuItems.map((item: any, index: number) => (
          <li key={index} className="dropdown--items" onClick={item.onClick}>
            <div className="dropdown--item">{item.item}</div>
          </li>
        ))}
      </ul>
    );
  };

  return <StyledDropdown>{renderMenuItems()}</StyledDropdown>;
};

export default Dropdown;
