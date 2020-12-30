import GroupsListItem from "../src/components/GroupsListItem.jsx";

describe("GroupsListItem", () => {
  const sampleGroup = {
    name: "Sample Group"
  };

  it("should render a list item", () => {
    const wrapper = shallow(<GroupsListItem group={sampleGroup} />);

    expect(wrapper.is(".groups-list-item")).toBe(true);
  });
});