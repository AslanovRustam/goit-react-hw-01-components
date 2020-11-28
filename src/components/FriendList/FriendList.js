import PropTypes from 'prop-types';
// import friends from './components/FriendList/friends.json';
// import s from './FriendList.module.css';
import FriendlistItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend =>
                <li key={friend.id}>
                  <FriendlistItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                  />
                </li>)}
  

</ul>
  );
    
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;