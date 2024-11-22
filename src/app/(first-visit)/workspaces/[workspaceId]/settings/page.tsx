import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { WorkspaceSettingsClient } from "./client";

const SettingsPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceSettingsClient />;
};

export default SettingsPage;
