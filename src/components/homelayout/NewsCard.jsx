import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details, tags } = news;
  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="bg-base-100 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Header: Author & Share */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h3 className="font-semibold leading-tight">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button
          type="button"
          className="text-gray-500 hover:text-primary transition"
          title="Share this article">
          <FaShareAlt className="text-lg" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold leading-snug mb-3 hover:text-primary cursor-pointer">
          {title}
        </h2>

        {/* Image */}
        <div className="mb-4">
          <img
            src={image_url}
            alt={title}
            className="w-full h-56 object-cover rounded-md"
          />
        </div>

        {/* Details */}
        <p className="text-sm text-gray-700 mb-3">
          {details.slice(0, 180)}...
          <span className="text-primary font-medium cursor-pointer hover:underline ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-3"></div>

        {/* Footer: Rating & Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {"⭐".repeat(Math.min(rating.number, 5))}
            <span className="text-gray-700 ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
