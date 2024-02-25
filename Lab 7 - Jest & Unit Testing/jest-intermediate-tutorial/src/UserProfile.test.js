import React from "react";
import renderer from "react-test-renderer";
import UserProfile from "./UserProfile";

it("renders correctly when there is a user", () => {
  const user = { name: "John", email: "john@example.com" };
  const tree = renderer.create(<UserProfile user={user} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is no user", () => {
  const tree = renderer.create(<UserProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
