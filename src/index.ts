import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/video', (req, res) => {
    const filePath = path.resolve(__dirname, '../media/video.mp4');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});
