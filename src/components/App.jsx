import Profile from './SocialMedia/Profile';
import user from '../constants/user.json';
import Statistics from './Statistics/Statistics';
import data from '../constants/data.json';

export const App = () => {
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
