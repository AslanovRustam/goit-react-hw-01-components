import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/Transaction/Transaction';
import transactionList from './components/Transaction/transactions.json';

export default function App() {
  return <div>
    <Profile
    src={user.avatar}
    alt={user.name}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
    
    <Statistics
      title="Upload stats"
      stats={statData}
    />

    <FriendList friends={friends} />

    <TransactionHistory items={transactionList}
    />

  </div>;
}












//==========================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
