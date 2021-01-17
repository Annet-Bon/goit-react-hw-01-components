import styles from './friendlist.module.css';
import PropTypes from 'prop-types';


export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
        {friends.map(({ id, isOnline, avatar, name}) => (
            <li className={styles.item} key={id}>
                <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
                <img className={styles.avatar} src={avatar} alt="" width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};