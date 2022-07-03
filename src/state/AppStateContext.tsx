import { Dispatch, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { createContext, FC, PropsWithChildren } from "react";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";

const appData: AppState = {
  lists: [],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default appData;

// Costum hook to use AppState

export const useAppState = () => {
  return useContext(AppStateContext);
};
