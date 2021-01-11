// js
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/Transactions';
// json
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transactions/transactions.json';
//css

export default function App() {
    return (
        <div>
            <section className="profile">
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
                <FriendList friends={friends} />
            </section>
            <section>
                <Statistics title="Upload stats" stats={statisticalData} />
                <TransactionHistory items={transactions} />
            </section>
        </div>
    );
}