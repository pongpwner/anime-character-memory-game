import React from "react";
import CharacterCard from "./character-card";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import waifus from "../../data/waifus";

test("waifu-card renders", () => {
  let obj = {
    name: waifus[0].name,
    imageURL: waifus[0].imageURL,
    handleClick: jest.fn(),
  };
  render(
    <CharacterCard
      name={obj.name}
      imageURL={obj.imageURL}
      handleClick={obj.handleClick}
    ></CharacterCard>
  );
  const wc = screen.getByRole("listitem");
  expect(wc).toBeInTheDocument();
  expect(wc).toHaveClass("waifu-card");
});
