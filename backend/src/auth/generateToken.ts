import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { UserToken } from '../interfaces/userToken.interface';

dotenv.config();

const PASS = `${process.env.JWT_KEY}`;

const generateToken = (data: UserToken) => jwt.sign(data, PASS, { expiresIn: '24h', algorithm: 'HS256' });

export default generateToken;
