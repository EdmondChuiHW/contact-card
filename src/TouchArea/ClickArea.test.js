import React from 'react';
import ReactDOM from 'react-dom';
import ClickArea from './ClickArea';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('ClickArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClickArea/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without .touched given no props', () => {
    const { container } = render(<ClickArea/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders without .touched given isTouched = false', () => {
    const { container } = render(<ClickArea isTouched={false}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders with .touched given isTouched', () => {
    const { container } = render(<ClickArea isTouched={true}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(true);
  });

  it('renders with children given in props', () => {
    const randStr = Math.random().toString();
    const children = <div>{randStr}</div>;
    const { getByText } = render(<ClickArea isTouched={true}>{children}</ClickArea>);
    expect(getByText(randStr)).toBeInTheDocument();
  });
});
