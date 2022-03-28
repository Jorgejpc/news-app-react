//This component recieves newsArray (which is an array with all news) from App.js
//For each element in the array, it displays a single NewsItem (which are constructed with newsElement parameters)
//NewsItem is imported in order tu use it in the returnS

import React from 'react';
import NewsItem from './NewsItem';
import './newsList.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NewsList = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  return (
    <>
      <Container className='news-container'>
        <Row className='g-4'>
          {newsArray.map((newsElement) => (
            <Col className='col-news'>
              <NewsItem newsElement={newsElement} />
            </Col>
          ))}
        </Row>
        {loadMore <= newsResult && (
          <>
            <Button
              variant='danger'
              className='loadButton'
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default NewsList;
