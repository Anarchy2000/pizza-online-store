import "../CSS/landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Preposterously Large Pizza's</h1>
        <p>Explore our delicious range of oversized pizzas!</p>
        <a href="/products" className="cta-button">
          Order Now
        </a>
      </header>
      <section className="featured-pizzas">
        <h2>Featured Deals</h2>
        <div className="pizza-gallery">
          <div className="pizza-item">
            <h3>Supreme Pizza</h3>
          </div>
          <div className="pizza-item">
            <h3>Cheese Lover's Pizza</h3>
          </div>
          <div className="pizza-item">
            <h3>Pepperoni Feast Pizza</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
