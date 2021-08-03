import client from "../client";

export default {
    Query: {
        movies: () => client.movies.findMany(),
        movie: (_, { id }) => client.movie.findUnique({ where: { id }}),
    }, 
}