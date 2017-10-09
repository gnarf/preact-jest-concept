import React from 'react';
import 'jest-styled-components';
import render from 'preact-render-to-string';

import Card from '../components/Card';

test('Renders the card', () => {
  const component = render(<Card title="Hello people" />);

  console.log(component);

  expect(component).toMatchSnapshot();
});