import { List } from "../state/appStateReducer";
export const findItemIndexById = (lists: List[], listId: string): number => {
  let count = -1;
  lists.find((item: List) => {
    count += 1;
    return item.id === listId;
  });
  return count;
};
