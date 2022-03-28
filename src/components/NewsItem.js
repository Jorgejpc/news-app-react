//This component recieves newsElement (which is a single news) from NewsList.js
//Then it uses its parameters to creare the news card that is displayed
//newsElement parameters: urlToImage, url, title, description
//newsItem.css is imported to add the styles

import React from 'react';
import './newsItem.css';
import Card from 'react-bootstrap/Card';

const NewsItem = ({ newsElement }) => {
  return (
    <Card
      border='dark'
      style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Card.Img
        className='card-img'
        variant='top'
        src={
          newsElement.urlToImage
            ? newsElement.urlToImage
            : 'https://static.wikia.nocookie.net/animated_inanimate_battle/images/a/a3/Image-not-found.png/revision/latest?cb=20200723230444'
        }
        alt={newsElement.urlToImage}
      />
      <Card.Body className='card-body'>
        <Card.Link
          className='card-link'
          href={newsElement.url}
          style={{ color: 'black' }}
        >
          {newsElement.title}
        </Card.Link>
        <Card.Text className='card-text'>{newsElement.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
