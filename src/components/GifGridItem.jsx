export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
};
