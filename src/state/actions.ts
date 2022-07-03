interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface RemoveListAction {
  type: "REMOVE_LIST";
  payload: string;
}

interface RemoveTaskAction {
  type: "REMOVE_TASK";
  payload: { taskId: string; listId: string };
}

export type Action =
  | AddListAction
  | AddTaskAction
  | RemoveListAction
  | RemoveTaskAction;

// Action creators

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const removeList = (listId: string): Action => ({
  type: "REMOVE_LIST",
  payload: listId,
});

export const removeTask = (taskId: string, listId: string): Action => ({
  type: "REMOVE_TASK",
  payload: { taskId, listId },
});
