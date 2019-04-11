import React from 'react';
import ReactDOM from 'react-dom';
import TouchArea from './TouchArea';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('TouchArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TouchArea/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without .touched given no props', () => {
    const { container } = render(<TouchArea/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders without .touched given isTouched = false', () => {
    const { container } = render(<TouchArea isTouched={false}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(false);
  });

  it('renders with .touched given isTouched', () => {
    const { container } = render(<TouchArea isTouched={true}/>);
    expect(container.firstChild.classList.contains('touched')).toBe(true);
  });

  it('renders with children given in props', () => {
    const randStr = Math.random().toString();
    const children = <div>{randStr}</div>;
    const { getByText } = render(<TouchArea isTouched={true}>{children}</TouchArea>);
    expect(getByText(randStr)).toBeInTheDocument();
  });
});
