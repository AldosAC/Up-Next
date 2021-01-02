import AddGroups from "../src/components/AddGroups.jsx";
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

    const wrapper = shallow(<AddGroups addGroup={addGroupMock} />)

    expect(wrapper.is(".add-group-container")).toBe(true);
  });

  it("should toggle the modal when Add Group is click w/o modal", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputMock]);
    useStateMock.mockImplementationOnce((init) => [init, setModalMock]);

    const wrapper = shallow(<AddGroups addGroup={addGroupMock} />)
    wrapper.find(".btn-add-group").simulate("click");

    expect(setModalMock).toBeCalled();
  });

  it("should close the modal and not call addGroup if input is empty", () => {
    useStateMock.mockImplementationOnce((init) => ["", setInputMock]);
    useStateMock.mockImplementationOnce((init) => [true, setModalMock]);

    const wrapper = shallow(<AddGroups addGroup={addGroupMock} />)
    wrapper.find(".btn-add-group").simulate("click");

    let passed = setModalMock.mock.calls.length === 1 
      && addGroupMock.mock.calls.length === 0;

    expect(passed).toBe(true);
  });

  it("should manage the input field properly", () => {
    useStateMock.mockImplementationOnce((init) => ["", setInputMock]);
    useStateMock.mockImplementationOnce((init) => [true, setModalMock]);

    const wrapper = shallow(<AddGroups addGroup={addGroupMock} />)
    wrapper.find(".input-add-group").simulate("change", { target: { value: "test" }});

    expect(setInputMock).toBeCalled();
  });
});