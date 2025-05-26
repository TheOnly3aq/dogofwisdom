import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaPaw,
  FaQuoteLeft,
  FaAward,
  FaCamera,
  FaBlog,
  FaBook,
  FaHandsHelping,
} from "react-icons/fa";
import SEO from "./SEO";
import StructuredData from "./StructuredData";

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(41, 182, 246, 0.8) 0%,
      rgba(79, 195, 247, 0.8) 100%
    );
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1470&auto=format&fit=crop");
    background-size: cover;
    background-position: center;
    z-index: -2;
    filter: blur(3px);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("https://m.media-amazon.com/images/M/MV5BNjBhZmViMjEtMDlkZS00M2U5LThlYWQtNWQ5NThhZTcwZTA2XkEyXkFqcGc@._V1_.jpg");
  background-size: cover;
  background-position: center;
  margin: 0 auto 2rem auto;
  border: 5px solid #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.div)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  &.primary {
    background-color: #fff;
    color: var(--primary-color);

    &:hover {
      background-color: #f5f5f5;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &.secondary {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: #fff;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);

  span {
    color: var(--primary-color);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  color: #fff;
  font-size: 1.8rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const QuoteSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  text-align: center;
`;

const QuoteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const QuoteText = styled(motion.p)`
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    top: -20px;
    left: -20px;
    color: var(--primary-color);
    opacity: 0.3;
  }

  &::after {
    content: '"';
    font-size: 4rem;
    position: absolute;
    bottom: -40px;
    right: -20px;
    color: var(--primary-color);
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const QuoteAuthor = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.div)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FAQSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FAQTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="The Dog of Wisdom - Home | Cosmic Canine Wisdom"
        description="The Dog of Wisdom - Official Portfolio showcasing wisdom, achievements, and services from the floating philosopher dog."
        keywords="dog of wisdom, wisdom dog, floating dog, dog philosophy, cosmic canine, wisdom quotes, dog meme"
        ogType="website"
      />
      <StructuredData
        type="website"
        data={{
          name: "The Dog of Wisdom - Official Portfolio",
          url: "https://dogofwisdom.com",
          description:
            "The Dog of Wisdom - Official Portfolio showcasing wisdom, achievements, and services from the floating philosopher dog.",
        }}
      />
      <StructuredData
        type="organization"
        data={{
          name: "The Dog of Wisdom",
          url: "https://dogofwisdom.com",
          logo: "https://dogofwisdom.com/logo512.png",
          socialLinks: [
            "https://twitter.com/dogofwisdom",
            "https://instagram.com/dogofwisdom",
            "https://facebook.com/dogofwisdom",
          ],
        }}
      />
      <StructuredData
        type="faq"
        data={{
          questions: [
            {
              question: "Who is the Dog of Wisdom?",
              answer:
                "The Dog of Wisdom is a floating philosopher dog known for dispensing cosmic wisdom and enlightenment to all who seek it.",
            },
            {
              question: "What services does the Dog of Wisdom offer?",
              answer:
                "The Dog of Wisdom offers wisdom quotes, zen barking sessions, meme counseling, dream appearances, and cosmic guidance.",
            },
            {
              question: "How can I contact the Dog of Wisdom?",
              answer:
                "You can contact the Dog of Wisdom through the contact form on this website or by seeking wisdom through meditation.",
            },
            {
              question: "What is the Dog of Wisdom's most famous quote?",
              answer:
                "The Dog of Wisdom's most famous quote is 'You have... the dumb.'",
            },
          ],
        }}
      />
      <HeroSection>
        <HeroContent>
          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Dog of Wisdom
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Floating through the cosmos, dispensing wisdom and enlightenment to
            all who seek it.
          </HeroSubtitle>
          <ButtonGroup>
            <Button
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
            >
              <FaPaw /> Learn More
            </Button>
            <Button
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              Seek Wisdom
            </Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContainer>
          <FeaturesTitle>
            Explore the <span>Wisdom</span>
          </FeaturesTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/quotes")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaQuoteLeft />
              </FeatureIcon>
              <FeatureTitle>Wisdom Quotes</FeatureTitle>
              <FeatureDescription>
                Explore the profound and sometimes perplexing quotes that have
                made the Dog of Wisdom an internet legend.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/achievements")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaAward />
              </FeatureIcon>
              <FeatureTitle>Achievements</FeatureTitle>
              <FeatureDescription>
                From "Most Enlightened Dog" to "Meme of the Year," discover the
                accolades earned through cosmic wisdom.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/gallery")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaCamera />
              </FeatureIcon>
              <FeatureTitle>Gallery</FeatureTitle>
              <FeatureDescription>
                View glorious mid-air snapshots, wise head tilts, and fan art
                from followers around the world.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/blog")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaBlog />
              </FeatureIcon>
              <FeatureTitle>Blog</FeatureTitle>
              <FeatureDescription>
                "Paws for Thought" – a blog of wisdom droppings and surreal
                experiences from the floating philosopher.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/services")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaHandsHelping />
              </FeatureIcon>
              <FeatureTitle>Services</FeatureTitle>
              <FeatureDescription>
                Discover the cosmic services offered by the Dog of Wisdom, from
                zen barking sessions to dream visitations.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
              onClick={() => navigate("/about")}
              style={{ cursor: "pointer" }}
            >
              <FeatureIcon>
                <FaBook />
              </FeatureIcon>
              <FeatureTitle>Origin Story</FeatureTitle>
              <FeatureDescription>
                Learn about the mystical origins of the Dog of Wisdom and how
                this floating philosopher came to enlighten the internet.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>

      <QuoteSection>
        <QuoteContainer>
          <QuoteText
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            You have... the dumb.
          </QuoteText>
          <QuoteAuthor
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            - The Dog of Wisdom
          </QuoteAuthor>
        </QuoteContainer>
      </QuoteSection>

      <CTASection>
        <CTAContainer>
          <CTATitle>Seek Cosmic Guidance</CTATitle>
          <CTADescription>
            Whether you need meme counseling, zen barking sessions, or dream
            appearances, the Dog of Wisdom is here to guide you.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Contact Now
          </CTAButton>
        </CTAContainer>
      </CTASection>

      <FAQSection>
        <FAQContainer>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQItem>
            <FAQQuestion>Who is the Dog of Wisdom?</FAQQuestion>
            <FAQAnswer>
              The Dog of Wisdom is a floating philosopher dog known for
              dispensing cosmic wisdom and enlightenment to all who seek it.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>
              What services does the Dog of Wisdom offer?
            </FAQQuestion>
            <FAQAnswer>
              The Dog of Wisdom offers wisdom quotes, zen barking sessions, meme
              counseling, dream appearances, and cosmic guidance.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>How can I contact the Dog of Wisdom?</FAQQuestion>
            <FAQAnswer>
              You can contact the Dog of Wisdom through the contact form on this
              website or by seeking wisdom through meditation.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>
              What is the Dog of Wisdom's most famous quote?
            </FAQQuestion>
            <FAQAnswer>
              The Dog of Wisdom's most famous quote is "You have... the dumb."
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
    </>
  );
};

export default Home;
