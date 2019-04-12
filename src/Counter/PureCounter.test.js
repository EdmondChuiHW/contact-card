import React from 'react';
import ReactDOM from 'react-dom';
import { PureCounter } from './PureCounter';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('PureCounter', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PureCounter/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders zero given no props', () => {
    const { getByText } = render(<PureCounter/>);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('renders text given positive number', () => {
    const { getByText } = render(<PureCounter count={1}/>);
    expect(getByText('1')).toBeInTheDocument();
  });

  it('renders text given two-digit number', () => {
    const { getByText } = render(<PureCounter count={12}/>);
    expect(getByText('12')).toBeInTheDocument();
  });

  it('renders text given negative number', () => {
    const { getByText } = render(<PureCounter count={-1}/>);
    expect(getByText('-1')).toBeInTheDocument();
  });
});
