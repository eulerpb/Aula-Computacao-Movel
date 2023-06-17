import React from 'react';
import AppNavigator from './src/routes/routes';
import Home from './src/screens/Home';

const App: React.FC = () => {
  const userName = 'Exemplo';

  return (
    <AppNavigator>
      <Home userName={userName} />
    </AppNavigator>
  );
};

export default App;