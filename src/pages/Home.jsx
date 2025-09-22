import { useSearchParams } from 'react-router-dom';

const Home = () => {
  // 주소창의 local/?value=aa 를 예시로
  const [params, setParams] = useSearchParams();
  console.log(params.get('value'));
  return <div>Home</div>;
};

export default Home;
