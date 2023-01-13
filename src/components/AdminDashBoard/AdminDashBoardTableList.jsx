import React, { useState } from "react";
import "./adminDashBoardMainBody.css";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AdminDashBoardTableList = ({
  name,
  img,
  description,
  cost,
  category,
  color,
  size,
  userId,
  price,
  adminId,
  table,
  id,
  email,
  fetch,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const deleteProduct = () => {
    console.log(id);
    axios.delete(
      `http://localhost:8082/${table}/delete`,

      {
        data: {
          id: id,
        },
      },
      {
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    fetch("delete");
  };
  const CheckInfo = () => {
    if (userId) {
      return userId;
    }
    if (adminId) {
      return adminId;
    }
    if (price) {
      return price;
    }
  };
  return (
    <>
      <div className="row border-bottom pb-3 pt-3 d-flex align-items-center">
        <div className="col-1">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </div>
        </div>
        <div className="col-2 ">{id}</div>
        <div className="col-2">
          <div className="">
            <div className=" d-flex align-items- justify-content-start flex-row">
              <img
                src={
                  img
                    ? img
                    : "https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                }
                alt="tree"
                style={{ width: "12%", height: "7%" }}
              />
              <span className="ps-3">{name} </span>
            </div>
          </div>
        </div>

        <div className="col-2">{table === "products" ? category : email}</div>
        <div className="col-2 " style={{ color: "green" }}>
          {CheckInfo()}
        </div>
        <div className="col-3">
          <div className=" d-flex align-items- justify-content-start flex-row">
            <span className="adminDashBoardMainBody ps-2 pe-2 me-3">
              <div onClick={() => setModalShow(true)}>
                <div className=" modalCursor ">view</div>
              </div>

              <Modalst
                fetch={fetch}
                show={modalShow}
                id={id}
                name={name}
                img={img}
                description={description}
                cost={cost}
                category={category}
                color={color}
                size={size}
                userId={userId}
                adminId={adminId}
                table={table}
                email={email}
                onHide={() => setModalShow(false)}
              />
            </span>
            <span
              className="adminDashBoardRedButton ps-2 pe-2 "
              onClick={deleteProduct}
            >
              Delete{" "}
            </span>
          </div>
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
    price: "",
    category: "man",
    color: "",
    size: "",
    amount: "",
    season: "",
    email: "",
    userId: "",
    adminId: "",
  });
  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
    console.log(data);
  };

  const onSubmit = (value) => {
    console.log(props.table);
    if (props.table === "products") {
      axios.put(`http://localhost:8082/${props.table}/update`, {
        name: data.name,
        img: data.img,
        description: data.description,
        color: data.color,
        size: data.size,
        category: data.category,
        price: data.price,
        amount: 1,
        season: data.season,
        id: props.id,
        userId: data.userId,
      });
    } else if (props.table === "user") {
      axios.put(`http://localhost:8082/${props.table}/update`, {
        name: data.name,
        email: data.email,
        userId: data.userId,
      });
    } else if (props.table === "admins") {
      axios.post(`http://localhost:8082/${props.table}/update`, {
        name: data.name,
        email: data.email,
        adminId: data.adminId,
      });
      props.fetch("update");
    }
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
              Information
            </div>
          </Modal.Title>
        </div>
      </Modal.Header>

      {props.table === "products" ? (
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
                Color
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "color")}
                  placeholder="color"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Size
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "size")}
                  placeholder="size"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "amount")}
                  placeholder="amount"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Season
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "season")}
                  placeholder="season"
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
                  onChange={(e) => validate(e.target.value, "price")}
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

            <Form.Group as={Row} className="" controlId="formPlaintext">
              <div className={"d-flex justify-content-center mt-3"}>
                <Button
                  style={{ width: "50%" }}
                  as="input"
                  type="button"
                  value="Update"
                  onClick={() => onSubmit(data)}
                />{" "}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      ) : (
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
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "email")}
                  placeholder="email"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Product
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "userId")}
                  placeholder="product"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                User
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => validate(e.target.value, "adminId")}
                  placeholder="user"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="" controlId="formPlaintext">
              <div className={"d-flex justify-content-center mt-3"}>
                <Button
                  style={{ width: "50%" }}
                  as="input"
                  type="button"
                  value="Update"
                  onClick={() => onSubmit(data)}
                />{" "}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default AdminDashBoardTableList;
