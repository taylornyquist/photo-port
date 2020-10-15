import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal is rendering', () => {

    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} />);
    });

    it('renders', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {

        // Arrange: Render Modal with mock function
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));

        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);

    });
})  