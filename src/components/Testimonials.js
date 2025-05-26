import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialsTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const TestimonialsSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const FeaturedTestimonials = styled.div`
  position: relative;
  margin-bottom: 5rem;
`;

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
  
  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

const TestimonialSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 20px 20px 20px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`;

const TestimonialQuote = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-color);
  text-align: center;
  font-style: italic;
`;

const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #ffc107;
  font-size: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  text-align: center;
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const AuthorTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const SliderNavigation = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-color)' : '#e0e0e0'};
  margin: 0 5px;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#bdbdbd'};
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialGridCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const TestimonialGridQuote = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const TestimonialGridText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-style: italic;
`;

const TestimonialGridRating = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  color: #ffc107;
  font-size: 1.2rem;
`;

const TestimonialGridAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const SubmitSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  text-align: center;
`;

const SubmitContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SubmitTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const SubmitDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.6;
`;

const SubmitButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  
  &:hover {
    background-color: #0288d1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Sample testimonials data
const featuredTestimonialsData = [
  {
    id: 1,
    text: "He told me to sniff the wind, and now I understand the meaning of life. The Dog of Wisdom's guidance has completely transformed my perspective on existence.",
    rating: 5,
    author: "Luna the Pomeranian",
    title: "Enlightened Canine"
  },
  {
    id: 2,
    text: "Woof. Just woof. Thank you, wise one. No other words can express the profound impact of the wisdom I received during my dream visitation.",
    rating: 5,
    author: "Bark Zuckerberg",
    title: "Tech Entrepreneur & Seeker"
  },
  {
    id: 3,
    text: "After attending a Zen Barking Session, I finally understood what my tail was trying to tell me all these years. Life-changing doesn't begin to describe it.",
    rating: 4.5,
    author: "Sir Woofs-a-Lot",
    title: "Nobility & Wisdom Student"
  }
];

const testimonialGridData = [
  {
    id: 4,
    text: "The meme counseling service helped me overcome my fear of vacuum cleaners. Now I see them as merely noisy wind machines.",
    rating: 5,
    author: "Fluffy McBarksalot",
    title: "Former Vacuum-Phobic"
  },
  {
    id: 5,
    text: "I was skeptical at first, but after receiving the 'You have the dumb' diagnosis, everything became clear. It was exactly what I needed to hear.",
    rating: 4.5,
    author: "Samantha Whiskers",
    title: "Cat Convert"
  },
  {
    id: 6,
    text: "The Dog of Wisdom appeared in my dream exactly as promised. We floated through the cosmos while discussing the philosophical implications of chasing one's tail.",
    rating: 5,
    author: "Max Power",
    title: "Dream Explorer"
  },
  {
    id: 7,
    text: "My human was confused by my behavior until we consulted with the Dog of Wisdom. Now they understand that my 3 AM zoomies are actually spiritual journeys.",
    rating: 4,
    author: "Midnight Runner",
    title: "Nocturnal Philosopher"
  },
  {
    id: 8,
    text: "The wisdom dispensed during our session was so profound that I had to lie down for three days just to process it all. Worth every treat I paid.",
    rating: 5,
    author: "Biscuit Seeker",
    title: "Professional Napper"
  },
  {
    id: 9,
    text: "After years of chasing my tail, the Dog of Wisdom helped me realize I was actually pursuing my own potential. Deep stuff.",
    rating: 4.5,
    author: "Spinner McGee",
    title: "Self-Actualized Terrier"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredTestimonialsData.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredTestimonialsData.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    
    return stars;
  };
  
  return (
    <>
      <TestimonialsSection>
        <TestimonialsContainer>
          <TestimonialsTitle>
            Wisdom <span>Testimonials</span>
          </TestimonialsTitle>
          <TestimonialsSubtitle>
            Hear from those who have been touched by the Dog of Wisdom's profound guidance and life-changing insights.
          </TestimonialsSubtitle>
          
          <FeaturedTestimonials>
            <TestimonialSlider>
              {featuredTestimonialsData.map((testimonial, index) => (
                <TestimonialSlide
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 100,
                    zIndex: currentSlide === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard>
                    <TestimonialQuote>
                      <FaQuoteLeft />
                    </TestimonialQuote>
                    <TestimonialText>{testimonial.text}</TestimonialText>
                    <TestimonialRating>
                      {renderStars(testimonial.rating)}
                    </TestimonialRating>
                    <TestimonialAuthor>
                      <AuthorName>{testimonial.author}</AuthorName>
                      <AuthorTitle>{testimonial.title}</AuthorTitle>
                    </TestimonialAuthor>
                  </TestimonialCard>
                </TestimonialSlide>
              ))}
            </TestimonialSlider>
            
            <SliderButton className="prev" onClick={prevSlide}>
              <FaChevronLeft />
            </SliderButton>
            
            <SliderButton className="next" onClick={nextSlide}>
              <FaChevronRight />
            </SliderButton>
            
            <SliderNavigation>
              {featuredTestimonialsData.map((_, index) => (
                <SliderDot 
                  key={index} 
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </SliderNavigation>
          </FeaturedTestimonials>
          
          <TestimonialGrid>
            {testimonialGridData.map((testimonial) => (
              <TestimonialGridCard
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TestimonialGridQuote>
                  <FaQuoteLeft />
                </TestimonialGridQuote>
                <TestimonialGridText>{testimonial.text}</TestimonialGridText>
                <TestimonialGridRating>
                  {renderStars(testimonial.rating)}
                </TestimonialGridRating>
                <TestimonialGridAuthor>
                  <AuthorImage />
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </TestimonialGridAuthor>
              </TestimonialGridCard>
            ))}
          </TestimonialGrid>
        </TestimonialsContainer>
      </TestimonialsSection>
      
      <SubmitSection>
        <SubmitContainer>
          <SubmitTitle>
            Share Your <span>Experience</span>
          </SubmitTitle>
          <SubmitDescription>
            Has the Dog of Wisdom changed your life? Helped you see beyond the veil of ordinary canine existence? Share your testimonial and join the growing community of enlightened beings.
          </SubmitDescription>
          <SubmitButton href="/contact">Submit Your Testimonial</SubmitButton>
        </SubmitContainer>
      </SubmitSection>
    </>
  );
};

export default Testimonials;