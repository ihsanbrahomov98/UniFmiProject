import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";

const Products = ({ cat }) => {
  const [sort, setSort] = useState("скъпо");
  const [originalData, setOriginalData] = useState();
  const [dropDownButtonLabel, setDropDownButtonLabel] =
    useState("Първо най-евтините");
  const [products, setProducts] = useState([]);
  const [checkedBlack, setCheckedBlack] = useState(false);
  const [checkedBlue, setCheckedBlue] = useState(false);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        "http://localhost:5550/back/mock/api/findall"
      );
      let filteredData;
      if (!cat === "all") {
        filteredData = data.filter((item) => item.category === cat);
      } else {
        filteredData = data;
      }

      setProducts(filteredData);
      setOriginalData(filteredData);
      console.log(filteredData);
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
    if (!checkedBlack) {
      setProducts((prev) =>
        [...prev].filter(
          (item) =>
            item.color[0] === color ||
            item.color[1] === color ||
            item.color[2] === color
        )
      );
      setCheckedBlack(true);
    } else {
      setCheckedBlack(false);
      setProducts(originalData);
    }
    if (!checkedBlue) {
      setProducts((prev) =>
        [...prev].filter(
          (item) =>
            item.color[0] === color ||
            item.color[1] === color ||
            item.color[2] === color
        )
      );
      if (setCheckedBlack) {
        setProducts(
          (prev) => [...prev],
          products.filter(
            (item) =>
              item.color[0] === "black" ||
              item.color[1] === "black" ||
              item.color[2] === "black"
          )
        );
      }
      setCheckedBlue(true);
    } else {
      setCheckedBlue(false);
      setProducts(originalData);
    }

    console.log(products);
  };
  const setSize = (size) => {
    setProducts((prev) => [...prev].filter((a) => a.size[3] === size));
  };
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
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
                      onClick={() => setColor("white")}
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
                    linkUrl={`/${cat}/${product._id}`}
                    imgSrc={"./221025-102_1web.jpg"}
                    altInfo={"tree"}
                    nameInfo={product.name}
                    price={product.price}
                    heightRem={"22rem"}
                    widthRem={"17rem"}
                    gutterRem={"10rem"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default Products;
