import React from "react";
import "../CSS/landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Preposterously Large Pizza's</h1>
        <p>Explore our delicious range of oversized pizzas!</p>
        <a href="/menu" className="cta-button">
          Order Now
        </a>
      </header>

      <section className="intro-section">
        <h2>About Us</h2>
        <p>
          At Preposterously Large Pizza's, we believe in serving the biggest and
          best pizzas in town. Our secret recipe and fresh ingredients make
          every bite unforgettable.
        </p>
      </section>

      <section className="featured-pizzas">
        <h2>Featured Pizzas</h2>
        <div className="pizza-gallery">
          <div className="pizza-item">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pepperoni"
            />
            <h3>Pepperoni</h3>
            <p>Mozzarella cheese, sliced pepperoni</p>
          </div>
          <div className="pizza-item">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Meat Lovers"
            />
            <h3>Meat Lovers</h3>
            <p>Mozzarella cheese, pepperoni, sausage, ham</p>
          </div>
          <div className="pizza-item">
            <img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="F.A.B"
            />
            <h3>F.A.B</h3>
            <p>Mozzarella cheese, fresh basil, tomatoes</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-item">
          <p>"The best pizza I've ever had! The size is unbelievable!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial-item">
          <p>"Great taste and fast delivery. Highly recommend!"</p>
          <p>- John Smith</p>
        </div>
      </section>

      <section className="cta-section">
        <a href="/register" className="cta-button">
          Sign Up
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
