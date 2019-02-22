import React from "react";

const TaskSection = ({ type, label, content }) => {
  const LinkContent = type === "link" && (
    <p>
      <a href={content} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </p>
  );
  const Content = type !== "link" && <p className={type}>{content}</p>;
  return (
    <div className="task__section">
      <h3>{label}</h3>
      {LinkContent}
      {Content}
    </div>
  );
};

export default TaskSection;