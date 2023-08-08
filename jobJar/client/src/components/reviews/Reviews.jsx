import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";

const Reviews = ({ gigId }) => {
  const queryCLient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });
  //mutations
  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryCLient.invalidateQueries(['reviews'])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    console.log(desc, star);
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div>
      <div>
        {isLoading
          ? "Loading..."
          : error
          ? "something went wrong"
          : data.map((review) => <Review key={review._id} review={review} />)}
      </div>
      <div className="add text-center w-50 container">
        <div className="row">
          <h1 className="text-danger col m-2 p-2">Add a Review</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="write your opinion"
              className="col m-2 p-2"
            />

            <select name="" id="" className="col m-2 p-2">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <br />
            <button className="col m-2 p-2 btn btn-primary">Send</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
