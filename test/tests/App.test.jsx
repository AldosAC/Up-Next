import App from "../../src/components/App.jsx";
import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

describe("App", () => {
  const setStateMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should ask for a session id if none exists", () => {
    useStateMock.mockImplementation( () => [null, setStateMock])
    const wrapper = shallow(<App />);
    
    expect(wrapper.is("#app")).toBe(true);
  });

  it("should render main app if session id exists", () => {
    useStateMock.mockImplementation( () => ["XKCL", setStateMock])
    const wrapper = shallow(<App />);

    expect(wrapper.is("#app")).toBe(true);
  });
});