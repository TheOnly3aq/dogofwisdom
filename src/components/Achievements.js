import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaCertificate } from 'react-icons/fa';

const AchievementsSection = styled.section`
  padding: 6rem 0;
`;

const AchievementsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AchievementsTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const AchievementsSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AchievementHeader = styled.div`
  background: linear-gradient(135deg, #29b6f6 0%, #4fc3f7 100%);
  padding: 2rem;
  color: #fff;
  text-align: center;
`;

const AchievementIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  color: var(--primary-color);
  font-size: 2.5rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const AchievementYear = styled.span`
  font-size: 1.1rem;
  opacity: 0.8;
`;

const AchievementContent = styled.div`
  padding: 2rem;
`;

const AchievementDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const AchievementDetails = styled.ul`
  list-style: none;
`;

const AchievementDetail = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailIcon = styled.span`
  color: var(--primary-color);
  margin-right: 10px;
  font-size: 1.2rem;
`;

const DetailText = styled.span`
  color: #666;
  line-height: 1.6;
`;

const HighlightsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
`;

const HighlightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HighlightsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const StatCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const StatValue = styled.h3`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const StatLabel = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const TestimonialsSection = styled.section`
  padding: 5rem 0;
`;

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0.2;
    font-family: Georgia, serif;
  }
`;

const TestimonialText = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
  padding-left: 1rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin-right: 1rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  color: var(--text-color);
  margin-bottom: 0.2rem;
`;

const AuthorTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Achievements = () => {
  return (
    <>
      <AchievementsSection>
        <AchievementsContainer>
          <AchievementsTitle>
            Cosmic <span>Achievements</span>
          </AchievementsTitle>
          <AchievementsSubtitle>
            From "Most Enlightened Dog" to "Meme of the Year," discover the accolades earned through cosmic wisdom.
          </AchievementsSubtitle>
          
          <AchievementsGrid>
            <AchievementCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AchievementHeader>
                <AchievementIcon>
                  <FaTrophy />
                </AchievementIcon>
                <AchievementTitle>Most Enlightened Dog on the Internet</AchievementTitle>
                <AchievementYear>2018, 2019, 2020</AchievementYear>
              </AchievementHeader>
              <AchievementContent>
                <AchievementDescription>
                  Awarded by the International Meme Academy for consistently providing profound wisdom and philosophical insights to internet users worldwide.
                </AchievementDescription>
                <AchievementDetails>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Unanimous selection by the panel of judges</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>First three-time consecutive winner</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Recognized for "transcending typical meme limitations"</DetailText>
                  </AchievementDetail>
                </AchievementDetails>
              </AchievementContent>
            </AchievementCard>
            
            <AchievementCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AchievementHeader>
                <AchievementIcon>
                  <FaMedal />
                </AchievementIcon>
                <AchievementTitle>Meme of the Year</AchievementTitle>
                <AchievementYear>2015</AchievementYear>
              </AchievementHeader>
              <AchievementContent>
                <AchievementDescription>
                  Recognized by KnowYourMeme and the Webby Awards for creating one of the most impactful and enduring memes of the year, reaching millions worldwide.
                </AchievementDescription>
                <AchievementDetails>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Over 50 million views across platforms</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Spawned thousands of remixes and adaptations</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Entered mainstream cultural lexicon</DetailText>
                  </AchievementDetail>
                </AchievementDetails>
              </AchievementContent>
            </AchievementCard>
            
            <AchievementCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AchievementHeader>
                <AchievementIcon>
                  <FaStar />
                </AchievementIcon>
                <AchievementTitle>Best Floating Monologue</AchievementTitle>
                <AchievementYear>2017</AchievementYear>
              </AchievementHeader>
              <AchievementContent>
                <AchievementDescription>
                  Honorable mention at the Animation Festival of Surreal Characters for delivering profound wisdom while maintaining perfect mid-air suspension.
                </AchievementDescription>
                <AchievementDetails>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Praised for "defying both gravity and conventional wisdom"</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Special recognition for ear-propelled flight technique</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Commended for "philosophical depth delivered with canine simplicity"</DetailText>
                  </AchievementDetail>
                </AchievementDetails>
              </AchievementContent>
            </AchievementCard>
            
            <AchievementCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <AchievementHeader>
                <AchievementIcon>
                  <FaCertificate />
                </AchievementIcon>
                <AchievementTitle>Philosophical Breakthrough Award</AchievementTitle>
                <AchievementYear>2021</AchievementYear>
              </AchievementHeader>
              <AchievementContent>
                <AchievementDescription>
                  Granted by the Digital Philosophy Institute for introducing complex existential concepts to new audiences through accessible canine wisdom.
                </AchievementDescription>
                <AchievementDetails>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Recognized for making philosophy approachable</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Cited in 12 academic papers on internet culture</DetailText>
                  </AchievementDetail>
                  <AchievementDetail>
                    <DetailIcon>✓</DetailIcon>
                    <DetailText>Featured in "Digital Wisdom: New Frontiers" exhibition</DetailText>
                  </AchievementDetail>
                </AchievementDetails>
              </AchievementContent>
            </AchievementCard>
          </AchievementsGrid>
        </AchievementsContainer>
      </AchievementsSection>
      
      <HighlightsSection>
        <HighlightsContainer>
          <HighlightsTitle>
            Wisdom <span>Highlights</span>
          </HighlightsTitle>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <StatValue>50M+</StatValue>
              <StatLabel>Views Worldwide</StatLabel>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatValue>4</StatValue>
              <StatLabel>Major Awards</StatLabel>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StatValue>12K+</StatValue>
              <StatLabel>Fan Artworks</StatLabel>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <StatValue>∞</StatValue>
              <StatLabel>Wisdom Dispensed</StatLabel>
            </StatCard>
          </StatsGrid>
        </HighlightsContainer>
      </HighlightsSection>
      
      <TestimonialsSection>
        <TestimonialsContainer>
          <TestimonialsTitle>
            Award <span>Recognition</span>
          </TestimonialsTitle>
          
          <TestimonialCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "The Dog of Wisdom represents a rare convergence of humor and profound truth. Through seemingly simple phrases, this floating philosopher has managed to distill complex existential concepts into accessible wisdom that resonates across cultures and generations."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage />
              <AuthorInfo>
                <AuthorName>Dr. Emily Chen</AuthorName>
                <AuthorTitle>Chair, International Meme Academy</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "In our analysis of digital cultural phenomena, the Dog of Wisdom stands out for its remarkable staying power. Unlike typical memes with short lifespans, this character has maintained relevance by embodying timeless wisdom in a format that continues to feel fresh and meaningful."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage />
              <AuthorInfo>
                <AuthorName>Marcus Johnson</AuthorName>
                <AuthorTitle>Digital Culture Analyst, KnowYourMeme</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "What makes the Dog of Wisdom worthy of the Philosophical Breakthrough Award is not just its popularity, but how it has introduced philosophical thinking to audiences who might otherwise never engage with such concepts. It represents a new frontier in how wisdom can be transmitted in the digital age."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage />
              <AuthorInfo>
                <AuthorName>Professor Sofia Mendez</AuthorName>
                <AuthorTitle>Digital Philosophy Institute</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsContainer>
      </TestimonialsSection>
    </>
  );
};

export default Achievements;