import { z } from "zod";
import { TaskStatus } from "@/features/tasks/types";

export const createTaskSchema = z.object({
  name: z.string().min(1, "Required"),
  status: z.nativeEnum(TaskStatus, { required_error: "Required" }),
  workspaceId: z.string().trim().min(1, "Required"),
  projectId: z.string().trim().min(1, "Required"),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, "Required"),
  description: z.string().optional(),
});

export const getTasksSchema = z.object({
  workspaceId: z.string(),
  projectId: z.string().nullish(),
  assigneeId: z.string().nullish(),
  status: z.nativeEnum(TaskStatus).nullish(),
  search: z.string().nullish(),
  dueDate: z.string().nullish(),
});

export const bulkUpdateSchema = z.object({
  tasks: z.array(
    z.object({
      $id: z.string(),
      status: z.nativeEnum(TaskStatus),
      position: z.number().int().positive().min(1000).max(1_000_000),
    })
  ),
});
