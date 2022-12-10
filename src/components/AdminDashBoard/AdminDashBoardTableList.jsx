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
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const deleteProduct = () => {
    axios.delete("http://localhost:5550/back/mock/api/deleteone", {
      data: {
        name: name,
      },
    });
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
        <div className="col-2 ">{userId}</div>
        <div className="col-2">
          <div className="">
            <div className=" d-flex align-items- justify-content-start flex-row">
              <img
                src="https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                alt="tree"
                style={{ width: "12%", height: "7%" }}
              />
              <span className="ps-3">{name} </span>
            </div>
          </div>
        </div>
        <div className="col-2">asdas@abv.bg</div>
        <div className="col-2 " style={{ color: "green" }}>
          active
        </div>
        <div className="col-3">
          <div className=" d-flex align-items- justify-content-start flex-row">
            <span className="adminDashBoardPurpleButton ps-2 pe-2 me-3">
              <div onClick={() => setModalShow(true)}>
                <div className=" modalCursor ">view2</div>
              </div>

              <Modalst
                show={modalShow}
                name={name}
                img={img}
                description={description}
                cost={cost}
                category={category}
                color={color}
                size={size}
                userId={userId}
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
    name: "are",
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
    axios.put("http://localhost:5550/back/mock/api/update", {
      name: data.name,
      img: data.img,
      description: data.description,
      color: data.color,
      size: data.size,
      cost: data.cost,
      userId: 213123121,
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
            <div className="fs-5 fw-light d-flex align-items-center">view</div>
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(e) => validate(e.target.value, "name")}
                placeholder="name"
                defaultValue={props.name}
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
                defaultValue={props.img}
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
                defaultValue={props.description}
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
                defaultValue={props.cost}
                onChange={(e) => validate(e.target.value, "cost")}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <DropdownButton id="dropdown-basic-button" title={props.category}>
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
                value="редактирай"
                onClick={() => onSubmit(data)}
              />{" "}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminDashBoardTableList;
