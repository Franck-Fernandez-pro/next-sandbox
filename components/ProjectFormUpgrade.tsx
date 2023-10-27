'use client';

import { FormState, ProjectInterface, SessionInterface } from '@/common.types';
import createNewProjectAction from '@/actions/createProject';
import {
  // @ts-ignore
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';
import Image from 'next/image';
import { categoryFilters } from '@/constant';
import CustomMenu from './CustomMenu';
import FormField from './FormField';
import Button from './Button';
import { useForm } from 'react-hook-form';

type Props = {
  type: string;
  session: SessionInterface;
  project?: ProjectInterface;
};

const ProjectForm = ({ type, session, project }: Props) => {
  // const { register, handleSubmit, watch } = useForm<FormState>({
  //   defaultValues: {
  //     title: project?.title || '',
  //     description: project?.description || '',
  //     image: project?.image || '',
  //     liveSiteUrl: project?.liveSiteUrl || '',
  //     githubUrl: project?.githubUrl || '',
  //     category: project?.category || '',
  //   },
  // });
  // const form = watch();

  // const onSubmit = handleSubmit(async (data) => {
  //   const response = await createNewProjectAction(data);
  // });

  // const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const file = e.target.files?.[0];

  //   if (!file) return;
  //   if (!file.type.includes('image')) {
  //     alert('Please upload an image!');
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const result = reader.result as string;
  //     handleStateChange('image', result);
  //   };
  // };

  return (
    <>
      {/* <form className="flexStart form">
        <div
          onClick={() => {
            console.log('form -> ', form);
          }}
        >
          console
        </div>
        <div className="flexStart form_image-container">
          <label htmlFor="poster" className="flexCenter form_image-label">
            {!form?.image && 'Choose a poster for your project'}
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            required={type === 'create' ? true : false}
            className="form_image-input"
            onChange={(e) => handleChangeImage(e)}
          />
          {form.image && (
            <Image
              src={form?.image}
              className="sm:p-10 object-contain z-20"
              alt="image"
              fill
            />
          )}
        </div>

        <FormField title="Title" state={form.title} placeholder="Flexibble" />
        <p>{form.title}</p>

        <FormField
          title="Description"
          state={form.description}
          placeholder="Showcase and discover remarkable developer projects."
          isTextArea
        />

        <FormField
          type="url"
          title="Website URL"
          state={form.liveSiteUrl}
          placeholder="https:jsmastery.pro"
        />

        <FormField
          type="url"
          title="GitHub URL"
          state={form.githubUrl}
          placeholder="https:github.com/adrianhajdin"
        />

        <CustomMenu
          title="Category"
          state={form.category}
          filters={categoryFilters}
        />

        <div className="flexStart w-full">
          <SubmitButton type={type} />
        </div>
      </form> */}
    </>
  );
};

export default ProjectForm;

function SubmitButton({ type }: { type: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      title={
        pending
          ? `${type === 'create' ? 'Creating' : 'Editing'}`
          : `${type === 'create' ? 'Create' : 'Edit'}`
      }
      type="submit"
      leftIcon={false ? '' : '/plus.svg'}
      submitting={false}
    />
  );
}
