import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import GenetatedError from '../utils/generatedError';
import STATUS from '../fixtures/http-status-code';

dotenv.config();

export default function validateToken(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new GenetatedError(STATUS.UNAUTHORIZED, 'Required header not found.');

    const PASS = `${process.env.JWT_KEY}`;
    if (!jwt.verify(authorization, PASS)) throw new GenetatedError(STATUS.UNAUTHORIZED, 'Failed to decode or validate authorization token.');

    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
}
