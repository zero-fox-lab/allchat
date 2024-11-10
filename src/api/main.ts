import process from "node:process";
import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

(async function main() {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();