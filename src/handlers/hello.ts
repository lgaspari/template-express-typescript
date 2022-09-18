import type { Request, Response } from 'express';

const hello = (_: Request, res: Response) => {
  res.send('Hello World!');
};

export default hello;
