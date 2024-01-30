import { useState } from 'react';

const About = () => {
  // State to manage the showMore flag
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the showMore state
  const onSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  // Only export the functions directly
  return { showMore, onSeeMoreClick };
}

export default About;