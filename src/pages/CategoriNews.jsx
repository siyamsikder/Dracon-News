import React from "react";
import { useLoaderData, useParams } from "react-router";

const Categorinews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id, data);
  return <div>Categorinews - {id}</div>;
};

export default Categorinews;
