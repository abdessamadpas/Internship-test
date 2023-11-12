import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from '../UI/card';
import { cards } from '../../data';

function Section3() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const containerRef = useRef(null);

  const showPreviousCard = () => {
    const container = containerRef.current;
    const cardWidth = container.clientWidth / cards.length;
    const newScrollLeft = container.scrollLeft - container.clientWidth;
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showNextCard = () => {
    const container = containerRef.current;
    const cardWidth = container.clientWidth / cards.length;
    const newScrollLeft = container.scrollLeft + container.clientWidth;
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const cardWidth = container.clientWidth / cards.length;
    const newCardIndex = Math.round(container.scrollLeft / cardWidth);
    setCurrentCardIndex(newCardIndex);
  };

  return (
    <div className='w-full px-1 relative sm:px-20 pb-3'>
      <div
        ref={containerRef}
        className='flex w-full overflow-x-auto pb-3'
        onScroll={handleScroll}
      >
        <div className='flex gap-3' style={{ width: `${cards.length * 100}%` }}>
          {cards.map((element, index) => (
            <Card
              key={index}
              defaultValue={element.defaultValue}
              body={element.bodyText}
              iconSrc={element.iconSrc}
              description={element.description}
              counterType={element.counterType}
            />
          ))}
        </div>
      </div>
      <div
        className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 bg-white rounded-md p-1 cursor-pointer'
        onClick={showPreviousCard}
      >
        <FiChevronLeft size={25} color='#B6B6B6' />
      </div>
      <div
        className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 bg-white rounded-md p-1 cursor-pointer'
        onClick={showNextCard}
      >
        <FiChevronRight size={25} color='#B6B6B6' />
      </div>
    </div>
  );
}

export default Section3;
