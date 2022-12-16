// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let file: string;
  const { framework, name, extension } = req.query;

  file = fs.readFileSync(
    `public/${framework || 'react'}/${name || 'Button'}.${extension || 'tsx'}`,
    {
      encoding: 'utf8'
    }
  );

  res.status(200).json({ file });
}
