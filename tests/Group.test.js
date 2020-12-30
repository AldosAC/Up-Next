import Group from "../src/models/Group.js"

describe("Group", () => {
  const sampleGroup = {
    name: "Group 1",
    hasGone: false
  }

  it("should create a new Group instance", () => {
    const newGroup = new Group("Group 1")

    expect(newGroup).toMatchObject(sampleGroup);
  });
});