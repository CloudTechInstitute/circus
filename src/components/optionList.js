import React, { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <FaCaretDown
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </FaCaretDown>
));

export default function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Dropdown
      show={show}
      onToggle={(isOpen) => setShow(isOpen)}
      align="start"
      flip
      container
    >
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-basic"
        ref={target}
      ></Dropdown.Toggle>

      <Dropdown.Menu
        show={show}
        target={target.current}
        className="dropdown-menu-left"
      >
        <Dropdown.Item href="#/action-1">link 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">link 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">link 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
