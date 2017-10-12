import React from 'react';
import 'jest-styled-components';
import { shallow } from 'preact-render-spy';

import Card from '../components/Card';

test('Renders the card', () => {
  const context = shallow(<Card title="Hello people" />);

  context[0].$$typeof = Symbol.for('react.test.json')

  expect(context[0]).toMatchSnapshot();
});