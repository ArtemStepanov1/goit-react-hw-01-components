import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box';


import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';




export const App = () => {
  return (
    <Box as="main">    
        <Profile user={user}/>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends}/>
        <TransactionHistory transactions={transactions}/>
    </Box>
  );
};

