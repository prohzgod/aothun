import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import Home from '../src/features/Home'
import Store from '../src/features/Store'
import Categories from '../src/features/Categories'
import Test from '../src/features/Test'

function App() {
  return (
    <div className="shirt-shop">
     <Suspense fallback={<div>Loading ...</div>}>
       <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>

          <Route path="/home" component={Home}/>
          <Route path="/store" component={Store}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/test" component={Test}/>
          <Route component={NotFound}/>
        </Switch>
       </BrowserRouter>
     </Suspense>
    </div>
  );
}

export default App;
