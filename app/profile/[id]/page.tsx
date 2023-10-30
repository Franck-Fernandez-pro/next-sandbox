import { client } from '@/lib/actions';
import ProfilePage from '@/components/ProfilePage';
import { UserProfile } from '@/common.types';
import { getProjectsOfUserQuery } from '@/graphql';

type Props = {
  params: {
    id: string;
  };
};

export default async function UserProfile({ params: { id } }: Props) {
  const user = (await client.request(getProjectsOfUserQuery, {
    id,
    last: 100,
  })) as UserProfile;

  return user ? (
    <ProfilePage user={user} />
  ) : (
    <p className="no-result-text">Failed to fetch user info</p>
  );
}
