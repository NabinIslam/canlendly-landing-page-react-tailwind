import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import SuccessStoryCardImg from '../assets/success_card_img.png';

const SuccessStoryCard = ({ cardData }) => {
  const { title, subTitle } = cardData;

  return (
    <div className="rounded-lg shadow-md">
      <div className="basis-[66%]">
        <img className="h-auto w-full" src={SuccessStoryCardImg} />
      </div>
      <div className="basis-[34%] p-6 flex flex-col justify-between items-start max-h-full">
        <h5 className="text-primary-color font-semibold">{subTitle}</h5>
        <h5 className="text-xl font-bold text-primary-text-color my-2">
          {title}
        </h5>
        <Link className="flex items-center text-primary-color hover:text-primary-hover-color font-bold mt-auto">
          <span>Read now</span> <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
