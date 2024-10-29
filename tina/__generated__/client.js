import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "e54c11e685829269f38981ed4575d4a4ac0ef905", queries });
export default client;
