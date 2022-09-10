import './App.css';


import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Posts from './component/Posts';
import PostPage from './component/PostPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path="Post">
          <Route index element={<Posts />} />
          <Route path=":Post_id" element={<PostPage/>} />
        </Route>
      </Route>
      <Route path='*' element={<Error />} />

    </Routes>
  );
}

export default App;