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
});