import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, beforeEach, vi } from "vitest";

import AccomodationContent from "../../Page/Accommodation.jsx";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "abc123" }),
    Navigate: ({ to }) => <div>Redirect to {to}</div>,
  };
});

describe("AccomodationContent", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  test("affiche l'état de chargement au début", () => {
    globalThis.fetch.mockReturnValue(new Promise(() => {}));

    render(
      <MemoryRouter>
        <AccomodationContent />
      </MemoryRouter>
    );

    expect(screen.getByText(/chargement du logement/i)).toBeInTheDocument();
  });

  test("affiche les informations du logement lorsque la requête réussit", async () => {
    const fakeAccommodation = {
      id: "abc123",
      title: "Appartement cosy",
      location: "Paris",
      pictures: ["img1.jpg", "img2.jpg"],
      tags: ["Centre-ville", "Vue mer"],
      host: { name: "Nathalie Jean", picture: "host.jpg" },
      rating: 4,
      description: "Très bel appartement.",
      equipments: ["Wifi", "Cuisine équipée"],
    };

    globalThis.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeAccommodation,
    });

    render(
      <MemoryRouter>
        <AccomodationContent />
      </MemoryRouter>
    );

    const title = await screen.findByText(/appartement cosy/i);
    expect(title).toBeInTheDocument();
  });

  test("redirige vers /404 si fetch échoue (logement non trouvé)", async () => {
    // On simule une réponse serveur "KO" (ex: 404)
    globalThis.fetch.mockResolvedValueOnce({
      ok: false,
    });

    render(
      <MemoryRouter>
        <AccomodationContent />
      </MemoryRouter>
    );

    // Après la fin du chargement, le composant doit rendre <Navigate to="/404" />
    // (mocké en <div>Redirect to /404</div>)
    const redirect = await screen.findByText(/redirect to \/404/i);
    expect(redirect).toBeInTheDocument();
  });
});
