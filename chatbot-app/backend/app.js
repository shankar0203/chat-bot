const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post('/message', async (req, res) => {
  const { message } = req.body;
  
  try {
    const response = await axios.post('https://aimlapi.com/api/your-endpoint', {
      prompt: message,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.AIML_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    res.json({ response: response.data.answer });
  } catch (error) {
    console.error('Error from AIML API:', error);
    res.status(500).send('Error processing your request');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
