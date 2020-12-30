import GroupsList from "../src/components/GroupsList.jsx";

describe("GroupsList", () => {
  const sampleGroups = [
    { name: "group 1", hasGone: false },
    { name: "group 2", hasGone: false }
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