import React from "react";
import { render, screen } from "@testing-library/react";
// 👉 IMPORTANT : on importe les fonctions depuis vitest
import { describe, test, expect } from "vitest";

import Footer from "./footer"; // ou "./Footer" si tu préfères

describe("Footer", () => {
  test("affiche le logo avec le bon alt", () => {
    render(<Footer />);

    const logo = screen.getByAltText(/logo kasa blanc/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("footer__logo");
  });

  test("affiche le texte de copyright", () => {
    render(<Footer />);

    const text = screen.getByText(/© 2020 kasa\. all rights reserved/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("footer__text");
  });
});
