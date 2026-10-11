import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`
    <h1>CI/CD Lab</h1>
    <p>The application is running.</p>
    <p>just to see changes after a git add.</p>
    <p>changes on the second commit</p>

    <p>Version ${version}</p>
  `);
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

export default app;
