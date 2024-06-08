import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import {CountdownTimer} from './index'

/**
 * Returns timestamp that is 1 day before now
 * Helpful for testing and development
 * @returns timestamp
 */
export const getTimestampYesterday = (): string => {
    // Create a new Date object for the current date and time
    const currentDate = new Date();

    // Substract one day to the current date
    const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    // Get the components of the date
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const day = String(yesterday.getDate()).padStart(2, '0');
    const hours = String(yesterday.getHours()).padStart(2, '0');
    const minutes = String(yesterday.getMinutes()).padStart(2, '0');
    const seconds = String(yesterday.getSeconds()).padStart(2, '0');

    // Construct the timestamp string
    const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    return timestamp;
}

test('CountdownTimer shows end message if expired', () => {

    // Arrange
    const endTimestamp=getTimestampYesterday();
    const defaultEndMessage='Countdown has ended';
    render(<CountdownTimer 
        endTimestamp={endTimestamp} 
        message={defaultEndMessage}
    />);

    // Act
    // Nothing to act
    
    // Assert
    expect(screen.getByRole('heading', { level: 2, name: defaultEndMessage })).toBeDefined()
})