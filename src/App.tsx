import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import Posts from './components/Posts.tsx'
import Users from './components/Users.tsx'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
  export default App;