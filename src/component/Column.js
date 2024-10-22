import React from "react";
import Cards from "./Cards";
import "../styles/Column.css";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as ThreeDotMenuIcon } from "../assets/3 dot menu.svg";
import { getPriorityColouredIcon, getStatusIcon, getUserProfile } from "../utils/icons";
import { getPriorityKey } from "../utils/dataUtils";

function Column({ title, tickets, users, grouping }) {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {grouping === "status" && getStatusIcon(title)}
          {grouping === "user" && getUserProfile(title, users.find(user => user.name === title)?.available)}
          {grouping === "priority" && getPriorityColouredIcon(getPriorityKey(title))}
          <span>{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <AddIcon />
          <ThreeDotMenuIcon />
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Cards
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
