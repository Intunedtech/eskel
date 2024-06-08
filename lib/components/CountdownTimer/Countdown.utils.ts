/**
 * Returns timestamp that is 1 day ahead of now
 * Helpful for testing and development
 * @returns timestamp
 */
export const getTimestampOneDayAhead = (): string => {
    // Create a new Date object for the current date and time
    const currentDate = new Date();
  
    // Add one day to the current date
    const oneDayAhead = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    // const oneDayAhead = new Date(currentDate.getTime() + 1 * 1 * 10 * 1000);
  
    // Get the components of the date
    const year = oneDayAhead.getFullYear();
    const month = String(oneDayAhead.getMonth() + 1).padStart(2, '0');
    const day = String(oneDayAhead.getDate()).padStart(2, '0');
    const hours = String(oneDayAhead.getHours()).padStart(2, '0');
    const minutes = String(oneDayAhead.getMinutes()).padStart(2, '0');
    const seconds = String(oneDayAhead.getSeconds()).padStart(2, '0');
  
    // Construct the timestamp string
    const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  
    return timestamp;
  }
