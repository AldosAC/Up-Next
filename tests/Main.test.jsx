import Main from "../src/components/Main.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

const sampleGroups = [
  { name: "group 1", hasGone: false },
  { name: "group 2", hasGone: false }
];

describe("Main", () => {
  const setGroupsMock = jest.fn();
  const setCurrentGroupMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);

    const wrapper = shallow(<Main />);

    expect(wrapper.is(".main")).toBe(true);
  });
});