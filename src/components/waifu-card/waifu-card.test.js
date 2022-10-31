import React from "react";
import WaifuCard from "../waifu-card/waifu-card";
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
    <WaifuCard
      name={obj.name}
      imageURL={obj.imageURL}
      handleClick={obj.handleClick}
    ></WaifuCard>
  );
  const wc = screen.getByRole("listitem");
  expect(wc).toBeInTheDocument();
  expect(wc).toHaveClass("waifu-card");
});
