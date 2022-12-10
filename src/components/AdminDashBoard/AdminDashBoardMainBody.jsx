import React from "react";
import "./adminDashBoardMainBody.css";
import AdminDashBoardTableList from "./AdminDashBoardTableList";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
const AdminDashBoardMainBody = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="container  ">
        <div className="d-flex justify-content-between p-2">
          <div className="fs-5 fw-bold">Customers</div>
          <div className="adminDashBoardMainBody p-2">
            <div onClick={() => setModalShow(true)}>add new</div>
            <Modalst show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="TABLE-INFO container border">
          <div className="row border-bottom pb-3 pt-3">
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
            <div className="col-3">5</div>
          </div>
          <AdminDashBoardTableList />
          <AdminDashBoardTableList />
          <AdminDashBoardTableList /> <AdminDashBoardTableList />{" "}
          <AdminDashBoardTableList />
        </div>
      </div>
    </>
  );
};
function Modalst(props) {
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
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Img
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminDashBoardMainBody;
