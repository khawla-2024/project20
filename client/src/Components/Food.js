import React, { useState } from 'react';
import barger from "../Images/barger.png";
import pasta from "../Images/pasta.png";
import pizza from "../Images/pizza.png";
import salad from "../Images/salad.png";
import chicken from "../Images/chicken.png";
import chickpeas from "../Images/chickpeas.png";
import falafel from "../Images/falafel.png";
import hamsa from "../Images/hamsa.png";
import shakshuka from "../Images/shakshuka.png";
import tika from "../Images/tika.png";
import Counter from './Counter';
import Addrestaurant from './Addrestaurant';
import { useNavigate } from 'react-router-dom';
function Food() {
  const foodItems = [
    { id: 1, name: 'Burger', price: 2.50, image: barger },
    { id: 2, name: 'Pizza', price: 3.00, image: pizza },
    { id: 3, name: 'Pasta', price: 4.00, image: pasta },
    { id: 4, name: 'Salad', price: 5.00, image: salad },
    { id: 5, name: 'Chicken', price: 2.50, image: chicken },
    { id: 6, name: 'Chickpeas', price: 2.00, image: chickpeas },
    { id: 7, name: 'Falafel', price: 3.50, image: falafel },
    { id: 8, name: 'Shakshuka', price: 6.00, image: shakshuka },
    { id: 9, name: 'Tika', price: 4.00, image: tika },
    { id: 10, name: 'Hamsa', price: 5.50, image: hamsa },
  ];

  const [selectedItems, setSelectedItems] = useState({});

  const handleCountChange = (id, count, price) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [id]: { count, price },
    }));
  };

  const totalPrice = Object.values(selectedItems).reduce((total, item) => total + item.count * item.price, 0);

  const navigate=useNavigate();
  const handleBooking=(()=>{
  navigate("/addrestaurant")
})
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '40px',
    }}>
      <h1 style={{ marginBottom: '40px', fontSize: '36px' }}>Food Menu</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        width: '100%',
      }}>
        {foodItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <h3 style={{ margin: '15px 0', fontSize: '24px' }}>{item.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>${item.price.toFixed(2)}</p>
            <Counter
              initialCount={0}
              onCountChange={(count) => handleCountChange(item.id, count, item.price)}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', fontSize: '24px' }}>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
      <button color="primary" onClick={handleBooking}>Booking</button>
    </div>
  );
}

export default Food;
