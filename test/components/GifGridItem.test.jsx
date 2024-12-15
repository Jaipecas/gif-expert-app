//intentar crear el la carpeta de test la misma estructura de carpetas que tenemos en src

import { GifGridItem } from "../../src/components/GifGridItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas gifGridItem", () => {
  const titleTest = "Test";
  const url = "https://loquesea.api/";

  test("should ", () => {
    //del render obtienes el container es decir el elemento div del componente
    const { container } = render(<GifGridItem title={titleTest} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should ", () => {
    render(<GifGridItem title={titleTest} url={url} />);
    //genera in console.log del componente renderizado
    //screen.debug();

    //se obtiene el elemento html que se quiere testear
    const imgElement = screen.getByRole("img");

    expect(imgElement.src).toBe(url);
    expect(imgElement.alt).toBe(titleTest);
  });

  test("should que exista un texto en el componente", () => {
    render(<GifGridItem title={titleTest} url={url} />);

    expect(screen.getByText("Test")).toBeTruthy();
  });
});
