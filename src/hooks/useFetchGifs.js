import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  //llamada api
  const [images, setimages] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const getimages = async () => {
    const imgs = await getGifs(category);
    setimages(imgs);
    setIsLoading(false)
  };

  useEffect(() => {
    //useEffect no puede ser asincrono, sacar siempre la llamda a una función
    getimages();
  }, []);

  return {
    images,
    isLoading,
  };
};
