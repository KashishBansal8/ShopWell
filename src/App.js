import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className='shopwell-app flex flex-column'>
        <Header />
        <ProductPage />
      </div>
    </Provider>
  );
}

export default App;
