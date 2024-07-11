const express = require('express');
const app = express();
const port = 3000;

const WINDOW_SIZE = 10;
let numbersStore = [];

const fetchNumbers = (numberId) => {
  const mockData = {
    p: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],  
    f: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],   
    e: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 
    r: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[numberId] || []);
    }, Math.floor(Math.random() * 300));
  });
};

const updateNumbersStore = (newNumbers) => {
  const uniqueNumbers = new Set([...numbersStore, ...newNumbers]);

  if (uniqueNumbers.size > WINDOW_SIZE) {
    numbersStore = Array.from(uniqueNumbers).slice(-WINDOW_SIZE);
  } else {
    numbersStore = Array.from(uniqueNumbers);
  }
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  if (!['p', 'f', 'e', 'r'].includes(numberId)) {
    return res.status(400).send('Invalid number ID');
  }

  const start = Date.now();
  const newNumbers = await fetchNumbers(numberId);
  updateNumbersStore(newNumbers);
  const average = calculateAverage(numbersStore);

  const elapsed = Date.now() - start;
  if (elapsed > 500) {
    return res.status(500).send('Request took too long');
  }

  res.json({
    numbers: numbersStore,
    average: average,
  });
});

app.listen(port, () => {
    console.log('Average Calculator microservice running at:');
    console.log('http://localhost:3000/numbers/p');
    console.log('http://localhost:3000/numbers/f');
    console.log('http://localhost:3000/numbers/e');
    console.log('http://localhost:3000/numbers/r');
    
});
