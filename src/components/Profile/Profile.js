import PropTypes from 'prop-types';
import { Box } from '../Box';

import { 
    Description,
    Avatar,
    Username,
    Info,
    Stats,
    StatsItem,
    Label,
    Quantity,
 } from './Profile.styled';


export const Profile = ({user: {username, tag, location, avatar, stats:{followers, views, likes}}}) => {
    return (
    <Box 
    width="30vw" 
    mx="auto" 
    bg="white" 
    borderRadius="4px"
    boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px,
        rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
    mb="16px"
    as="section">        
        <Description>
            <Avatar
            src={avatar}
            alt="User avatar"
            />
            <Username>{username}</Username>
            <Info>{tag}</Info>
            <Info>{location}</Info>
        </Description>

        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </Stats>
    </Box>
    );
}

Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
  };
