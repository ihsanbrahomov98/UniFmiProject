import React, { useState, useEffect } from "react";
import "./adminDashBoardMainBody.css";
import AdminDashBoardTableList from "./AdminDashBoardTableList";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdminDashBoardMainBody = ({ table }) => {
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("products");
  let location = useLocation();

  useEffect(() => {
    const fetchproducts = async () => {
      console.log(table);
      const { data } = await axios.get(`http://localhost:8082/${table}/all`);
      // TODO Тука ще трябва да се взимат данните от продутките, усери или админи
      setProducts(data);
      console.log(data);
    };
    fetchproducts();
  }, []);
  useEffect(() => {
    setSelected(location.pathname.split("/")[2]);
  }, [location]);
  return (
    <>
      <div className="container  ">
        <div className="TABLE-INFO  border">
          <div className="row  d-flex ">
            <Link
              style={{
                textDecoration: "none",
                color: selected === "products" ? "black" : "white",
              }}
              to={"/admindashboard/products"}
              className={"fs-5 col-4 pe-0 "}
            >
              <div
                className={
                  selected === "products"
                    ? "adminDashBoardMainBodyBlackOrange ps-2   pb-3 pt-3 "
                    : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3 "
                }
              >
                Products
              </div>
            </Link>
            <Link
              className={"fs-5 col-4 ps-0 pe-0"}
              style={{
                textDecoration: "none",
                color: selected === "users" ? "black" : "white",
              }}
              to={"/admindashboard/users"}
            >
              <div
                className={
                  selected === "users"
                    ? "adminDashBoardMainBodyBlackOrange  pb-3 pt-3 ps-2 "
                    : "adminDashBoardMainBodyBlackColor pb-3 pt-3   ps-2 "
                }
              >
                Users
              </div>
            </Link>
            <Link
              className={"fs-5 col-4 ps-0 "}
              style={{
                textDecoration: "none",
                color: selected === "admins" ? "black" : "white",
              }}
              to={"/admindashboard/admins"}
            >
              <div
                className={
                  selected === "admins"
                    ? "adminDashBoardMainBodyBlackOrange ps-2  pb-3 pt-3 "
                    : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3  "
                }
              >
                Admins
              </div>
            </Link>
          </div>
        </div>
        <div className="TABLE-INFO container border">
          <div className="row  border-bottom pb-3 pt-3 d-flex align-items-center">
            <div className="col-1">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
            </div>
            <div className="col-2">ID</div>
            <div className="col-2">USER</div>
            <div className="col-2">3</div>
            <div className="col-2">4</div>
            <div className="col-1">5</div>

            <span className=" col-1 adminDashBoardMainBody pt-1 pb-1 ms-5 d-flex  justify-content-center align-items-center">
              <span onClick={() => setModalShow(true)}> Add new </span>
              <Modalst
                show={modalShow}
                onHide={() => setModalShow(false)}
                table={table}
              />
            </span>
          </div>
          {products.map((e) => (
            <AdminDashBoardTableList
              id={e.id}
              name={e.name}
              img={e.img}
              description={e.description}
              cost={e.cost}
              category={e.category}
              color={e.color}
              size={e.size}
              userId={e.userId}
              table={table}
            />
          ))}
        </div>
      </div>
    </>
  );
};
function Modalst(props) {
  const [dropDownButtonLabel, setDropDownButtonLabel] = useState("man");
  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    cost: "",
    category: "man",
    color: [],
    size: [],
  });
  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
    console.log(data);
  };

  const validateColor = (col) => {
    if (!data.color.find((e) => e === col)) {
      data.color.push(col);
    } else {
      data.color.pop(col);
    }
  };
  const validateSize = (size) => {
    if (!data.size.find((e) => e === size)) {
      data.size.push(size);
    } else {
      data.size.pop(size);
    }
  };
  const onSubmit = (value) => {
    console.log(props.table);
    axios.post(`http://localhost:8082/${props.table}/create`, {
      name: data.name,
      img: data.img,
      description: data.description,
      color: data.color,
      size: data.size,
      cost: data.cost,
      category: data.category,
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalBgSingleProduct p-4" closeButton>
        <div className="container d-flex align-items-center">
          <Modal.Title id="contained-modal-title-vcenter ">
            <div className="fs-5 fw-light d-flex align-items-center">
              Таблица с размери
            </div>
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(e) => validate(e.target.value, "name")}
                placeholder="name"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Img
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="img"
                onChange={(e) => validate(e.target.value, "img")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="description"
                onChange={(e) => validate(e.target.value, "description")}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="price"
                onChange={(e) => validate(e.target.value, "cost")}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <DropdownButton
                id="dropdown-basic-button"
                title={dropDownButtonLabel}
              >
                <Dropdown.Item
                  onClick={(e) => {
                    setDropDownButtonLabel("man");
                    validate("man", "category");
                  }}
                >
                  man
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setDropDownButtonLabel("woman");
                    validate("woman", "category");
                  }}
                >
                  woman
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setDropDownButtonLabel("child");
                    validate("child", "category");
                  }}
                >
                  child
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="formPlaintext">
            <Form.Label column sm="2">
              Color
            </Form.Label>
            <Col sm="10">
              <div className="d-flex flex-row mt-2">
                <span class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateColor("black")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    Черен
                  </label>
                </span>
                <span class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateColor("blue")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    Син
                  </label>
                </span>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateColor("white")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    Бял
                  </label>
                </div>
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column sm="2">
              Size
            </Form.Label>
            <Col sm="10">
              <div className="d-flex flex-row mt-2 ">
                <span class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateSize("41")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    41
                  </label>
                </span>
                <span class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateSize("42")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    42
                  </label>
                </span>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => validateSize("43")}
                  />
                  <label class="form-check-label me-2" for="flexCheckDefault">
                    43
                  </label>
                </div>
              </div>
            </Col>
            <div className={"d-flex justify-content-center mt-3"}>
              <Button
                style={{ width: "50%" }}
                as="input"
                type="button"
                value="Създай"
                onClick={() => onSubmit(data)}
              />{" "}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminDashBoardMainBody;
