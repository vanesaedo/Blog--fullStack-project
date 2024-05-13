import React from "react";
import { shallow } from "enzyme";
import EntriesList from "./EntriesList";

describe("EntriesList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EntriesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
