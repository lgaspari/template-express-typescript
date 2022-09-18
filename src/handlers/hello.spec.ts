import type { Request, Response } from 'express';
import handler from './hello';

const req: Request = {} as Request;
const res: Response = {
  send: jest.fn(),
} as unknown as Response;

test('can send hello world', () => {
  handler(req, res);
  expect(res.send).toHaveBeenCalledWith('Hello World!');
});
