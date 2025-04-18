import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [imageData, setImageData] = useState({
    imageUrl: null,
    prompt: "",
    style: "none",
  });

  return (
    <AppContext.Provider value={{ imageData, setImageData }}>
      {children}
    </AppContext.Provider>
  );
};
