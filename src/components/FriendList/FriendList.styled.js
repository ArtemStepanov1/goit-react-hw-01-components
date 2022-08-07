import styled from 'styled-components';

export const ListOfFriend = styled.ul`
    margin: 0 auto;

    padding-inline-start: 0;
    margin-block: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 20vw;
    margin: 0 auto;
    padding: 2% 5%;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.boxShadow.normal};
    &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const IsOnlineMark = styled.span`
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    margin-right: 3%;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'tomato')};
`;

export const FriendImg = styled.img`
    margin-right: 6%;
`;

export const FriendName = styled.p`
    font-weight: ${p => p.theme.fontWeights.normal};
    margin-right: 7%;
    font-size: ${p => p.theme.fontSizes.m};
`;