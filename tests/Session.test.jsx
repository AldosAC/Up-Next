import Session from "../src/components/Session.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

describe("Session", () => {
  const setSessionMock = jest.fn();
  const setInputValueMock = jest.fn();
  const setHasSessionMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce((init) => [init, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);

    expect(wrapper.is(".session")).toBe(true);
  });

  it("should ask about a session id if hasSession is false", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce((init) => [init, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);

    expect(wrapper.is(".no-session")).toBe(true);
  });

  it("should ask to enter session id if hasSession is true", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce(() => [true, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);

    expect(wrapper.is(".has-session")).toBe(true);
  });

  it("should should generate a random session if 'No' is clicked", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce((init) => [init, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);
    wrapper.find(".btn-new-session").simulate("click")
    expect(setSessionMock).toHaveBeenCalled();
  });

  it("should render the session input if 'Yes' is clicked", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce((init) => [init, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);
    wrapper.find(".btn-existing-session").simulate("click")
    expect(setHasSessionMock).toHaveBeenCalled();
  });

  it("should update the input field as it's modified", () => {
    useStateMock.mockImplementationOnce((init) => [init, setInputValueMock]);
    useStateMock.mockImplementationOnce((init) => [true, setHasSessionMock]);

    const wrapper = shallow(<Session setSession={setSessionMock} />);
    wrapper.find(".session-input").simulate("change", { target: { value: "b" }});
    expect(setInputValueMock).toHaveBeenCalled();
  })
});