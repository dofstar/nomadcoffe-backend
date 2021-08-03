import {
  loadFilesSync,
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const laodedResolvers = loadFilesSync(
  `${__dirname}/**/*.{queries, mutations}.js`
);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(laodedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
