import Profile from './SocialMedia/Profile';
import user from '../constants/user.json';

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
    </>
  );
};
console.log(<Profile/>)