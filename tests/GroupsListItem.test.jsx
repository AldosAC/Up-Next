import GroupsListItem from "../src/components/GroupsListItem.jsx";

describe("GroupsListItem", () => {
  const sampleGroup = {
    name: "Sample Group"
  };

  const deleteGroupMock = jest.fn();

  it("should render a list item", () => {
    const wrapper = shallow(
      <GroupsListItem 
        group={sampleGroup} 
        deleteGrup={deleteGroupMock}
      />
    );

    expect(wrapper.is(".groups-list-item")).toBe(true);
  });
});