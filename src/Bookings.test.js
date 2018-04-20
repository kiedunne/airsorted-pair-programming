import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import Bookings from "./Bookings";

Enzyme.configure({ adapter: new Adapter() });

describe("Bookings", () => {
  it("renders bookings", () => {
    let bookings = [
      {
        _id: "5ad8970af36d281d329e779f",
        date: "2017-12-10T17:00:00",
        name: "Jeff Zeldman",
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg",
        cancelled: false
      },
      {
        _id: "5ad89720f36d281d329e77bd",
        date: "2017-12-10T13:00:00",
        name: "Brad Frost",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg",
        cancelled: false
      },
      {
        _id: "5ad89737f36d281d329e77c3",
        date: "2017-12-10T14:00:00",
        name: "Addell Charles",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
        cancelled: false
      },
      {
        _id: "5ad89748f36d281d329e77c7",
        date: "2017-12-10T18:30:00",
        name: "Remy Sharp",
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
        cancelled: false
      },
      {
        _id: "5ad8adf3f36d281d329e84c4",
        date: "2017-12-10T18:30:00",
        name: "Matt Ince",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg",
        cancelled: true
      }
    ];

    const wrapper = mount(<Bookings bookings={bookings} />);
    expect(wrapper.find("div")).toHaveLength(5);
  });
});
