import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordionItem = () => {
  return (
    <div className="container mt-4 ">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Информация за Продутка
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              iusto. Magnam numquam iure in illum id, maxime repellat ipsum
              dolorum, debitis amet iste officia consequatur ratione atque illo
              tenetur suscipit?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Информация за Доставката
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              modi soluta ea magnam veritatis quibusdam rerum perferendis atque?
              Assumenda quo saepe illo, numquam sit placeat perferendis
              consequatur incidunt sequi facilis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
