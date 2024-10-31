import { Hono } from "hono";
import { handle } from "hono/vercel";

import authRoutes from "@/features/auth/server/route";
import membersRoutes from "@/features/members/server/route";
import workspacesRoutes from "@/features/workspaces/server/route";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/auth", authRoutes)
  .route("/members", membersRoutes)
  .route("/workspaces", workspacesRoutes);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
