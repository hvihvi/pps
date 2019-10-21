import * as React from "react";
import { Provider } from "react-redux";
import CardList from "./CardList";
import { store } from "./redux";
import { PpsProps } from "./types";
import Filters from "./Filters";

const ComponentsContext = React.createContext({});

const Pps = ({ items, components }: PpsProps) => {
  return (
    <Provider store={store}>
      <ComponentsContext.Provider value={components}>
        <Filters />
        <CardList items={items} />
      </ComponentsContext.Provider>
    </Provider>
  );
};

export const useComponents = () => React.useContext(ComponentsContext);

export default Pps;
