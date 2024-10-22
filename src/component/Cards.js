import React from "react";
import "../styles/Card.css";
import { getPriorityIcon, getStatusIcon, getUserProfile } from "../utils/icons";
import ToolTip from "./TootTip";
import { priorityMap } from "../utils/dataUtils";

function Cards({ ticket, user, grouping }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== "user" && (
          <ToolTip
            text={`${user.name}: ${
              user.available ? "Available" : "Un-Available"
            }`}
          >
            {getUserProfile(user.name, user.available)}
          </ToolTip>
        )}
      </div>
      <div className="card-title">
        {grouping !== "status" && (
          <span className="card-title-prefix">
            <ToolTip text={ticket.status}>
              {getStatusIcon(ticket.status)}
            </ToolTip>
          </span>
        )}
        <span>{ticket.title}</span>
      </div>
      <div className="card-footer">
        {grouping !== "priority" && (
          <div className="priority-indicator">
            <ToolTip text={priorityMap[ticket.priority]}>
              {getPriorityIcon(ticket.priority)}
            </ToolTip>
          </div>
        )}
        {ticket.tag.map((tag) => (
          <div key={tag} className="tag">
            <span className="tag-dot"></span>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
