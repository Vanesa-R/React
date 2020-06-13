import React from 'react';
import './App.css';
import { generate as id } from "shortid";

// Components
import Card from "./components/Card"

function App() {

    const cards = [
        {
            author: "Vanesa",
            date: new Date().toLocaleDateString(),
            description: "Quis consequat sit dolore proident voluptate laboris pariatur pariatur quis pariatur laboris mollit ipsum. Tempor anim occaecat sit enim nulla in ad nostrud deserunt sunt mollit pariatur. Eiusmod ex reprehenderit aute aliqua ea Lorem nostrud id ipsum commodo.",
            id: id(),
            img: "/assets/Catedral_Segovia.jpg",
            tags: ["viajes", "segovia"],
            title: "Conociendo Segovia"
        },
        {
            author: "Vanesa",
            date: new Date().toLocaleDateString(),
            description: "Veniam consectetur commodo ad proident. Esse magna mollit dolore tempor fugiat adipisicing minim Lorem elit sunt. Deserunt dolore consectetur ullamco mollit sunt. Esse pariatur nulla laboris et magna esse. Ex consequat laborum dolore ad fugiat.",
            id: id(),
            img: "/assets/Oviedo.jpg",
            tags: ["viajes", "oviedo"],
            title: "Asturias"
        },
        {
            author: "Vanesa",
            date: new Date().toLocaleDateString(),
            description: "Commodo aliqua velit adipisicing reprehenderit adipisicing nostrud duis magna excepteur fugiat duis. Excepteur velit quis occaecat ex dolor deserunt dolor in. Ea minim non id cupidatat laboris sunt. Sint cupidatat id tempor elit aliquip esse anim adipisicing.",
            id: id(),
            img: "/assets/Caparra.jpg",
            tags: ["viajes", "caparra"],
            title: "Yacimiento romano de Cáparra"
        },
    ]
    return (
        <div className="Card">
             {
        cards.map(card => (
          <Card
            author={card.author}
            date={card.date}
            img={card.img}
            key={card.id}
            tags={card.tags}
            title={card.title}
          >
            {card.description}
          </Card>
        ))
      }
        </div>    
    )
}

export default App;
