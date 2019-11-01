import React, { useState } from 'react';

export const ViewContext = React.createContext();

export const ViewProvider = (props) => {
  const [view, setView] = useState('');
  
  const changeView = (newView) => {
    setView(newView);
  }

  return (
    <ViewContext.Provider value={{ view, changeView }}>{props.children}</ViewContext.Provider>
  )
}