import { Provider } from 'react-redux'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import FrontendMentor from './pages/FrontendMentor';
import AddRecipe from './pages/addPage';
import Library from './pages/library';
import Homepage from './pages/home';

import {store} from "./store"
import './main.css'

const Sidebar_Layout = () => {
  return (
    <>
      <nav className="Sidebar">
        <div className="Sidebar-Section">
          <Link to="/customize_recipe_page"><img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' className="Sidebar-Icon"/></Link>
          <Link to="/customize_recipe_page/profile"><img src='https://cdn-icons-png.flaticon.com/512/2661/2661440.png' className="Sidebar-Icon"/></Link>
          <Link to="/customize_recipe_page/library"><img src='https://cdn-icons-png.flaticon.com/512/1693/1693056.png' className="Sidebar-Icon"/></Link>
        </div>  
        <div className="Sidebar-Section">
          <Link to="/customize_recipe_page/default"><img src='https://cdn-icons-png.flaticon.com/512/5229/5229584.png' className="Sidebar-Icon"/></Link>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
        {/* Handle the Browser Router */}
        <BrowserRouter>
          <Routes>
            <Route path="/customize_recipe_page" element={<Sidebar_Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/customize_recipe_page/profile" element={<AddRecipe/>} />
              <Route path="/customize_recipe_page/library" element={<Library/>} />
              <Route path="/customize_recipe_page/default" element={<FrontendMentor/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        {/* End ---- Browser Router */}
    </Provider>
  );
}

export default App;
