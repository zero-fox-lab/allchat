import process from "node:process";
import Fastify, { RouteShorthandMethod, type FastifyInstance } from "fastify";
import routes from "./routes/all";
import { Method } from "./route";

const fastify = Fastify({
    logger: true
});

(async function main() {
    try {
        attach_routes(fastify);
        await fastify.listen({ port: 8080 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();

function attach_routes(fastify: FastifyInstance) {
    const route_map = new Map<Method, RouteShorthandMethod>();

    route_map.set(Method.GET, fastify.get);
    route_map.set(Method.PUT, fastify.put);
    route_map.set(Method.POST, fastify.post);
    route_map.set(Method.DELETE, fastify.delete);

    for (const r of Object.values(routes)) {
        const f = route_map.get(r.method);

        if (!f) {
            throw new Error("unknown method type");
        }

        f.bind(fastify)(r.path, r.handler);
    }
}