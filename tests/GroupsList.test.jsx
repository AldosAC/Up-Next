import GroupsList from "../src/components/GroupsList.jsx";

describe("GroupsList", () => {
  const sampleGroups = [
    {
      name: "Sample Group 1"
    },
    {
      name: "Sample Group 2"
    }
  ];

  it("should render a list", () => {
    const wrapper = shallow(<GroupsList groups={sampleGroups} />);

    expect(wrapper.is(".groups-list")).toBe(true);
  });

  it("should render dynamically", () => {
    const wrapper = shallow(<GroupsList groups={sampleGroups} />);

    expect(wrapper.find("ul").children()).toHaveLength(sampleGroups.length);
  });
});