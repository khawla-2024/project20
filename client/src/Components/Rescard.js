import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import res1 from "../Images/res1.png";
import res2 from "../Images/res2.png";
import res3 from "../Images/res3.png";
import res4 from "../Images/res4.png";
import res5 from "../Images/res5.png";
import { Link } from 'react-router-dom';

// CustomCard Component to render individual card
function CustomCard({ title, text, imgSrc, id }) {
  const LOCAL_STORAGE_KEY = `restaurant_${id}_state`;

  // State to manage like and dislike counts
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // Load state from localStorage on component mount
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedState) {
      setLikes(storedState.likes || 0);
      setDislikes(storedState.dislikes || 0);
      setLiked(storedState.liked || false);
      setDisliked(storedState.disliked || false);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const state = {
      likes,
      dislikes,
      liked,
      disliked,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [likes, dislikes, liked, disliked]);

  // Handlers for like and dislike toggle
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prevLikes) => prevLikes - 1); // Remove like
    } else {
      setLiked(true);
      setDisliked(false);
      setLikes((prevLikes) => prevLikes + 1); // Add like
      if (disliked) setDislikes((prevDislikes) => prevDislikes - 1); // Remove dislike if present
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikes((prevDislikes) => prevDislikes - 1); // Remove dislike
    } else {
      setDisliked(true);
      setLiked(false);
      setDislikes((prevDislikes) => prevDislikes + 1); // Add dislike
      if (liked) setLikes((prevLikes) => prevLikes - 1); // Remove like if present
    }
  };

  return (
    <Card style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={imgSrc} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* Use Link to navigate to the restaurant detail page */}
        <Link to={`/restaurant/${id}`}>
          <Button variant="primary" style={{ marginBottom: '10px' }}>Book Now</Button>
        </Link>
        {/* Like and Dislike Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant={liked ? "success" : "outline-success"}
            onClick={handleLike}
            style={{ marginRight: '5px' }}
          >
            👍 Like {likes}
          </Button>
          <Button
            variant={disliked ? "danger" : "outline-danger"}
            onClick={handleDislike}
          >
            👎 Dislike {dislikes}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// Parent Component to render multiple cards
function Rescard() {
  const cardData = [
    {
      id: 1,
      title: 'Aldhahli Restaurant',
      text: 'This distinctive restaurant is located in the heart of Nizwa city.',
      imgSrc: res1,
    },
    {
      id: 2,
      title: 'Nizwa Al Khair Restaurant',
      text: 'This distinctive restaurant is located in the heart of Nizwa city.',
      imgSrc: res2,
    },
    {
      id: 3,
      title: 'Liwan Nizwa Restaurant',
      text: 'This distinctive restaurant is located in the heart of Nizwa city.',
      imgSrc: res3,
    },
    {
      id: 4,
      title: 'AlMaisan Restaurant',
      text: 'This distinctive restaurant is located in the heart of Nizwa city.',
      imgSrc: res4,
    },
    {
      id: 5,
      title: 'Al-Masharef Restaurant Nizwa',
      text: 'This distinctive restaurant is located in the heart of Nizwa city.',
      imgSrc: res5,
    },
  ];

  return (
    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cardData.map((card) => (
        <div key={card.id} style={{ margin: '10px' }}>
          <CustomCard
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
            id={card.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Rescard;
