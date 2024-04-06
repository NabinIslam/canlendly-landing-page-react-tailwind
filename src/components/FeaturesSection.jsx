import React from 'react';
import Button from '../ui/Button';
import SectionTitle from './SectionTitle';
import OutlineButton from '../ui/OutlineButton';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import FeatureThree from './FeatureThree';
import FeatureFour from './FeatureFour';

const FeaturesSection = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle
          shortTitle="CALENDLY FEATURES"
          mainTitle="Favorite Security Features"
          description="Here's a closer look at some of the security features IT admins enjoy
        with Calendly"
        />
        <div className="flex justify-center items-center gap-5">
          <Button>Start for free</Button>
          <OutlineButton>Learn More</OutlineButton>
        </div>
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
      </div>
    </section>
  );
};

export default FeaturesSection;
