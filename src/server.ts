import { app } from './app';

const port = 4444;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});