import Header from "../components/Header";
import "./styles/App.css";
import Testimonial from "../components/Testimonial";

const App = () => {
  const testimonialsData = [
    {
      quote: "This service is fantastic! has changed my life for the better.",
      name: "Srinath",
      designation: "CEO, CompanyX",
      image: "/images/john.jpg",
    },
    {
      quote: "Amazing experience. Highly recommended to everyone!",
      name: "Suresh",
      designation: "Marketing Director, CompanyY",
      image: "/images/jane.jpg",
    },
    {
      quote: "A truly outstanding service, far beyond our expectations.",
      name: "Ramesh",
      designation: "CEO, CompanyZ",
      image: "/images/robert.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className="first-section">
        <section className="main-section">
          <div className="right">
            <p className="main-text">Ride the Future with GravitoRide</p>
            <p className="desc">
              Discover the latest in futuristic Vechile rentals.
            </p>
            <div className="btns">
              <button className="btn">Explore Vehicles </button>
            </div>
          </div>
          <div className="left">
            <img src="/pngegg.png" alt="" />
          </div>
        </section>
      </section>
      <section className="second-section" id="about">
        <h1>About Us</h1>
        <hr />
        <div className="img-wrapper">
          <img src="/pngegg(2).png" alt="" />
          <div className="about-section">
            Welcome to GravitoRide, your go-to solution for convenient and
            reliable vehicle rentals. At GravitoRide, we understand that
            mobility is key to exploring new places, accomplishing tasks, and
            simply getting where you need to be. Whether you're looking for a
            car for a weekend getaway, a bike for your daily commute, or a
            specialty vehicle for an event, GravitoRide has you covered.
          </div>
        </div>
      </section>
      <section className="third-section" id="reviews">
        <h2 className="section-title">What Our Clients Say</h2>
        <hr />
        <div className="testimonials-container">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              designation={testimonial.designation}
              image={testimonial.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
