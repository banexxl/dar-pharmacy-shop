import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

     const session = await getServerSession(req, res, authOptions)

     if (session) {
          return res.send({ status: 200, message: "Korisnik prijavljen." })
     }

     res.send({
          status: 403, message: "Pristup odbijen. Molimo prijavite se."
     })
}
