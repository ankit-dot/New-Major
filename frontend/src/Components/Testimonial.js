import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";




const data = [
  {
    imgUrl:ProfilePic,
    desc:"Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    name:"Ashutosh Nema"
  },
  {
    imgUrl:ProfilePic,
    desc:"Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    name:"Saksham Srivastav"
  },
  {
    imgUrl:ProfilePic,
    desc:"Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    name:"Shivansh Mishra"
  },
]
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
       { data.map((user,index) => (
        <div className="testimonial-section-bottom" key = {index}>
          <img src={user.imgUrl} alt="" />
          <p>
            {user.desc}
          </p>
          <div className="testimonials-stars-container flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>{user.name}</h2>
        </div>
 ))}
      </div>
    </div>
  );
};

export default Testimonial;
