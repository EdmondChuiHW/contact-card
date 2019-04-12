import React from 'react';
import ReactDOM from 'react-dom';
import { PureClickArea } from './PureClickArea';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('PureClickArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PureClickArea/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without .touched given no props', () => {
    const { container } = render(<PureClickArea/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders without .touched given isTouched = false', () => {
    const { container } = render(<PureClickArea isTouched={false}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders with .touched given isTouched', () => {
    const { container } = render(<PureClickArea isTouched={true}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(true);
  });

  it('renders with children given in props', () => {
    const randStr = Math.random().toString();
    const children = <div>{randStr}</div>;
    const { getByText } = render(<PureClickArea isTouched={true}>{children}</PureClickArea>);
    expect(getByText(randStr)).toBeInTheDocument();
  });
});
