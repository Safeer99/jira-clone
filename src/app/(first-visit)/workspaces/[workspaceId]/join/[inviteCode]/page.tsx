import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

interface JoinWorkspacePageProps {
  params: {
    workspaceId: string;
    inviteCode: string;
  };
}

const JoinWorkspacePage = async ({ params }: JoinWorkspacePageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect("/");
  }

  return (
    <div>
      <JoinWorkspaceForm
        initialValues={initialValues}
        workspaceId={params.workspaceId}
        code={params.inviteCode}
      />
    </div>
  );
};

export default JoinWorkspacePage;
