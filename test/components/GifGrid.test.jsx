import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//se mockead directamente todo el hook
jest.mock("../../src/hooks/useFetchGifs");

describe("Test GifGrid", () => {
  const category = "One Punch";

  test("mostar loading al iniciar", () => {
    //simulamos lo que devolvería el hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByText("Cargando..."));
    expect(screen.getAllByText(category));
  });

  test("mostrar las imagenes de los gifs", () => {
    const gifs = [
      {
        id: 12,
        title: "ddd",
        url: "httl",
      },
      {
        id: 123,
        title: "ddd123",
        url: "httl123",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    var images = screen.getAllByRole("img");

    expect(images.length).toBe(2);
  });
});
