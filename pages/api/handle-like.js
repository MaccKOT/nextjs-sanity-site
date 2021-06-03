// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from '../../lib/sanity';

sanityClient.config({
  token: process.env.SANITY_API_TOKEN, //secret token here
});

export default async function likeButtonhandler(req, res) {
  const { _id } = JSON.parse(req.body);
  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((err) => console.log(err));

  res.status(200).json({ likes: data.likes });
}
