import {DropDownBody} from '../Atoms/DropDown/Body/DropDownBody';
import {DropDownDownArrow} from '../Atoms/DropDown/Head/DropDownDownArrow';
import {useState} from 'react';
import {DropDownUpArrow} from '../Atoms/DropDown/Head/DropDownUpArrow';

export const DropDownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-indigo-600 border-2 border-solid">
      {/* HEAD */}
      <h2>{props.title}</h2>
      {/* BODY */}
      {isOpen ? <DropDownBody content={props.content} /> : null}
      {/* FOOT */}
      {isOpen ? (
        <div onClick={handleClick}>
          <DropDownUpArrow />
        </div>
      ) : (
        <div onClick={handleClick}>
          <DropDownDownArrow />
        </div>
      )}
    </div>
  );
};
