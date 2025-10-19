import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/homelayout/NewsCard";

const Categorinews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorinews, setCategorinews] = useState([]);
  //   console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCategorinews(data);
      return;
    } else if (id == "1") {
      const filteeNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategorinews(filteeNews);
    } else {
      const filteeNews = data.filter((news) => news.category_id == id);
      console.log(filteeNews);
      setCategorinews(filteeNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary"> {categorinews.length}</span>news
        Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categorinews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Categorinews;
