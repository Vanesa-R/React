import React from 'react';
import { generate as id } from "shortid";

const Card = ({ author, title, date, key, tags, img, children }) => (
  <div className="Cards">
    <h3 className="Card__title">{title}</h3>
    <img className="Card__img" src={img} alt={title}/>
    <p className="Card__description">{children}</p>
    <p className="Card__author">Publicado por {author} el {date}</p>
    <ul>
      {
        tags.map(tag => {
        return <li key={id()} className="Card__tag">{tag}</li>
        })
      }
    </ul>
  </div>
)

export default Card