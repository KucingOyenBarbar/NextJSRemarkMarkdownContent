// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=DaveGrayTeachesCode

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.MY_SCREET_TOKE) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const path: string = req.query.path as string;
  await res.revalidate(path);
  return res.json({revalidate: true})
}