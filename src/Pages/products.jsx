import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import "../CSS/products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

function Products() {
  const dispatch = useDispatch();
  //map for items
  const pizzas = [
    {
      id: 1,
      name: "Pepperoni",
      price: 90.0,
      toppings: "Mozzerella cheese, Sliced pepperoni, Hot Honey sauce",
      image:
        "https://www.cobsbread.com/wp-content/uploads/2022/09/Pepperoni-pizza-850x630-1-585x400-1.jpg",
    },
    {
      id: 2,
      name: "Meat Lovers",
      price: 150.0,
      toppings: "Mozzerella cheese, Beef, Chorizo, Bacon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTVJZ0JoCH4LqGh38qW_w2kVzY1E6auBz8g&s",
    },
    {
      id: 3,
      name: "F.A.B",
      price: 150.0,
      toppings: "Mozzerella cheese, Bacon, Sliced Avo, Feta Cheese",
      image:
        "https://www.cashlinkresandpub.co.za/wp-content/uploads/2022/09/b7b5da3a934bf52a53bd937bd45e0dfb.jpg",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: 80.0,
      toppings: "Mozzerella cheese, Fresh Basil, Feta Cheese",
      image:
        "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
    },
    {
      id: 5,
      name: "BBQ Chicken Pizza",
      price: 140.0,
      toppings: "Mozzerella cheese, Chicken, Mushroom, BBQ sauce",
      image:
        "https://www.thecandidcooks.com/wp-content/uploads/2023/04/bbq-chicken-pizza-feature.jpg",
    },
    {
      id: 6,
      name: "Hawaiian Pizza",
      price: 105.0,
      toppings: "Mozzerella cheese, Sliced pineapple, Ham",
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg",
    },
    {
      id: 7,
      name: "Chick 'N Mayo",
      price: 120.0,
      toppings: "Mozzerella cheese, Mayo Base, Chicken, Bacon",
      image:
        "https://vetkoekpaleis-media.b-cdn.net/wp-content/uploads/2023/01/10225241/Chicken-Mayo-Pizza-1.webp",
    },
    {
      id: 8,
      name: "Hot One",
      price: 110.0,
      toppings: "Mozzerella cheese,Chilli Base, Beef & Onion",
      image:
        "https://embed.widencdn.net/img/beef/gxsxp5i3do/1120x840px/spicy-nacho-beef-pizza-square.eps?keep=c&u=7fueml",
    },
    {
      id: 9,
      name: "Regina",
      price: 90.0,
      toppings: "Mozzerella cheese, Mushroom, Ham",
      image:
        "https://www.sabat.co.za/wp-content/uploads/2023/02/pizza-regina.jpg",
    },
  ];

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };
  return (
    <Container>
      <h2 style={{ textAlign: "center", marginTop: "15px", fontSize: "50px" }}>
        Order Now!!
      </h2>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id} md={6} lg={4} xl={3}>
            <Card
              style={{ width: "15rem", margin: "15px 10px", padding: "20px" }}
            >
              <Card.Img variant="top" src={pizza.image}></Card.Img>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text style={{ fontSize: "13px" }}>
                  {pizza.toppings}
                </Card.Text>
                <Card.Text>R{pizza.price}</Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => handleAddToCart(pizza)}
                >
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
