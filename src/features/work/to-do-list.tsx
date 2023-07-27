import { useState } from "react";
import Container from "../../components/container";
import Button from "../../components/button";
import Trash from "../../assets/icons/trash";
import Check from "../../assets/icons/check";
import notebook from "./../../assets/casual-life-3d-notebook-with-glasses-and-pencil.png";
import clock from "./../../assets/3d-casual-life-clock-and-calendar.png";

type ListItemType = {
  label: string;
  id: number;
  done: boolean;
};

const ToDo = () => {
  const [listItems, setListItems] = useState<ListItemType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      label: inputValue,
      done: false,
    };
    setListItems([...listItems, newListItem]);
    setInputValue("");
  };

  const deleteItem = (id: number) => {
    const newlist = listItems.filter((listItem) => listItem.id !== id);
    setListItems(newlist);
  };

  const handleCheck = (id: number) => {
    const newList = listItems.map((listItem) => {
      if (listItem.id === id) {
        return { ...listItem, done: true };
      }
      return listItem;
    });
    setListItems(newList);
  };

  return (
    <Container size="lg">
      <h2>To do list</h2>
      <div className="todo__wrapper">
        <header className="todo__header">
          <img src={notebook} className="todo__img" alt="Notebook image" />
          <h1 className="todo__title">Things to do</h1>
          <div className="todo">
            <input
              className="todo__input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              size="md"
              color="blue"
              text="Add"
              onClick={() => handleAdd()}
            ></Button>
          </div>
        </header>
        <main className="todo__list">
          {listItems.map((listItem: ListItemType) => {
            return (
              <div className="todo__list__info" key={listItem.id}>
                <div className="todo__list__label">{listItem.label}</div>
                <div>
                  <div
                    className="check-icon"
                    onClick={() => handleCheck(listItem.id)}
                  >
                    <Check completed={listItem.done} />
                  </div>
                  <div onClick={() => deleteItem(listItem.id)}>
                    <Trash />
                  </div>
                </div>
              </div>
            );
          })}
        </main>
        <footer>
          <img src={clock} alt="Clock image" />
        </footer>
      </div>
    </Container>
  );
};

export default ToDo;
