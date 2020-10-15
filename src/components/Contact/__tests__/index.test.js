import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

// describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested
describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

    // matches data-testid test for <h1> in the contact form
    it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    });

     // matches data-testid test for <button> in the contact form
     it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    });
})