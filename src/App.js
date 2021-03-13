import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './sidebar';
import Widgets from './Widgets';
import Login from './Login.js'
import { useStateValue } from './StateProvider';

function App() {
  const[{user},dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? ( 
        <Login />
      ) : (
      <>
    <Header />
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    </>
  )
}
</div>
  );
}

export default App;
