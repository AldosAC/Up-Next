import Main from "../src/components/Main.jsx";
import { useState as useStateMock } from "react";
import Session from "../src/models/Session.js";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

const sampleSession = new Session("ABCD");

const sampleGroups = [
  { name: "group 1", hasGone: false },
  { name: "group 2", hasGone: false }
];

describe("Main", () => {
  const setGroupsMock = jest.fn();
  const setCurrentGroupMock = jest.fn();
  const setPendingGroupsMock = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  })

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main session={sampleSession} />);

    expect(wrapper.is(".main")).toBe(true);
  });

  it("should render the currentGroup when one exists", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [sampleGroups[0], setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main session={sampleSession} />);

    expect(wrapper.find('CurrentGroup')).toExist();
  });

  it("should pick a random group when Up Next! is clicked", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);

    const wrapper = shallow(<Main session={sampleSession} />);

    wrapper.find('.btn-up-next').simulate('click');
    expect(setCurrentGroupMock).toHaveBeenCalled();
  });

  it("should show 'finished' message when Up Next is clicked and pendingGroups is empty", () => {
    useStateMock.mockImplementationOnce(() => [sampleGroups, setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [[], setPendingGroupsMock]);

    const wrapper = shallow(<Main session={sampleSession} />);

    wrapper.find('.btn-up-next').simulate('click');
    let { calls } = setCurrentGroupMock.mock;
    let setCurrentGroupArg = calls[0][0];
    expect(setCurrentGroupArg.name).toEqual("That's All Folks!");
  });

  it("should add a group when a single group is passed into addGroup", () => {
    const groupName = "Test Groups";

    //Main State
    useStateMock.mockImplementationOnce(() => [[], setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);
    //AddGroups State
    useStateMock.mockImplementationOnce((init) => [groupName, jest.fn()]);
    useStateMock.mockImplementationOnce((init) => [true, jest.fn()]);
    //All Else State
    useStateMock.mockImplementation((init) => [init, jest.fn()]);

    const wrapper = mount(<Main session={sampleSession} />);
    

    wrapper.find(".btn-add-group").simulate("click");
    let [[ lastSetGroupsCall ]] = setGroupsMock.mock.calls;
    let [[ lastSetPendingGroupsCall ]] = setPendingGroupsMock.mock.calls;
    let wasAdded = lastSetGroupsCall[0].name === groupName 
     && lastSetPendingGroupsCall[0].name === groupName;

    expect(wasAdded).toBe(true);
  })

  it("should add a group when multiple groups are passed into addGroup", () => {
    const groupNames = ["Test Group1", "Test Group2"];

    //Main State
    useStateMock.mockImplementationOnce(() => [[], setGroupsMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCurrentGroupMock]);
    useStateMock.mockImplementationOnce((init) => [init, setPendingGroupsMock]);
    //AddGroups State
    useStateMock.mockImplementationOnce((init) => [groupNames, jest.fn()]);
    useStateMock.mockImplementationOnce((init) => [true, jest.fn()]);
    //All Else State
    useStateMock.mockImplementation((init) => [init, jest.fn()]);

    const wrapper = mount(<Main session={sampleSession} />);
    

    wrapper.find(".btn-add-group").simulate("click");
    let [[ lastSetGroupsCall ]] = setGroupsMock.mock.calls;
    let [[ lastSetPendingGroupsCall ]] = setPendingGroupsMock.mock.calls;
    let wasAdded = lastSetGroupsCall.length === groupNames.length;

    expect(wasAdded).toBe(true);
  })

});