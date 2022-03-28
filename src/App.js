import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';
import NewsNav from './components/NewsNav';
import apiKey from './components/apiKey';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        'https://newsapi.org/v2/everything?q=' +
          category +
          '&apiKey=' +
          apiKey +
          '&pageSize=' +
          loadMore
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResult, category, loadMore]);

  return (
    <div className='App'>
      <NewsNav setCategory={setCategory} />
      <NewsList
        newsArray={newsArray}
        newsResult={newsResult}
        setLoadMore={setLoadMore}
        loadMore={loadMore}
      />
    </div>
  );
}

export default App;
