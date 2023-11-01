
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/cake/store'

function App() {
   
  return (
    <Provider store={store}>
      <p>
        redux
      </p>
    </Provider>
  )
}

export default App
