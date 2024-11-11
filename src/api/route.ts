import { FastifyReply, FastifyRequest } from "fastify";

enum Method {
    GET = 0,
    POST,
    PUT,
    DELETE
}

type RouteHandler<T> = (req: FastifyRequest, reply: FastifyReply) => Promise<T>;

class Route<T> {
    public readonly method: Method;
    public readonly path: string;
    public readonly handler: RouteHandler<T>;

    public static GET<T>(path: string, handler: RouteHandler<T>) {
        return new Route<T>(Method.GET, path, handler);
    }
    public static POST<T>(path: string, handler: RouteHandler<T>) {
        return new Route<T>(Method.POST, path, handler);
    }
    public static PUT<T>(path: string, handler: RouteHandler<T>) {
        return new Route<T>(Method.PUT, path, handler);
    }
    public static DELETE<T>(path: string, handler: RouteHandler<T>) {
        return new Route<T>(Method.DELETE, path, handler);
    }

    constructor (method: Method, path: string, handler: RouteHandler<T>) {
        this.method = method;
        this.path = path;
        this.handler = handler;
    }
}

export default Route;
export { Method };