import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card";
import "./styles.css"; 

function App() {
  const data = [
    { img: "/images/horse.jpg", title: "White horse", description: "This is a white horse" },
    { img: "/images/cat.jpg", title: "Red cat", description: "This is a red cat" },
    { img: "/images/dog.jpg", title: "Black dog", description: "This is a black dog" },
    { img: "/images/plant.jpg", title: "Plant", description: "This is a plant" },
    { img: "/images/lion.jpg", title: "Lion", description: "This is a lion" },
    { img: "/images/tree.jpg", title: "Tree", description: "This is a tree" },
    { img: "/images/zebra.jpg", title: "Zebra", description: "This is a zebra" },
    { img: "/images/leopard.jpg", title: "Leopard", description: "This is a leopard" },
    { img: "/images/flower.jpg", title: "Flower", description: "This is a flower" }
  ];

  return (
    <div>
      <h3>Proj React Homework</h3> 
    <div class="container">
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} />
      ))}
    </div>
    </div>
  );
}

export default App;
