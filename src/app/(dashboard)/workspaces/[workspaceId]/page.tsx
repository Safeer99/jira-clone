import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

type Props = {
  workspaceId: string;
};

const WorkspaceIdPage = async ({}: Props) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>WorkspaceIdPage</div>;
};

export default WorkspaceIdPage;
