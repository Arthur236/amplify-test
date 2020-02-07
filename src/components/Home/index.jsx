import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const renderCards = () => {
  const cards = [];

  for (let i = 0; i < 10; i++) {
    cards.push(
      <Card
        key={i}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://images.pexels.com/photos/3250240/pexels-photo-3250240.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          />
        }
      >
        <Meta title="Sample pic" description="www.pexels.com"/>
      </Card>
    );
  }

  return cards;
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <div className="card-container">
        {renderCards()}
      </div>
    </div>
  );
};

export default Home;
