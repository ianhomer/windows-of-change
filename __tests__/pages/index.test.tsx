import React from "react";
import { shallow } from 'enzyme';
import Index from "../../src/pages/index";

it("renders OK", () => {
  const wrapper = shallow(<Index />);
  expect(wrapper.find('title').text()).toBe("Windows of Change");
});
