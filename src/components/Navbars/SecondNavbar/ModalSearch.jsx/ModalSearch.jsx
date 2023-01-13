import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Search } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Product from "./../../../ProductPage/ProductsAndFitler/Products/Product";
const ModalSearch = (props) => {
  const [type, setType] = useState("");
  const [products, setProducts] = useState("");
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("http://localhost:8082/products/all");
      setProducts(data);
    };
    fetchproducts();
  }, []);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              onChange={(e) => {
                setType(e.target.value.toLowerCase());
              }}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label></Form.Label>
              <Form.Control type="field" placeholder="Търсете" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            {type &&
              products
                .filter((user) => user.name.toLowerCase().includes(type))
                .slice(0, 4)
                .map((product) => (
                  <div className="col-2 me-5 ">
                    <Product
                      linkUrl={`/${"all"}/${product.id}`}
                      imgSrc={product.img}
                      altInfo={"tree"}
                      nameInfo={product.name}
                      price={product.price}
                    />
                  </div>
                ))}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSearch;
