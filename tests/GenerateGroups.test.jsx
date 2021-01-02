import GenerateGroups from "../src/components/GenerateGroups.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

const sampleGroups = [
  { name: "group 1", hasGone: false },
  { name: "group 2", hasGone: false }
];

describe("AddGroups", () => {
  const setInputMock = jest.fn();
  const setModalMock = jest.fn();
  const setCountMock = jest.fn();
  const addGroupMock = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  })

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputMock]);
    useStateMock.mockImplementationOnce((init) => [init, setModalMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCountMock])

    const wrapper = shallow(<GenerateGroups addGroup={addGroupMock} />)

    expect(wrapper.is(".generate-groups-container")).toBe(true);
  });

  it("should toggle the input field when Generate Groups is clicked", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputMock]);
    useStateMock.mockImplementationOnce((init) => [init, setModalMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCountMock])

    const wrapper = shallow(<GenerateGroups addGroup={addGroupMock} />)

    wrapper.find(".btn-generate-groups").simulate("click");

    expect(setModalMock).toBeCalled();
  });

  it("should close the modal when input is empty", () => {
    useStateMock.mockImplementationOnce((init) => [0, setInputMock]);
    useStateMock.mockImplementationOnce((init) => [true, setModalMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCountMock])

    const wrapper = shallow(<GenerateGroups addGroup={addGroupMock} />)

    wrapper.find(".btn-generate-groups").simulate("click");

    expect(addGroupMock).not.toBeCalled();
  });

  it("should add multiple groups", () => {
    useStateMock.mockImplementationOnce((init) => [3, setInputMock]);
    useStateMock.mockImplementationOnce((init) => [true, setModalMock]);
    useStateMock.mockImplementationOnce((init) => [init, setCountMock])

    const wrapper = shallow(<GenerateGroups addGroup={addGroupMock} />)

    wrapper.find(".btn-generate-groups").simulate("click");

    expect(addGroupMock.mock.calls[0][0].length).toEqual(3);
  });
});