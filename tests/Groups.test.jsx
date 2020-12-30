import Groups from "../src/components/Groups.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

describe("GroupsListItem", () => {
  const setStateMock = jest.fn();
  const sampleGroups = [
    {
      name: "Sample Group 1"
    },
    {
      name: "Sample Group 2"
    }
  ]

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementation(() => [sampleGroups, setStateMock]);
    
    const wrapper = shallow(<Groups />);

    expect(wrapper.is(".groups-container")).toBe(true);
  });
});