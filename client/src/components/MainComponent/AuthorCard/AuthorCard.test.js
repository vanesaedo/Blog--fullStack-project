import React from "react";
import { shallow } from "enzyme";
import AuthorCard from "./AuthorCard";

describe("AuthorCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AuthorCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
