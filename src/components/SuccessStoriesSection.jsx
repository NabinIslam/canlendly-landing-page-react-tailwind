import React from 'react';
import SectionTitle from './SectionTitle';
import SuccessStoryCard from './SuccessStoryCard';

const SuccessStoriesSection = () => {
  const successStories = [
    {
      id: 1,
      title: `Stack Overflow's streamlined admin forges relationships with new
    recruits`,
      subTitle: `CUSTOMER STORY`,
    },
    {
      id: 2,
      title: `University of Texas at Austin saves money through administrative scheduling`,
      subTitle: `CUSTOMER STORY`,
    },
    {
      id: 3,
      title: `More meetings, better prospects boost Bitly's conversions across the board`,
      subTitle: `CUSTOMER STORY`,
    },
  ];

  return (
    <section>
      <div className="container py-12">
        <SectionTitle
          shortTitle="SUCCESS STORIES"
          mainTitle="Do more of what you do best"
          description="Eliminate scheduling hassles and interruptions so your organization accomplishes more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {successStories.map(card => (
            <SuccessStoryCard key={card.id} cardData={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
