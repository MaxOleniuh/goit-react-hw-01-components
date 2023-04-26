import PropTypes from "prop-types";
import s from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  const userStats = [
    {
      label: 'Followers',
      quantity: followers,
    },
    {
      label: 'Likes',
      quantity: likes,
    },
    {
      label: 'Views',
      quantity: views
    }
  ];

    return (
        <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

        <ul className={s.stats}>{userStats.map(({ label, quantity }) => <li className={s.itemStats} key={label}>
      <span className={s.lavel}>{label}</span>
      <span className={s.quantity}>{quantity}</span>
    </li>) }
  </ul>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({followers: PropTypes.number.isRequired, likes: PropTypes.number.isRequired, views: PropTypes.number.isRequired}),
};
export default Profile;
