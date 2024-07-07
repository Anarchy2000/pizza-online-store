import React from "react";
import "../CSS/products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

function Products({ setCartItems, cartItems }) {
  const pizzas = [
    {
      id: 1,
      name: "Pepperoni",
      price: 90.0,
      toppings: "Mozzerella cheese, Sliced pepperoni, Hot Honey sauce",
      image:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Meat Lovers",
      price: 90.0,
      toppings: "Mozzerella cheese, Beef, Chorizo, Bacon",
      image:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "F.A.B",
      price: 90.0,
      toppings: "Mozzerella cheese, Bacon, Sliced Avo, Feta Cheese",
      image:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: 90.0,
      toppings: "Mozzerella cheese, Fresh Basil, Feta Cheese",
      image:
        "https://images.pexels.com/photos/1220717/pexels-photo-1220717.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "BBQ Chicken Pizza",
      price: 90.0,
      toppings: "Mozzerella cheese, Shredded Chicken, Mushroom, BBQ sauce",
      image:
        "https://images.pexels.com/photos/2271197/pexels-photo-2271197.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Hawaiian Pizza",
      price: 90.0,
      toppings: "Mozzerella cheese, Sliced pineapple, Ham",
      image:
        "https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Chick 'N Mayo",
      price: 90.0,
      toppings: "Mozzerella cheese, Mayo Base, Chicken, Bacon",
      image:
        "https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Hot One",
      price: 90.0,
      toppings: "Mozzerella cheese,Chilli Base, Green Pepper, Beef & Onion",
      image:
        "https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "Regina",
      price: 90.0,
      toppings: "Mozzerella cheese, Mushroom, Ham",
      image:
        "https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const addToCart = (pizza) => {
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center", marginTop: "15px", fontSize: "50px" }}>
        Order Now!!
      </h2>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <Card style={{ width: "15rem", margin: "15px 10px" }}>
              <Card.Img variant="top" src={pizza.image}></Card.Img>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  {pizza.toppings}
                </Card.Text>
                <Card.Text>${pizza.price}</Card.Text>
                <Button variant="secondary" onClick={() => addToCart(pizza)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
