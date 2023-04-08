import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qpw9ab2w",
  dataset: "production",
  apiVersion: "2023-04-06",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
