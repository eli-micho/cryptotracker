import { Switch, Route } from 'react-router-dom';
import './index.scss';

//Components
import Sidebar from './components/Sidebar';

//Layouts
import MainLayout from './layouts/MainLayout';

//Pages
import Homepage from './pages/Homepage';
import Trending from './pages/Trending';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

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

        <Route exact path="/signin" render={() => (
          <MainLayout>
            <SignIn/>
          </MainLayout>
        )} />

        <Route exact path="/register" render={() => (
          <MainLayout>
            <Register/>
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
