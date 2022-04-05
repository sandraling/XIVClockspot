const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.hostname ?? "localhost";
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const mongoURI = process.env.MONGODB_URI ?? "";

export { hostname, dev, port, mongoURI };