import React from "react";
import { shallow } from "enzyme";
import EntryCard from "./EntryCard";

describe("EntryCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EntryCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
