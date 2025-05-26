import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaSearch, FaCopy, FaTwitter, FaFacebook } from 'react-icons/fa';

const QuotesSection = styled.section`
  padding: 6rem 0;
`;

const QuotesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const QuotesTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const QuotesSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-left: 3rem;
  border-radius: 50px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: var(--primary-color);
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem 1rem 0.5rem;
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

const QuotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QuoteCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const QuoteIconLeft = styled(FaQuoteLeft)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--primary-color);
  opacity: 0.2;
  font-size: 1.5rem;
`;

const QuoteIconRight = styled(FaQuoteRight)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--primary-color);
  opacity: 0.2;
  font-size: 1.5rem;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-style: italic;
`;

const QuoteContext = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const QuoteCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  background-color: #e0f7fa;
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const QuoteActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

const QuoteAction = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  color: var(--primary-color);
  background-color: #e0f7fa;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

const FeaturedQuoteSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  text-align: center;
`;

const FeaturedQuoteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeaturedQuoteTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const FeaturedQuoteContent = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 2rem;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 6rem;
    color: var(--primary-color);
    opacity: 0.2;
    font-family: Georgia, serif;
  }
  
  &::after {
    content: '"';
    position: absolute;
    bottom: -20px;
    right: 20px;
    font-size: 6rem;
    color: var(--primary-color);
    opacity: 0.2;
    font-family: Georgia, serif;
  }
`;

const FeaturedQuoteText = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: var(--text-color);
  font-style: italic;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RandomQuoteButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #0288d1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CopyNotification = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--primary-color);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Sample quotes data
const quotesData = [
  {
    id: 1,
    text: "You have... the dumb.",
    context: "The most iconic line, delivered after a profound exchange with the small dog.",
    categories: ["Iconic", "Philosophical"]
  },
  {
    id: 2,
    text: "Haba ba ba... ba ba.",
    context: "An untranslatable cosmic truth that transcends human language.",
    categories: ["Cosmic", "Untranslatable"]
  },
  {
    id: 3,
    text: "I am the Dog of Wisdom.",
    context: "The self-introduction that established the character's mystical identity.",
    categories: ["Introduction", "Identity"]
  },
  {
    id: 4,
    text: "If your ball is too big for your mouth, it's not yours.",
    context: "A metaphor about accepting limitations and understanding one's true possessions.",
    categories: ["Advice", "Metaphorical"]
  },
  {
    id: 5,
    text: "Bah! Hababa.",
    context: "A dismissal of conventional thinking, encouraging free thought.",
    categories: ["Enlightenment", "Freedom"]
  },
  {
    id: 6,
    text: "Wisdom is stored in the ears.",
    context: "Explaining why his ears must flap to dispense wisdom to the world.",
    categories: ["Anatomical", "Educational"]
  },
  {
    id: 7,
    text: "The truth floats on clouds of uncertainty.",
    context: "Spoken during a particularly misty day, explaining why clarity sometimes requires distance.",
    categories: ["Philosophical", "Nature"]
  },
  {
    id: 8,
    text: "To bark at the moon is to speak to eternity.",
    context: "Advice given to a howling wolf who questioned its purpose.",
    categories: ["Purpose", "Cosmic"]
  },
  {
    id: 9,
    text: "The leash that binds is also the leash that guides.",
    context: "A reflection on how limitations can sometimes provide direction.",
    categories: ["Paradox", "Guidance"]
  },
  {
    id: 10,
    text: "Treats are temporary, wisdom is forever.",
    context: "Consoling a dog who had just dropped its biscuit into a puddle.",
    categories: ["Comfort", "Perspective"]
  },
  {
    id: 11,
    text: "The tail wags the dog only when the dog allows it.",
    context: "A lesson on maintaining control over one's emotions and reactions.",
    categories: ["Control", "Emotional"]
  },
  {
    id: 12,
    text: "Fetch not what you cannot return.",
    context: "Warning against pursuing goals beyond one's capacity to handle.",
    categories: ["Advice", "Caution"]
  }
];

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [featuredQuote, setFeaturedQuote] = useState(quotesData[0]);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  
  // Get all unique categories
  const allCategories = ['All', ...new Set(quotesData.flatMap(quote => quote.categories))];
  
  // Filter quotes based on search term and active category
  const filteredQuotes = quotesData.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          quote.context.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || quote.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setFeaturedQuote(quotesData[randomIndex]);
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };
  
  const shareOnTwitter = (text) => {
    window.open(`https://twitter.com/intent/tweet?text="${text}" - The Dog of Wisdom&url=${window.location.href}`, '_blank');
  };
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };
  
  return (
    <>
      <QuotesSection>
        <QuotesContainer>
          <QuotesTitle>
            Wisdom <span>Quotes</span>
          </QuotesTitle>
          <QuotesSubtitle>
            Explore the profound and sometimes perplexing quotes that have made
            the Dog of Wisdom an internet legend.
          </QuotesSubtitle>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search for wisdom..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>

          <FilterTabs>
            {allCategories.map((category, index) => (
              <FilterTab
                key={index}
                active={activeCategory === category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </FilterTab>
            ))}
          </FilterTabs>

          <QuotesGrid>
            <AnimatePresence>
              {filteredQuotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }}
                  layout
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                    },
                  }}
                >
                  <QuoteIconLeft />
                  <QuoteText>{quote.text}</QuoteText>
                  <QuoteContext>{quote.context}</QuoteContext>
                  <div>
                    {quote.categories.map((category, index) => (
                      <QuoteCategory key={index}>{category}</QuoteCategory>
                    ))}
                  </div>
                  <QuoteActions>
                    <QuoteAction onClick={() => copyToClipboard(quote.text)}>
                      <FaCopy />
                    </QuoteAction>
                    <QuoteAction onClick={() => shareOnTwitter(quote.text)}>
                      <FaTwitter />
                    </QuoteAction>
                    <QuoteAction onClick={shareOnFacebook}>
                      <FaFacebook />
                    </QuoteAction>
                  </QuoteActions>
                  <QuoteIconRight />
                </QuoteCard>
              ))}
            </AnimatePresence>
          </QuotesGrid>
        </QuotesContainer>
      </QuotesSection>

      <FeaturedQuoteSection>
        <FeaturedQuoteContainer>
          <FeaturedQuoteTitle>
            Random <span>Wisdom</span>
          </FeaturedQuoteTitle>
          <FeaturedQuoteContent
            key={featuredQuote.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedQuoteText>{featuredQuote.text}</FeaturedQuoteText>
          </FeaturedQuoteContent>
          <RandomQuoteButton onClick={getRandomQuote}>
            Get Random Wisdom
          </RandomQuoteButton>
        </FeaturedQuoteContainer>
      </FeaturedQuoteSection>

      <AnimatePresence>
        {showCopyNotification && (
          <CopyNotification
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            Quote copied to clipboard!
          </CopyNotification>
        )}
      </AnimatePresence>
    </>
  );
};

export default Quotes;