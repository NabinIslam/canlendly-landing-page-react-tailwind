import React from 'react';
import Hero from '../components/Hero';
import TaglineSection from '../components/TaglineSection';
import PercentageSection from '../components/PercentageSection';
import LeftTextSection from '../components/LeftTextSection';
import FeaturesSection from '../components/FeaturesSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import RightTextSection from '../components/RightTextSection';
// image imports
import RetainCrontrolImg from '../assets/retain_control_img.png';
import AutomatedITImg from '../assets/automated_ai_img.png';
import GetMoreValueImg from '../assets/more_values_img.png';
import SecureConnectionSection from '../components/SecureConnectionSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <TaglineSection />
      <PercentageSection />
      <LeftTextSection
        title="Retain control as your team scales"
        description="Working within one organizational account ensures you securely account for all active users as you scale. With Calendly, IT teams can maintain more oversight over account access and individual permissions, as well as audit activity at any time."
        imgUrl={RetainCrontrolImg}
      />
      <RightTextSection
        title="Automated IT workflows to accomplish more"
        description="Calendly's advanced security integrations overlay seamlessly with your corporate authentication policies and provisioning workflows. IT admins save time and reduce risk with auto-provisioning and deprovisioning via SCIM and Single Sign-On (SSO)."
        imgUrl={AutomatedITImg}
      />
      <LeftTextSection
        title="Get more value from your existing technology"
        description="Calendly securely integrates with the tools your teams rely on every day. This includes seamless OAuth through Google Calendar and Office365 as well as integrations across leading video conferencing tools (Zoom, Google Meet, Microsoft Teams, Webex), and more."
        imgUrl={GetMoreValueImg}
      />
      <FeaturesSection />
      <SuccessStoriesSection />
      <SecureConnectionSection />
    </main>
  );
};

export default Home;
