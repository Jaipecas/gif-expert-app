import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

//importante no usar condicionales en los Hooks clase 76 8:23

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  const onNewCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories((prevCategories) => [newValue, ...prevCategories]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onNewCategory={onNewCategory} />
      {/* Listado gifs */}
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
