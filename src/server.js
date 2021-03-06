// SRC/server.js

require("dotenv").config();
import { GraphQLServer } from 'graphql-yoga';

const PORT = process.env.PORT || 4000;

const typeDefs = `
	type Query{
		hello: String!
	}
`;

const resolvers = {
	Query:{
		hello: () => "hai ..."
	}
};

const server = new GraphQLServer({typeDefs, resolvers});

server.start({ port: PORT }, () => 
	console.log(`Server is running on http://localhost:${PORT}`)
);