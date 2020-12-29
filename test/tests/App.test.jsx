import App from "../../src/components/App.jsx";

describe("App", () => {

  it("should render a component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is("#app")).toBe(true);
  });
});