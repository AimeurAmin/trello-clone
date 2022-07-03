import { useState } from "react";
import AddItemButton from "../../components/AddItemButton/AddItemButton";
import NewItemForm from "../../components/NewItemForm/NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark: boolean;
}

const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <div>
      <AddItemButton dark={dark} onClick={() => setShowForm(true)} />
    </div>
  );
};

export default AddNewItem;
