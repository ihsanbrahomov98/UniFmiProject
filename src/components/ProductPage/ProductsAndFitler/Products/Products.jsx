import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
const Products = ({ cat }) => {
  const [sort, setSort] = useState("скъпо");
  const [dropDownButtonLabel, setDropDownButtonLabel] =
    useState("Първо най-евтините");
  const [products, setProducts] = useState([]);
  const [colorCheck, setColorCheck] = useState({
    black: false,
    blue: false,
    white: false,
  });
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        "http://localhost:5550/back/mock/api/findall"
      );

      setProducts(data);
      console.log(data);
    };
    fetchproducts();
  }, []);
  const sortLowestPrice = () => {
    setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    setDropDownButtonLabel("Първо най-евтините");
  };
  const sortHighesttPrice = () => {
    setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    setDropDownButtonLabel("Първо най-скъпите");
  };
  const sortAtoZ = () => {
    setProducts((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name))
    );
    setDropDownButtonLabel("Подреди А към Я");
  };

  const sortZtoA = () => {
    setProducts((prev) =>
      [...prev].sort((a, b) => b.name.localeCompare(a.name))
    );
    setDropDownButtonLabel("Първо най-новите");
  };
  const setColor = (color) => {
    console.log(colorCheck);
  };
  const setSize = (size) => {
    setProducts((prev) => [...prev].filter((a) => a.size[3] === size));
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-2 mt-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Цвят</Accordion.Header>
                <Accordion.Body>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => setColor("black")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Черен
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => setColor("blue")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Син
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => setColor("white")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Бял
                    </label>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Размер</Accordion.Header>
                <Accordion.Body>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => setSize("43")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      41
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Син
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Бял
                    </label>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-10">
            <div className="container d-flex justify-content-end mb-2">
              <DropdownButton
                id="dropdown-basic-button"
                title={dropDownButtonLabel}
              >
                <Dropdown.Item onClick={sortLowestPrice}>
                  Първо най-евтините
                </Dropdown.Item>
                <Dropdown.Item onClick={sortHighesttPrice}>
                  Първо най-скъпите
                </Dropdown.Item>
                <Dropdown.Item onClick={sortAtoZ}>
                  Подреди А към Я
                </Dropdown.Item>
                <Dropdown.Item onClick={sortZtoA}>
                  Подреди Я към Z
                </Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="d-flex row f-row justify-content-between align-items-center ">
              {products.map((product) => (
                <div className="col-4">
                  <Product
                    linkUrl={`/product/${product._id}`}
                    imgSrc={"./221025-102_1web.jpg"}
                    altInfo={"tree"}
                    nameInfo={product.name}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
