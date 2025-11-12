import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

describe("Carousel component", () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  it("should render with initial state and update correctly", () => {
    const { getByAltText, getByText } = render(<Carousel images={images} />);

    // Initial state
    expect(getByAltText("Slide 1")).toBeInTheDocument();
    expect(getByText("1/3")).toBeInTheDocument();

    // Click next button
    fireEvent.click(document.querySelector(".right_arrow"));
    expect(getByAltText("Slide 2")).toBeInTheDocument();
    expect(getByText("2/3")).toBeInTheDocument();

    // Click previous button
    fireEvent.click(document.querySelector(".left_arrow"));
    expect(getByAltText("Slide 1")).toBeInTheDocument();
    expect(getByText("1/3")).toBeInTheDocument();

    // Click next button to reach the last slide to see if the loop is functional
    fireEvent.click(document.querySelector(".right_arrow"));
    fireEvent.click(document.querySelector(".right_arrow"));

    // Checking we're on the last slide
    expect(getByAltText("Slide 3")).toBeInTheDocument();
    expect(getByText("3/3")).toBeInTheDocument();

    // Click next button to loop back to the first slide
    fireEvent.click(document.querySelector(".right_arrow"));
    expect(getByAltText("Slide 1")).toBeInTheDocument();
    expect(getByText("1/3")).toBeInTheDocument();

    // Click previous button to loop back to the last slide
    fireEvent.click(document.querySelector(".left_arrow"));
    expect(getByAltText("Slide 3")).toBeInTheDocument();
    expect(getByText("3/3")).toBeInTheDocument();
  });
});
