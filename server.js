const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Angel One callback endpoint
app.post('/api/callback', (req, res) => {
    console.log('Received callback:', req.body);
    // Handle the callback data here
    res.json({ status: 'success' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 