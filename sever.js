const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/create-gif', (req, res) => {
    const youtubeUrl = req.body.youtubeUrl;

    // Placeholder for GIF creation logic
    // In a real application, you'd use a library or API to handle the video processing and GIF creation

    // For now, just return a success response
    res.json({ success: true, gifUrl: 'http://example.com/your-created-gif.gif' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
