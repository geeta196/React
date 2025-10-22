import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h2>Hello {props.name}</h2>
      <img src={props.image} alt="profile" width="200" />
      <p>My name is Geeta Taskar. I am currently pursuing my Master of Computer Science (MCS).
        I have a keen interest in programming, web development, and problem-solving.
        I enjoy learning new technologies and applying them in practical projects.
        My strengths are hard work, quick learning, and adaptability. 
        I believe in continuous growth and always look forward to improving my skills.
        Apart from academics, I also like exploring new ideas, collaborating with people, and sharing knowledge.</p>
    
    </div>
  );
}
export default Card;
