import React, {useContext, useState} from 'react';

const TabContextData = React.createContext();
const TabContextSetData = React.createContext();

export const useTabsContext = () => {
  const data = useContext(TabContextData);
  const setData = useContext(TabContextSetData);
  return {data, setData};
};

export const TabsContext = ({children}) => {
  const [data, setData] = useState({});

  return (
    <TabContextData.Provider value={data}>
      <TabContextSetData.Provider value={setData}>
        {children}
      </TabContextSetData.Provider>
    </TabContextData.Provider>
  );
};
