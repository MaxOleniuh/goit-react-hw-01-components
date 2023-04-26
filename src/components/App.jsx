import Profile from './SocialMedia/Profile';
import user from '../constants/user.json';
import Statistics from './Statistics/Statistics';
import data from '../constants/data.json';
import FriendList from './Friends/FriendsList';
import friends from '../constants/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../constants/transactions.json';
import '../components/main.css'

export const App = () => {
  return (
    <>
      <Profile
        {...user}
      />
      <Statistics data={data} title='Upload Stats' />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </> 
  );
};
