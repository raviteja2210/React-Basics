// App.js
import React from 'react';
import Inc from './Redux/Inc';


const App = ({count}) => {
  return (
    <div>
      <h1> Count from APP: {count}</h1>
      <Inc/>
    </div>
  );
};

export default App;
