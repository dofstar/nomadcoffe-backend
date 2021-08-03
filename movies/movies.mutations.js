import client from "..package-lock.json/client";

const resolvers = {

    Mutation: {
        createMovie: (_, {title, year, genre}) => 
            client.movie.create({
                data: {
                    title,
                    year,
                    genre,
                },
            }),
        deleteMovie: (_, {id}) => client.movie.delete({where: {}}),
    },
};