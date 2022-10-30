import { Container } from './App.styled';
import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import Loader from './Loader';
import fetchPixabay from '../api/index';
import ImageGallery from './ImageGallery';
import Button from './Button';

const App = () => {
  const [page, setPage] = useState(1);
  const [findImg, setFindImg] = useState('');
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const loadingContent = async (q, page) => {
      setIsLoading(true);
      const response = await fetchPixabay(q, page);
      const { totalHits, hits, total } = response.data;
      if (totalHits === 0) {
        setContent([]);
        setIsLoading(false);
        setTotalPages(1);
        return;
      }
      if (totalHits <= 12) {
        setTotalPages(total);
        setIsLoading(false);
        setContent(prevContent => [...prevContent, ...hits]);
        return;
      }
      setTotalPages(null);
      setIsLoading(false);
      setContent(prevContent => [...prevContent, ...hits]);
      setTotalPages(total);
    };
    if (findImg !== '') {
      loadingContent(findImg, page);
    }
  }, [findImg, page]);

  const updateState = findImg => {
    setFindImg(findImg);
    setTotalPages(null);
    setPage(1);
    setContent([]);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar updateState={updateState} />
      {findImg === '' && (
        <Container>
          <h1>Insert your request.</h1>
        </Container>
      )}
      {totalPages && content.length === 0 && (
        <Container>
          <h1>No images for this request.</h1>
        </Container>
      )}
      <ImageGallery content={content} />
      {content.length > 0 && totalPages > content.length && !isLoading && (
        <Button onLoadMore={onLoadMore} />
      )}
      {isLoading && (
        <Container>
          <Loader />
        </Container>
      )}
    </>
  );
};

export default App;
