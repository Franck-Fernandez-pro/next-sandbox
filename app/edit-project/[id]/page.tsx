import { redirect } from 'next/navigation';
import ProjectForm from '@/components/ProjectForm';
import { getCurrentUser } from '@/lib/session';
import { getProjectDetails } from '@/lib/actions';
import { ProjectInterface } from '@/common.types';

export default async function EditProject({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await getCurrentUser();
  if (!session?.user) redirect('/');

  const { project } = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  return project ? (
    <div className="flex justify-start items-center flex-col  lg:mx-40 mx-8 mt-14 mb-72">
      <h3 className="modal-head-text">Edit Project</h3>

      <ProjectForm type="edit" session={session} project={project} />
    </div>
  ) : (
    <p className="no-result-text">Failed to fetch project info</p>
  );
}
