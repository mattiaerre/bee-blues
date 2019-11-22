import { render } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';
import selectFitbs from './api/selectFitbs';
import selectTags from './api/selectTags';
import model from './model';
import tag from './tag';

jest.mock('./api/selectFitbs');
jest.mock('./api/selectTags');

describe('App', () => {
  beforeEach(() => {
    selectFitbs.mockImplementation(callback => callback(null, [model]));
    selectTags.mockImplementation(callback => callback(null, [tag]));
  });

  it('loading', () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('w/ models', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('w/ error', () => {
    selectFitbs.mockImplementation(callback => callback(new Error('Oh Noes!')));
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
