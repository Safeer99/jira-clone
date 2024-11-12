import { Models } from "node-appwrite";

export enum MemberRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}

export type Members = Models.Document & {
  workspaceId: string;
  userId: string;
  role: MemberRole;
};
