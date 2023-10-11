'use client';

import { useUploadModal } from '@/hooks/useUploadModal';
import Modal from './Modal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import toast from 'react-hot-toast';
import { useUser } from '@/hooks/useUser';
import uniqid from 'uniqid';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: { author: '', title: '', song: null, image: null },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);

      const uniqueId = uniqid();
      const imageFile = data.image?.[0];
      const songFile = data.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error('Something went wrong!');
        return;
      }

      //UPLOAD SONG
      const { data: songData, error: songError } = await supabaseClient.storage
        .from('songs')
        .upload(`song-${data.title}-${uniqueId}`, songFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error('Failed song upload.');
      }

      //UPLOAD IMAGE
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from('images')
          .upload(`image-${data.title}-${uniqueId}`, imageFile, {
            cacheControl: '3600',
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error('Failed image upload.');
      }

      // IMAGE AND SONG HAS BEEN UPLOADED SUCCESSFULLY
      const { error: SBError } = await supabaseClient.from('songs').insert({
        user_id: user.id,
        title: data.title,
        author: data.author,
        image_path: imageData.path,
        song_path: songData.path,
      });

      if (SBError) {
        setIsLoading(false);
        return toast.error(SBError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success('Song created!');
      reset();
      onClose();
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload a MP3 file"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          placeholder="Song title"
          {...register('title', { required: true })}
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register('author', { required: true })}
          placeholder="Song author"
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            id="song"
            {...register('song', { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an image</div>
          <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept="image/*"
            id="image"
            {...register('image', { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
