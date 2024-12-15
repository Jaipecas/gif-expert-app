import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test hook useFetchGifs", () => {
  test("regresa estado inicial", () => {
    //renderizamos el hook, necesitamos renderizalo porque los hooks utilizan los ciclos de vida de los componentes
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("regresa array de imagenes", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    //Espera hasta que se de la condición especificada
    //en este caso esperamos hasta que se hayan cargado las imagenes
    //como segundo parametro se le puede pasar un timeout maximo de espera y mas opciones
    //acordarse de meter el await!!!!!
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
