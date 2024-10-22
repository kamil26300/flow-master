import React, { useState } from "react";
import "../styles/Header.css";
import { ReactComponent as DisplayIcon } from "../assets/Display.svg";
import { ReactComponent as Down } from "../assets/down.svg";

function Header({ grouping, setGrouping, sorting, setSorting }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <DisplayIcon />
        <span>Display</span>
        <Down className={`${isOpen ? "rotated" : ""} carrot`} />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select
              value={grouping}
              onChange={(e) => {
                setGrouping(e.target.value);
                setIsOpen(false);
              }}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select
              value={sorting}
              onChange={(e) => {
                setSorting(e.target.value);
                setIsOpen(false);
              }}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
