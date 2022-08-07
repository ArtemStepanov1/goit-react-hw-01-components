import { Box } from '../Box';
import { PropTypes } from 'prop-types';

import {
    ListOfFriend,
    ListItem,
    IsOnlineMark,
    FriendImg,
    FriendName,

} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <Box
        mb="16px"
        as="section">
            <ListOfFriend>
                {friends.map(({id, isOnline, avatar, name}) => (
                    <ListItem key={id}>
                        <IsOnlineMark isOnline={isOnline}></IsOnlineMark>
                        <FriendImg src={avatar} alt="User avatar" width={51}/>
                        <FriendName>{name}</FriendName>
                    </ListItem>
                ))}
            </ListOfFriend>
        </Box>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };