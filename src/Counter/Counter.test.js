import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Counter', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders zero given no props', () => {
    const { getByText } = render(<Counter/>);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('renders text given positive number', () => {
    const { getByText } = render(<Counter count={1}/>);
    expect(getByText('1')).toBeInTheDocument();
  });

  it('renders text given two-digit number', () => {
    const { getByText } = render(<Counter count={12}/>);
    expect(getByText('12')).toBeInTheDocument();
  });

  it('renders text given negative number', () => {
    const { getByText } = render(<Counter count={-1}/>);
    expect(getByText('-1')).toBeInTheDocument();
  });
});
