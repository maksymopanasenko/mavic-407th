const fetchAccountBalance = async () => {


    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    const balance = Math.floor(data.jars[0].balance / 100);
    return balance;
};

export default fetchAccountBalance;