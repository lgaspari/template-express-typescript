import express from 'express';
import routes from './config/routes';
import hello from './handlers/hello';

const app = express();
const port = 3000;

// routing
app.get(routes.root, hello);

// listening
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
