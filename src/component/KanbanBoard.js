import React from "react";
import Column from "./Column";
import { groupTickets, sortTickets } from "../utils/dataUtils";
import "../styles/KanbanBoard.css";

const STATUS_ORDER = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const PRIORITY_ORDER = ["No Priority", "Urgent", "High", "Medium", "Low"];

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const groupedTickets = groupTickets(tickets, users, grouping);
  const sortedGroupedTickets = {};

  Object.keys(groupedTickets).forEach((key) => {
    sortedGroupedTickets[key] = sortTickets(groupedTickets[key], sorting);
  });

  if (grouping === "priority") {
    const priorityColumns = PRIORITY_ORDER.reduce((acc, priority) => {
      acc[priority] = sortedGroupedTickets[priority] || [];
      return acc;
    }, {});

    return (
      <div className="kanban-board">
        {PRIORITY_ORDER.map(priority => (
          <Column
            key={priority}
            grouping={grouping}
            title={priority}
            tickets={priorityColumns[priority]}
            users={users}
          />
        ))}
      </div>
    );
  }

  if (grouping === "status") {
    const statusColumns = STATUS_ORDER.reduce((acc, status) => {
      acc[status] = sortedGroupedTickets[status] || [];
      return acc;
    }, {});

    return (
      <div className="kanban-board">
        {STATUS_ORDER.map((status) => (
          <Column
            key={status}
            grouping={grouping}
            title={status}
            tickets={statusColumns[status]}
            users={users}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="kanban-board">
      {Object.entries(sortedGroupedTickets).map(([groupName, groupTickets]) => (
        <Column
          key={groupName}
          grouping={grouping}
          title={groupName}
          tickets={groupTickets}
          users={users}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
