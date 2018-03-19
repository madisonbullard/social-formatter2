import React from 'react'
import { Provider } from 'unstated'

import Home from './home';

const App = () => (
  <Provider>
    <Home />
  </Provider>
)

export default App