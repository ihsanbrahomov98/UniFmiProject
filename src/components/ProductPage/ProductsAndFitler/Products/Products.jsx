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
  const [allowFilter, setAllowFilter] = useState(false);
  const [filter, setFilter] = useState({
    black: false,
    blue: false,
    white: false,
    xl: false,
    m: false,
    s: false,
  });
  useEffect(() => {
    const fetchproducts = async () => {
      if (cat === "all") {
        const { data } = await axios.get(`http://localhost:8082/products/all`);
        setProducts(data);
        setOriginalData(data);
      } else {
        const { data } = await axios.get(
          `http://localhost:8082/products/category/${cat}`
        );
        setProducts(data);
        setOriginalData(data);
      }
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

  const checkFilterData = (filterItem, value) => {
    if ([value === false]) {
      setFilter((existingValues) => ({
        ...existingValues,
        [filterItem]: value,
      }));
    }
    if ([value === true]) {
      setFilter((existingValues) => ({
        ...existingValues,
        [filterItem]: value,
      }));
    }
    setAllowFilter(true);
  };
  useEffect(() => {
    const fetchProductByFilter = async () => {
      if (allowFilter === true) {
        if (cat === "all") {
          const { data } = await axios.get(
            `http://localhost:8082/products/category/filter/all/${filter.black}/${filter.blue}/${filter.white}/${filter.xl}/${filter.m}/${filter.s}`
          );
          console.log(data);
          setProducts(data);
        } else {
          const { data } = await axios.get(
            `http://localhost:8082/products/category/filter/${cat}/${filter.black}/${filter.blue}/${filter.white}/${filter.xl}/${filter.m}/${filter.s}`
          );
          console.log(data);
          setProducts(data);
        }
      }
    };
    fetchProductByFilter();
  }, [filter, setFilter]);

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
                      onClick={() => checkFilterData("black", !filter.black)}
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
                      onClick={() => checkFilterData("blue", !filter.blue)}
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
                      onClick={() => checkFilterData("white", !filter.white)}
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
                      onClick={() => checkFilterData("xl", !filter.xl)}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      xl
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => checkFilterData("m", !filter.m)}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      m
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => checkFilterData("s", !filter.s)}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      s
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
                variant="Secondary"
                className="me-4"
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

            <div className="d-flex row f-row  align-items-center ">
              {products.map((product) => (
                <div className="col-4 ">
                  <Product
                    linkUrl={`/${cat}/${product.id}`}
                    imgSrc={product.img}
                    altInfo={"tree"}
                    nameInfo={product.name}
                    price={product.price}
                    color={product.color}
                    heightRem={"22rem"}
                    widthRem={"17rem"}
                    gutterRem={"10rem"}
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
