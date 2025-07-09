const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'frames' directory
app.use('/frames', express.static('frames'));

app.get('/', (req, res) => {
  res.send('Pixel AI Frame Server Running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
