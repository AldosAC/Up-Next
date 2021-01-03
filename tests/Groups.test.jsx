import Groups from "../src/components/Groups.jsx";

describe("Groups", () => {
  const sampleGroups = [
    { name: "group 1", hasGone: false },
    { name: "group 2", hasGone: false }
  ];

  const setGroupsMock = jest.fn();
  const deleteGroupMock = jest.fn();

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it("should render without throwing an error", () => {
    const wrapper = shallow(
      <Groups 
        groups={sampleGroups} 
        setGroups={setGroupsMock} 
        deleteGroup ={deleteGroupMock} 
      />
    );

    expect(wrapper.is(".groups-container")).toBe(true);
  });
});