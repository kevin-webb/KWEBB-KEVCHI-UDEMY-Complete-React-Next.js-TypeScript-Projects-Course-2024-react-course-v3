/**
We'll use the SpaceX API to fetch rocket data:
```
const url = 'https://api.spacexdata.com/v4/rockets';

fetch(url)
  .then((response) => {
    // Task 1: Handle these specific status codes:
    // 404: "Resource not found"
    // 403: "Access forbidden"
    // Any other error: "HTTP error! status: [status code]"
    // Hint: Use response.status for checking specific codes
    
    return response.json();
  })
  .then((rockets) => {
    // Task 2: Transform the data to include:
    // - name
    // - first_flight date
    // - success_rate_pct (if null, set to "No data")
    // - active (boolean)
    // Store this in a variable before logging!
    
    // Task 3: Add these calculations:
    // - total number of rockets
    // - number of active rockets
    // - average success rate (excluding rockets with no data)
    
    // Log both the transformed data AND the calculations
    
  })
  .catch((err) => {
    // Task 4: Improve error handling
    // - Log what operation failed ("Data fetching" or "Data processing")
    // - Include the error message
  });
```

Expected output format:
```
{
  rockets: [
    {
      name: "Falcon 9",
      firstFlight: "2010-06-04",
      successRate: 98,
      isActive: true
    },
    // ... more rockets
  ],
  stats: {
    totalRockets: 4,
    activeRockets: 3,
    averageSuccessRate: 95.5
  }
}
```
Tips:

For Task 1, use if/else if statements to check response.status
For the success rate average, you'll need to:

Filter out null values
Calculate the average
Round to 1 decimal place


Remember to store your transformed data in variables before logging
 */

const url = 'https://api.spacexdata.com/v4/rockets';

fetch(url)
  .then((response) => {
    // Task 1: Handle these specific status codes:
    // 404: "Resource not found"
    // 403: "Access forbidden"
    // Any other error: "HTTP error! status: [status code]"
    // Hint: Use response.status for checking specific codes
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found');
      } else if (response.status === 403) {
        throw new Error('Access forbidden');
      } else {
        throw new Error(
          `There was an ${response.status} when attempting to access the data`
        );
      }
    }

    return response.json();
  })
  .then((rockets) => {
    // Task 2: Transform the data to include:
    // - name
    // - first_flight date
    // - success_rate_pct (if null, set to "No data")
    // - active (boolean)
    // Store this in a variable before logging!

    // Task 3: Add these calculations:
    // - total number of rockets
    // - number of active rockets
    // - average success rate (excluding rockets with no data)
    // Log both the transformed data AND the calculations

    // Transform the data with map()
    const transformedData = rockets.map((rocket) => ({
      name: rocket.name,
      first_flight: rocket.first_flight,
      success_rate_pct: rocket.success_rate_pct || 'No data Found',
      active: rocket.active,
    }));

    // Calculate the stats
    const stats = {
      totalRockets: transformedData.length,
      activeRockets: transformedData.filter((rocket) => rocket.active).length,
      averageSuccessRate:
        transformedData
          .filter((rocket) => rocket.success_rate_pct !== 'No data Found')
          .reduce((acc, rocket) => acc + rocket.success_rate_pct, 0) /
        transformedData.filter(
          (rocket) => rocket.success_rate_pct !== 'No data Found'
        ).length,
    };

    // Log both in a single object
    console.log({
      rockets: transformedData,
      stats: stats,
    });
  })
  .catch((err) => {
    // Task 4: Improve error handling
    // - Log what operation failed ("Data fetching" or "Data processing")
    // - Include the error message

    if (
      err.message.includes('Resource not found') ||
      err.message.includes('Access forbidden') ||
      err.message.includes('There was an')
    ) {
      console.error('Data fetching error:', err.message);
    } else {
      console.error('Data processing error:', err.message);
    }
  });
