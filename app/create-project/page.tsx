import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/lib/session';
import Modal from '@/components/Modal';
import ProjectForm from '@/components/ProjectForm';

const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect('/');

  return (
    <div className="flex justify-start items-center flex-col  lg:mx-40 mx-8 mt-14 mb-72">
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProjectForm type="create" session={session} />
    </div>
  );
};

export default CreateProject;
