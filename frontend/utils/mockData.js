export const generateMockData = (count) => {
    const scamTypes = ['SMS', 'Call', 'Video Call'];
    const countries = ['India', 'International', 'Unknown'];
    const detectionMethods = ['Pattern Detection', 'ML Analysis', 'User Report', 'Uniform Detection'];
  
    const generateActivity = (date) => ({
      date,
      type: scamTypes[Math.floor(Math.random() * scamTypes.length)],
      details: [
        'Attempted bank fraud',
        'Police impersonation',
        'Fake job offer',
        'Investment scam',
        'Lottery scam'
      ][Math.floor(Math.random() * 5)],
      amount: Math.floor(Math.random() * 50000),
      victim: `+91${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      location: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'][Math.floor(Math.random() * 4)]
    });
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      number: `+${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      type: scamTypes[Math.floor(Math.random() * scamTypes.length)],
      method: detectionMethods[Math.floor(Math.random() * detectionMethods.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      count: Math.floor(Math.random() * 50),
      firstReported: new Date(2024 - Math.floor(Math.random() * 2), 
                             Math.floor(Math.random() * 12), 
                             Math.floor(Math.random() * 28)).toISOString().split('T')[0],
      lastReported: new Date(2024, 11, Math.floor(Math.random() * 31)).toISOString().split('T')[0],
      status: Math.random() > 0.3 ? 'Active' : 'Blocked',
      totalAmount: Math.floor(Math.random() * 1000000),
      activities: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => 
        generateActivity(new Date(2024, Math.floor(Math.random() * 12), 
                       Math.floor(Math.random() * 28)).toISOString().split('T')[0])
      )
    }));
  };