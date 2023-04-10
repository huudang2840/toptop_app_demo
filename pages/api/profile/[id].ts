import { IUser } from "./../../../types.d";
import { use } from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from "@/utils/queries";
import { json } from "stream/consumers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (id) {
      const query = singleUserQuery(id);
      const userVideoQuery = userCreatedPostsQuery(id);
      const userLikedVideoQuery = userLikedPostsQuery(id);

      const user = await client.fetch(query);
      const userVideos = await client.fetch(userVideoQuery);
      const userLikeVideos = await client.fetch(userLikedVideoQuery);

      res.status(200).json({ user: user[0], userVideos, userLikeVideos });
    }
  }
}
