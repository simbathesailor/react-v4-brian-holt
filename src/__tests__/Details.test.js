import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot()
//   expect(c.toJSON()).toMatchInlineSnapshot(`
// <h1>
//   loading … 
// </h1>
// `);
});

test("show modal when toggle Modal is called", () => {
  const c = create(<Details search={() => {}}/>)
  const instance = c.getInstance()
  expect(instance.state.showModal).toBe(false)
  instance.toggleModal()
  expect(instance.state.showModal).toBe(true)
})
