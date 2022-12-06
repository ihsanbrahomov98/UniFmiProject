import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

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
        <img
          src="https://carducci.bg/image/catalog/%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%20%D1%8F%D0%BA%D0%B5%20casual%20navy%20f5f5f5.jpg"
          alt="tree"
          style={{ width: "100%", height: "100%" }}
          className=" border figure-img img-fluid rounded p-0"
        />
      </Modal.Body>
    </Modal>
  );
}

function ModalSingleProduct() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div onClick={() => setModalShow(true)}>
        <div className="mt-1 text-decoration-underline modalCursor mt-4">
          Таблица с размери
        </div>
      </div>

      <Modalst show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalSingleProduct;
