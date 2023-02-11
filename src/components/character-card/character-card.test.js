import React from "react";
import CharacterCard from "./character-card";
import { render, screen } from "@testing-library/react";
import { FEMALES } from "../../data/characters";

test("waifu-card renders", () => {
  let obj = {
    name: FEMALES[0].name,
    imageURL: FEMALES[0].imageURL,
    handleClick: jest.fn(),
    gender: "female",
  };
  render(
    <CharacterCard
      name={obj.name}
      imageURL={obj.imageURL}
      handleClick={obj.handleClick}
      gemde={obj.female}
    ></CharacterCard>
  );
  const wc = screen.getByRole("listitem");
  expect(wc).toBeInTheDocument();
});
