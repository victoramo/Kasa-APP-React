import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Carousel from "./Carousel.jsx";

describe("Carousel", () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  test("affiche la première image et le compteur", () => {
    render(<Carousel images={images} />);

    const img = screen.getByRole("img", { name: /slide 1/i });
    expect(img).toHaveAttribute("src", "img1.jpg");
    expect(screen.getByText("1/3")).toBeInTheDocument();
  });

  test("clique sur la flèche droite passe à l'image suivante", () => {
    render(<Carousel images={images} />);

    fireEvent.click(screen.getByAltText(/flêche de droite/i));

    const img = screen.getByRole("img", { name: /slide 2/i });
    expect(img).toHaveAttribute("src", "img2.jpg");
    expect(screen.getByText("2/3")).toBeInTheDocument();
  });

  test("clique sur la flèche gauche depuis la première image revient à la dernière", () => {
    render(<Carousel images={images} />);

    fireEvent.click(screen.getByAltText(/flêche de gauche/i));

    const img = screen.getByRole("img", { name: /slide 3/i });
    expect(img).toHaveAttribute("src", "img3.jpg");
    expect(screen.getByText("3/3")).toBeInTheDocument();
  });

  test("avec une seule image, les flèches et le numéro ne s'affichent pas", () => {
    render(<Carousel images={["unique.jpg"]} />);

    const img = screen.getByRole("img", { name: /slide 1/i });
    expect(img).toHaveAttribute("src", "unique.jpg");

    expect(screen.queryByAltText(/flêche de droite/i)).toBeNull();
    expect(screen.queryByAltText(/flêche de gauche/i)).toBeNull();
    expect(screen.queryByText(/1\/1/)).toBeNull(); // adapte si toi tu l'affiches
  });
});
