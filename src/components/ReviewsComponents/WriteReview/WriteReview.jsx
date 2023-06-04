import React, { useState, useEffect } from "react";
import axios from "axios";
import { ADD, ALL, BACK_END_BASE_URL, REVIEW } from "../../../utils/Utils";
import StarPicker from "react-star-picker";
import Review from "../Review/Review";
import Pagination from "../Pagination/Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SitterWriteReview = ({ item }) => {
  const userData = useSelector((state) => state.user);
  const location = useLocation();
  const [validationState, setValidationState] = useState({
    reviewText: "",
    rating: "",
  });
  const [formState, setFormState] = useState({
    reviewText: "",
    rating: "",
  });
  const [reviews, setReviews] = useState([]);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { reviewText, rating } = formState;
    const errors = {};

    if (!reviewText || reviewText.length < 4) {
      errors.reviewText =
        "Review is required and must be longer than 4 characters";
    }
    if (!rating) {
      errors.reviewText =
        "Rating is required and must be longer than 4 characters";
    }

    setValidationState(errors);
    console.log(userData);
    if (Object.keys(errors).length === 0) {
      const create = async () => {
        await axios
          .post(BACK_END_BASE_URL + REVIEW + ADD, {
            reviewText: formState.reviewText,
            rating: formState.rating,
            productId: item._id,
            userId: userData.id,
          })
          .then((response) => {
            if (response.data) {
              fetchSitter();
              alert("Създаден коментар");
            }
          })
          .catch((error) => {
            if (error) {
              alert("Грешни данни");
            }
          });
      };
      create();
      if (userData.id === "") {
        console.log("here userDAta");
        navigate("/login");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChange = (value, name) => {
    setFormState((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const fetchSitter = async () => {
    console.log(location.pathname);
    let currentLocation = location.pathname.split("/")[2];
    console.log(currentLocation);
    const { data } = await axios.get(
      BACK_END_BASE_URL + REVIEW + ALL + "/" + currentLocation
    );
    console.log(data);
    setReviews(data);
  };

  useEffect(() => {
    fetchSitter();
  }, []);

  return (
    <>
      <div className=" container d-flex justify-content-center align-items-center">
        <div className="container mx-5">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className=" d-flex justify-content-start align-items-center flex-column p-4">
              <div className="mb-1 w-100">
                <input
                  placeholder="Напиши ревю"
                  style={{ paddingBottom: "10rem" }}
                  type="text"
                  className={`form-control  align-top   ${
                    validationState.reviewText ? "is-invalid" : ""
                  }`}
                  id="reviewText"
                  name="reviewText"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <div>
                <StarPicker
                  onChange={onChange}
                  size={25}
                  halfStars
                  value={formState.rating}
                  name="rating"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-100 d-flex justify-content-center">
                <button
                  type="submit"
                  className="RegisterSitterBodyButton d-flex  mt-3 w-25 py-2  fw-bold justify-content-center align-items-center"
                >
                  Напиши
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex justify-content-between w-75 ps-2 fs-4 fw-bolder ">
          <div className="d-flex">
            <div className="">
              {reviews && reviews.length ? reviews.length : "0"}
            </div>
            <div className="ms-2">Мнения</div>
          </div>
          <div className="d-flex">
            <div className="ms-2">
              {" "}
              <StarPicker size={25} halfStars value={item.rating} />
            </div>
            {/* TODO Да се добяват звезди */}
          </div>
        </div>
      </div>
      {reviews &&
        reviews.map((e) => {
          return <Review info={e} />;
        })}
      <Pagination />
    </>
  );
};

export default SitterWriteReview;
