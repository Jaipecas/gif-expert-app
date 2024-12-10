import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  //{target} sirve para desesctrucutar las propuiedades del evento y quedarnos con la que nos interesa
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    onNewCategory(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifd"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
