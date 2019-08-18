import React from 'react';

function MainLayout(props) {
  const { children } = props;
  const { title } = props;
  return (
    <div>
      <h1 className="main-title">{title}</h1>
      <div className="content">{children}</div>
    </div>
  );
}

export default MainLayout;
