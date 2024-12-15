import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test AddCategory", () => {
  test("cambia el texto de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    //en las opciones del evento le pasamos lo que queremos modificar de las propiedades de eveto
    // que estamos simulando
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("se debe llamar a onNewVCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";

    //Con esto mockeamos la función que se la pasa por parametro al componente
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("se debe llamar a onNewVCategory si el input esta vacío", () => {
    
    //Con esto mockeamos la función que se la pasa por parametro al componente
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    
    const form = screen.getByRole("form");
    
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);    
    //otra forma de hacerlo
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
