import CurrentGroup from "../src/components/CurrentGroup.jsx";

describe("CurrentGroup", () => {
  const sampleGroup = {
    name: "Sample Group"
  };

  it("should render a list item", () => {
    const wrapper = shallow(<CurrentGroup group={sampleGroup} />);

    expect(wrapper.is(".current-group")).toBe(true);
  });
});