import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: '/api/gql', token: '8f4a5ba3c0e12f0bd887e4a715b4a68fa36b52e5', queries,  });
export default client;
  