import { Action } from "./actions";
import { nanoid } from "nanoid";
import { findItemIndexById } from "../utils/arrayUtils";

export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST":
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      console.log(draft.lists);

      console.log("hola");

      break;

    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const index = findItemIndexById(draft.lists, listId);
      console.log(index);

      if (index !== undefined) {
        draft.lists[index].tasks.push({
          id: nanoid(),
          text,
        });
      }

      break;
    }

    case "REMOVE_LIST": {
      const listId = action.payload;

      draft.lists = draft.lists.filter((item) => {
        return item.id !== listId;
      });
      break;
    }

    case "REMOVE_TASK": {
      const { listId, taskId } = action.payload;
      const index = findItemIndexById(draft.lists, listId);
      if (index !== undefined) {
        draft.lists[index].tasks = draft.lists[index].tasks.filter(
          (item) => item.id !== taskId
        );
      }
      break;
    }
    default:
      break;
  }
};
