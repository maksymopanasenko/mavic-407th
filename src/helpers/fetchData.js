const fetchAccountBalance = async () => {
    const response = await fetch('https://api.monobank.ua/personal/client-info', {
        method: 'GET',
        headers: {
          'X-Token': import.meta.env.VITE_API_KEY,
        },
      });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    const balance = Math.floor(data.jars[0].balance / 100);
    return balance;
};

export default fetchAccountBalance;