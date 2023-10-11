// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import { createContext } from '../../graphql/context';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});
const startServer = apolloServer.start();
const cors = Cors();

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
