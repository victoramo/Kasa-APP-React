import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Collapse from "./Collapse"; // adapte si besoin (ex: "./Collapse.jsx")

describe("Collapse", () => {
  test("s'ouvre au clic souris", () => {
    const { container } = render(
      <Collapse title="Description">
        <p>Texte affiché</p>
      </Collapse>
    );

    const root = container.querySelector(".collapse");
    const header = screen.getByRole("button", { name: /description/i });

    fireEvent.click(header);

    expect(root).toHaveClass("is-open");
    expect(screen.getByText(/texte affiché/i)).toBeInTheDocument();
  });

  test("est accessible au clavier (header focusable)", () => {
    render(
      <Collapse title="Description">
        <p>Via clavier</p>
      </Collapse>
    );

    const header = screen.getByRole("button", { name: /description/i });

    // Le composant doit être navigable au clavier (tabIndex=0)
    expect(header).toHaveAttribute("tabindex", "0");

    // Vérifie qu'il expose l'état aux technologies d'accessibilité
    expect(header).toHaveAttribute("aria-expanded", "false");
  });

  test("affiche une liste quand isList=true", () => {
    const { container } = render(
      <Collapse title="Équipements" isList={true}>
        <ul>
          <li>Wifi</li>
          <li>Télévision</li>
        </ul>
      </Collapse>
    );

    const root = container.querySelector(".collapse");
    const header = screen.getByRole("button", { name: /équipements/i });

    fireEvent.click(header);

    expect(root).toHaveClass("is-open");
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Wifi")).toBeInTheDocument();
    expect(screen.getByText("Télévision")).toBeInTheDocument();
  });
});
