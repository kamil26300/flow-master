export const groupTickets = (tickets, users, grouping) => {
  switch (grouping) {
    case "status":
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        acc[status] = [...(acc[status] || []), ticket];
        return acc;
      }, {});

    case "user":
      return tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        const userName = user ? user.name : "Unassigned";
        acc[userName] = [...(acc[userName] || []), ticket];
        return acc;
      }, {});

    case "priority":
      const priorityNames = priorityMap
      return tickets.reduce((acc, ticket) => {
        const priorityName = priorityNames[ticket.priority];
        acc[priorityName] = [...(acc[priorityName] || []), ticket];
        return acc;
      }, {});

    default:
      return { All: tickets };
  }
};

export const priorityMap = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No Priority",
};

export const getPriorityKey = (value) => {
  const key = Object.keys(priorityMap).find(key => priorityMap[key] === value);
  return Number(key)
};

export const sortTickets = (tickets, sorting) => {
  return [...tickets].sort((a, b) => {
    if (sorting === "priority") {
      return b.priority - a.priority;
    }
    return a.title.localeCompare(b.title);
  });
};
