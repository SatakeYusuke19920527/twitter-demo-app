import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

// components
import Login from './components/Login';

const App: React.FC<{}> = () => {
  const user = useSelector(selectUser);
  console.log(user.uid);
  if (user.uid) {
    return <h1>App.tsx</h1>;
  } else {
    return <Login />;
  }
};

export default App;
