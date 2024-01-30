import { useState } from 'react';

const About = () => {
  // State to manage the showMore flag
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the showMore state
  const onSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  return { showMore, onSeeMoreClick };
}

export default About;
