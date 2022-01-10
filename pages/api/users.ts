// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type IAPIResponseData = {
  menu: {
    title: string;
    link: string;
  }[];
  user: {
    name: string;
    avatar: string;
    handle: string;
    posts: string;
    followers: string;
  };
  fallback?: {
    [key: string]: any;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAPIResponseData>
) {
  res.status(200).json({
    menu: [
      {
        title: "Home",
        link: "/home",
      },
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
    user: {
      name: "Sehal Sein",
      handle: "@hello",
      posts: "2",
      followers: "100",
      avatar:
        "data:image/png;base64,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",
    },
  });
}
