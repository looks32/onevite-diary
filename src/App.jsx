import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import { getEmotionImage } from './utill/get-emotion-image';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>new</Link>
        <Link to={'/diary'}>diary</Link>
        <button onClick={onClickButton}>new 페이지로 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
