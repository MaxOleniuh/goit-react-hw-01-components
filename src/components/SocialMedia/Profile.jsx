import PropTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const userStats = [
    {
      label: 'Followers',
      quantity: stats.followers,
    },
    {
      label: 'Likes',
      quantity: stats.likes,
    },
    {
      label: 'Views',
      quantity: stats.views
    }
  ];

    return (
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">{userStats.map(({label, quantity}) => <li key={label}>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>) }
  </ul>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({followers: PropTypes.number, likes: PropTypes.number, views: PropTypes.number}),
};
export default Profile;
