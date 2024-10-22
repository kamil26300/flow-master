import React from "react";
import "../styles/Card.css";
import { getPriorityIcon, getStatusIcon, getUserProfile } from "../utils/icons";

function Cards({ ticket, user, grouping }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== "user" && getUserProfile(user?.name, user?.available)}
      </div>
      <div className="card-title">
        {grouping !== "status" && (
          <span className="card-title-prefix">
            {getStatusIcon(ticket.status)}
          </span>
        )}
        <span>{ticket.title}</span>
      </div>
      <div className="card-footer">
        {grouping !== "priority" && (
          <div className="priority-indicator">
            {getPriorityIcon(ticket.priority)}
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
