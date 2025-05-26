import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerySection = styled.section`
  padding: 6rem 0;
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GalleryTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const GallerySubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : '#fff'};
  color: ${props => props.active ? '#fff' : 'var(--text-color)'};
  border-radius: 30px;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 250px;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 1rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const GalleryItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const GalleryItemCategory = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 900px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ModalInfo = styled.div`
  padding: 1.5rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ModalDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ModalCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`;

// Sample gallery data
const galleryData = [
  {
    id: 1,
    title: 'Floating in the Clouds',
    category: 'Mid-Air Snapshots',
    image: 'https://i.imgur.com/placeholder1.jpg',
    description: 'The Dog of Wisdom floating majestically among the clouds, ears flapping gently in the cosmic breeze.'
  },
  {
    id: 2,
    title: 'Wisdom Dispensing Moment',
    category: 'Mid-Air Snapshots',
    image: 'https://i.imgur.com/placeholder2.jpg',
    description: 'Captured at the exact moment of dispensing profound wisdom to a seeker below.'
  },
  {
    id: 3,
    title: 'The Contemplative Tilt',
    category: 'Wise Head Tilts',
    image: 'https://i.imgur.com/placeholder3.jpg',
    description: 'A perfect 42-degree head tilt, known to be the optimal angle for cosmic contemplation.'
  },
  {
    id: 4,
    title: 'Sunrise Meditation',
    category: 'Wise Head Tilts',
    image: 'https://i.imgur.com/placeholder4.jpg',
    description: "Morning meditation ritual, absorbing the universe's energy as the sun rises."
  },
  {
    id: 5,
    title: 'Watercolor Wisdom',
    category: 'Fan Art',
    image: 'https://i.imgur.com/placeholder5.jpg',
    description: 'Beautiful watercolor rendition by artist Luna Paws, capturing the ethereal essence of the Dog of Wisdom.'
  },
  {
    id: 6,
    title: 'Digital Dreamscape',
    category: 'Fan Art',
    image: 'https://i.imgur.com/placeholder6.jpg',
    description: 'Digital artwork placing the Dog of Wisdom in a surreal dreamscape of floating islands and rainbow skies.'
  },
  {
    id: 7,
    title: 'Award Ceremony',
    category: 'Events',
    image: 'https://i.imgur.com/placeholder7.jpg',
    description: 'Receiving the "Most Enlightened Dog on the Internet" award at the annual Meme Gala.'
  },
  {
    id: 8,
    title: 'Zen Barking Session',
    category: 'Events',
    image: 'https://i.imgur.com/placeholder8.jpg',
    description: 'Leading a group zen barking session for aspiring wisdom dogs at the Cosmic Canine Convention.'
  },
  {
    id: 9,
    title: 'Cosmic Journey',
    category: 'Mid-Air Snapshots',
    image: 'https://i.imgur.com/placeholder9.jpg',
    description: 'Traversing the boundaries between dimensions, a rare glimpse of interdimensional travel.'
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };
  
  // Get unique categories
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];
  
  return (
    <GallerySection>
      <GalleryContainer>
        <GalleryTitle>
          Wisdom <span>Gallery</span>
        </GalleryTitle>
        <GallerySubtitle>
          Explore a collection of glorious mid-air snapshots, wise head tilts, and fan art from followers around the world.
        </GallerySubtitle>
        
        <FilterButtons>
          {categories.map((category, index) => (
            <FilterButton 
              key={index} 
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <GalleryGrid>
          {filteredImages.map((item) => (
            <GalleryItem 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(item)}
            >
              <GalleryImage src={item.image} alt={item.title} />
              <GalleryOverlay>
                <GalleryItemTitle>{item.title}</GalleryItemTitle>
                <GalleryItemCategory>{item.category}</GalleryItemCategory>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContainer>
      
      <AnimatePresence>
        {selectedImage && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalImage src={selectedImage.image} alt={selectedImage.title} />
              <ModalInfo>
                <ModalTitle>{selectedImage.title}</ModalTitle>
                <ModalDescription>{selectedImage.description}</ModalDescription>
                <ModalCategory>{selectedImage.category}</ModalCategory>
              </ModalInfo>
              
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
              
              <NavButton className="prev" onClick={() => navigateImage('prev')}>
                <FaChevronLeft />
              </NavButton>
              
              <NavButton className="next" onClick={() => navigateImage('next')}>
                <FaChevronRight />
              </NavButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </GallerySection>
  );
};

export default Gallery;