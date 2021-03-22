import { Switch, Route } from 'react-router-dom';
import './index.scss';

//Components
import Sidebar from './components/Sidebar';

//Layouts
import MainLayout from './layouts/MainLayout';

//Pages
import Homepage from './pages/Homepage';
import Trending from './pages/Trending';

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
        <Route exact path="/trending" render={() => (
          <MainLayout>
            <Trending/>
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
