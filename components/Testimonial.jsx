import React from "react";

const Testimonial = ({ quote, name, designation, image }) => {
  return (
    <div className="testimonial">
      <img
        src={image}
        alt={`${name}'s portrait`}
        className="testimonial-image"
      />
      <blockquote className="testimonial-quote">{quote}</blockquote>
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-designation">{designation}</p>
    </div>
  );
};

export default Testimonial;
