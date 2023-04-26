import PropTypes from 'prop-types';
import s from './FriendsList.module.css'
import clsx from "clsx";

const FriendList = ({friends}) => {
  
  return (
    <ul className={s.friendList}>
      {friends.map((friend => (
          <li key={friend.id} className={s.item}>
          <span className={clsx(s.status, friend.isOnline && s.statusActive)}>{friend.isOnline}</span>
          <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
              <p className={s.name}>{friend.name}</p>
          </li>
      )))}
    </ul>
  );
};
FriendList.propTypes = {
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.number,
}
export default FriendList;
