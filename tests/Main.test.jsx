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
  const setPendingGroupsMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main />);

    expect(wrapper.is(".main")).toBe(true);
  });

  it("should render the currentGroup when one exists", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [sampleGroups[0], setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main />);

    expect(wrapper.find('CurrentGroup')).toExist();
  });

  it("should pick a random group when Up Next! is clicked", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main />);

    wrapper.find('.btn-up-next').simulate('click');
    expect(setCurrentGroupMock).toHaveBeenCalled();
  });

  it("should show 'finished' message when Up Next is clicked and pendingGroups is empty", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [[], setPendingGroupsMock]);

    const wrapper = shallow(<Main />);

    wrapper.find('.btn-up-next').simulate('click');
    let { calls } = setCurrentGroupMock.mock;
    let setCurrentGroupArg = calls[calls.length - 1][0];
    expect(setCurrentGroupArg.name).toEqual("That's All Folks!");
  });
});