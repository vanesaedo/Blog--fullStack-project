import React from "react";
import { shallow } from "enzyme";
import Authors from "./Authors";

describe("Authors", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Authors />);
    expect(wrapper).toMatchSnapshot();
  });
});
