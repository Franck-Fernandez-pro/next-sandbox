'use server';

import { FormState, ProjectForm } from '@/common.types';
import { createProjectMutation } from '@/graphql';
import { makeGraphQLRequest, uploadImage } from '@/lib/actions';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function createNewProjectAction(data: FormState) {
  const session = await getCurrentUser();

  try {
    const imageUrl = await uploadImage(data.image);

    if (imageUrl.url) {
      const variables = {
        input: {
          ...data,
          image: imageUrl.url,
          createdBy: {
            link: session?.user?.id,
          },
        },
      };

      return makeGraphQLRequest(createProjectMutation, variables);
    }

    redirect('/');
  } catch (error) {
    console.error(error);
    // alert(
    //   `Failed to ${type === 'create' ? 'create' : 'edit'} a project. Try again!`
    // );
  }
}
