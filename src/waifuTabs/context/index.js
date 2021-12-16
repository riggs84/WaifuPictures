import React, {useContext, useState} from 'react';

const TabContextData = React.createContext();

export const useTabsContext = () => {
  return useContext(TabContextData);
};

export const TabsContext = ({children}) => {
  const [data, setData] = useState({});

  const add = (category, files) => {
    if (!data[category]) {
      setData((data[category] = files));
    }
    // else {
    //   setData(data[category].concat(files));
    //   console.log('azaza1', data);
    // }
  };

  return (
    <TabContextData.Provider value={{data, add}}>
      {children}
    </TabContextData.Provider>
  );
};
