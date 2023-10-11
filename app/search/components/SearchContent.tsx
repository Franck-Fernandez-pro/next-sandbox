'use client';

import { Song } from '@/types';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  return songs.length === 0 ? (
    <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
      No songs found.
    </div>
  ) : (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song: Song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
