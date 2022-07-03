import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as ipLocation from 'ip-to-location';
import { IGeo } from 'src/interfaces';
@Injectable()
export class LocationMiddleware implements NestMiddleware {
  async use(req, res: Response, next: NextFunction) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    ip.toString()

    console.log(ip)
    const location: IGeo = await ipLocation.fetch(ip).catch((err) => {
      throw err;
    });
    req.location = location
    console.log(req.location)

    next();
  }
}

export const locationLogger = async (req, res: Response, next: NextFunction) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  ip.toString()

  console.log(ip)
  const location: IGeo = await ipLocation.fetch(ip).catch((err) => {
    throw err;
  });
  req.location = location
  console.log(req.location)

  next();
}
