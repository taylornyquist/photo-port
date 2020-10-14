import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();

    });
})

// test if camera emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {

        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert  
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// test to see that links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {

        // Arrange
        const { getByTestId } = render(<Nav />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})