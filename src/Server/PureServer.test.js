import React from 'react';
import ReactDOM from 'react-dom';
import { PureServer } from './PureServer';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('PureServer', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PureServer/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty given no props', () => {
    const { getByText } = render(<PureServer/>);
    expect(() => getByText('Serving')).toThrow();
  });

  it('renders serving given isServing = false', () => {
    const { getByText } = render(<PureServer isServing={false}/>);
    expect(() => getByText('Serving')).toThrow();
  });

  it('renders class given isServing = false', () => {
    const { container } = render(<PureServer isServing={false}/>);
    expect(container.firstChild.classList.contains('is-serving')).toBe(false);
  });

  it('renders serving given isServing = true', () => {
    const { getByText } = render(<PureServer isServing={true}/>);
    expect(getByText('Serving')).toBeInTheDocument();
  });

  it('renders class given isServing = true', () => {
    const { container } = render(<PureServer isServing={true}/>);
    expect(container.firstChild.classList.contains('is-serving')).toBe(true);
  });
});
