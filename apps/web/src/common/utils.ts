import Redis from 'ioredis'
import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
})

export const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
