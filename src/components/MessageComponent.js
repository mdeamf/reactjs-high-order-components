import React from 'react';

export const MessageComponent = (props) => {
  return (
    <div>
      <p>This is my message to you: Keep working hard!</p>
      <button onClick={props.workHard}>Work Hard!</button>
    </div>
  );
};
