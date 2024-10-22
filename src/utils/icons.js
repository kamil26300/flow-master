import { ReactComponent as NoPriorityIcon } from "../assets/No-priority.svg";
import { ReactComponent as LowPriorityIcon } from "../assets/Img - Low Priority.svg";
import { ReactComponent as MediumPriorityIcon } from "../assets/Img - Medium Priority.svg";
import { ReactComponent as HighPriorityIcon } from "../assets/Img - High Priority.svg";
import { ReactComponent as UrgentPriorityIcon } from "../assets/SVG - Urgent Priority grey.svg";
import { ReactComponent as UrgentPriorityColourIcon } from "../assets/SVG - Urgent Priority colour.svg";

import { ReactComponent as TodoStatusIcon } from "../assets/To-do.svg";
import { ReactComponent as CancelledStatusIcon } from "../assets/Cancelled.svg";
import { ReactComponent as DoneStatusIcon } from "../assets/Done.svg";
import { ReactComponent as InprogressStatusIcon } from "../assets/in-progress.svg";
import { ReactComponent as BacklogStatusIcon } from "../assets/Backlog.svg";

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return <UrgentPriorityIcon className="priority-icon" />;
    case 3:
      return <HighPriorityIcon className="priority-icon" />;
    case 2:
      return <MediumPriorityIcon className="priority-icon" />;
    case 1:
      return <LowPriorityIcon className="priority-icon" />;
    case 0:
    default:
      return <NoPriorityIcon className="priority-icon" />;
  }
};

export const getPriorityTitleIcon = (title) => {
  switch (title) {
    case "Urgent":
      return <UrgentPriorityColourIcon className="priority-icon" />;
    case "High":
      return <HighPriorityIcon className="priority-icon" />;
    case "Medium":
      return <MediumPriorityIcon className="priority-icon" />;
    case "Low":
      return <LowPriorityIcon className="priority-icon" />;
    case "No Priority":
    default:
      return <NoPriorityIcon className="priority-icon" />;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Cancelled":
      return <CancelledStatusIcon className="status-icon" />;
    case "Done":
      return <DoneStatusIcon className="status-icon" />;
    case "In progress":
      return <InprogressStatusIcon className="status-icon" />;
    case "Todo":
      return <TodoStatusIcon className="status-icon" />;
    case "Backlog":
    default:
      return <BacklogStatusIcon className="status-icon" />;
  }
};

export const getUserProfile = (name, available) => {
  return (
    <div className="user-avatar">
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        alt={name}
      />
      <span
        className={`status-indicator ${available ? "available" : "away"}`}
      />
    </div>
  );
};
