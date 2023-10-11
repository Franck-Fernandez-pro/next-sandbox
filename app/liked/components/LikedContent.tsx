'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Song } from '@/types';
import { useUser } from '@/hooks/useUser';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';

const LikedContent: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return songs.length === 0 ? (
    <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
      No liked songs.
    </div>
  ) : (
    <div className="flex w-full flex-col gap-y-2 p-6">
      {songs.map((song: any) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
