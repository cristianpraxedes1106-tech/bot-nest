import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'BotNest', timestamp: new Date().toISOString() });
});

app.get('/api/bots', (_req, res) => {
  res.json({ bots: [] });
});

app.listen(port, () => {
  console.log(`🪺 BotNest API running on port ${port}`);
});
