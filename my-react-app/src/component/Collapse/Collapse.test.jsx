import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Collapse from "./Collapse.jsx";

describe("Collapse", () => {
  test("est fermé par défaut (class is-open absente)", () => {
    const { container } = render(
      <Collapse title="Description" content="Texte caché" />
    );

    const root = container.firstChild; // <div class="collapse ...">
    expect(root).not.toHaveClass("is-open");
    // le texte est dans le DOM mais masqué par le CSS (max-height: 0)
    expect(screen.getByText("Texte caché")).toBeInTheDocument();
  });

  test("s'ouvre au clic sur la barre de titre", () => {
    const { container } = render(
      <Collapse title="Description" content="Texte affiché" />
    );

    const root = container.firstChild;
    const header = screen.getByRole("button", { name: /description/i });

    fireEvent.click(header);

    expect(root).toHaveClass("is-open");
    expect(screen.getByText("Texte affiché")).toBeInTheDocument();
  });

  test("s'ouvre au clavier avec la touche Enter", () => {
    const { container } = render(
      <Collapse title="Description" content="Via clavier" />
    );

    const root = container.firstChild;
    const header = screen.getByRole("button", { name: /description/i });

    fireEvent.keyDown(header, { key: "Enter", code: "Enter", charCode: 13 });

    expect(root).toHaveClass("is-open");
    expect(screen.getByText("Via clavier")).toBeInTheDocument();
  });

  test("affiche une liste quand isList=true", () => {
    const equipments = ["Wifi", "Télévision"];

    render(
      <Collapse title="Équipements" content={equipments} isList={true} />
    );

    // on ouvre pour voir la liste
    const header = screen.getByRole("button", { name: /équipements/i });
    fireEvent.click(header);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Wifi")).toBeInTheDocument();
    expect(screen.getByText("Télévision")).toBeInTheDocument();
  });
});

