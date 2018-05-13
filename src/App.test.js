import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("<App />", () => {
  it("renders the header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".app-header").text()).toBe(
      "Airsorted Bookings Dashboard"
    );
  });
});
