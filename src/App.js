import { Switch, Route } from 'react-router-dom';
import './index.scss';

//Components
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

//Layouts
import MainLayout from './layouts/MainLayout';

//Pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage/>
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
