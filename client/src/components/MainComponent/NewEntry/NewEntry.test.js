import React from "react";
import { shallow } from "enzyme";
import NewEntry from "./NewEntry";

describe("NewEntry", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewEntry />);
    expect(wrapper).toMatchSnapshot();
  });
});
