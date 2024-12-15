import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {images.map((image) => (
          //el codigo {...image} permite pasar todas las prpiedades del objeto como props al componente hijo
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
