import Main from "../src/components/Main.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

describe("Main", () => {
  const setStateMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.is(".main")).toBe(true);
  });
});