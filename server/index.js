// Require the framework and instantiate it
import Fastify from "fastify";
import { fileURLToPath } from 'url';
const fastify = Fastify({ logger: true });
import swagger from "fastify-swagger";
import jwt from "fastify-jwt";
import auth from "./middleware/auth.js";
import multer from "fastify-multer";
import path, { dirname } from 'path'

fastify.register(jwt, {
    secret: process.env.JWT_SECRET_KEY,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log('path', path.join(__dirname, '..', '/client/build/index.html'))
fastify.register(import('fastify-static'), {
  root: path.join(__dirname, '..', '/client/build/')
})

fastify.get('/:xx', async (request, reply) => {
  try {
    return reply.sendFile('index.html')
  } catch (e) {
    console.log(e)
  }
});

fastify.register(swagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "GreenyTale",
      description: "Testing GreenyTale API",
      version: "1.0.0",
    },
    host: "localhost",
  },
});

fastify.register(import("fastify-cors"));
fastify.register(auth);
fastify.register(multer.contentParser);
fastify.register(import("./routes/users.js"));
fastify.register(import("./routes/products.js"));
fastify.register(import("./routes/cart.js"));
fastify.register(import("./routes/orders.js"));
fastify.register(import("./routes/faker-apis.js"))

// Run the server!
fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});
