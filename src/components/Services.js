import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBrain,
  FaComment,
  FaMoon,
  FaGraduationCap,
  FaCheck,
  FaPaw,
  FaBook,
} from "react-icons/fa";

const ServicesSection = styled.section`
  padding: 6rem 0;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const ServicesSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const ServiceHeader = styled.div`
  background: linear-gradient(135deg, #29b6f6 0%, #4fc3f7 100%);
  padding: 2rem;
  color: #fff;
  text-align: center;
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  color: var(--primary-color);
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ServiceTagline = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const ServiceContent = styled.div`
  padding: 2rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.span`
  color: var(--primary-color);
  margin-right: 10px;
  font-size: 1.2rem;
`;

const FeatureText = styled.span`
  color: #666;
  line-height: 1.6;
`;

const ServicePrice = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PriceValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
`;

const PriceUnit = styled.span`
  font-size: 1rem;
  color: #666;
`;

const ServiceButton = styled(Link)`
  display: block;
  padding: 1rem;
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: #0288d1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProcessSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProcessTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #fff;
    z-index: 0;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    
    &::before {
      display: none;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 25%;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.6;
  max-width: 250px;
`;

const FAQSection = styled.section`
  padding: 5rem 0;
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
  
  span {
    color: var(--primary-color);
  }
`;

const FAQList = styled.div``;

const FAQItem = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;
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

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Services = () => {
  return (
    <>
      <ServicesSection>
        <ServicesContainer>
          <ServicesTitle>
            Wisdom <span>Services</span>
          </ServicesTitle>
          <ServicesSubtitle>
            Explore the range of enlightening services offered by the Dog of
            Wisdom to help you on your journey to cosmic understanding.
          </ServicesSubtitle>

          <ServicesGrid>
            <ServiceCard
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaBrain />
                </ServiceIcon>
                <ServiceTitle>Meme Counseling</ServiceTitle>
                <ServiceTagline>
                  Healing through humor and wisdom
                </ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  A specialized therapeutic approach that uses meme philosophy
                  to address existential crises, internet addiction, and general
                  confusion about life's purpose.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Personalized meme analysis</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Existential crisis intervention</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Wisdom-infused humor therapy</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Digital detox guidance</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>5</PriceValue>
                  <PriceUnit> treats / session</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Book Session</ServiceButton>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaComment />
                </ServiceIcon>
                <ServiceTitle>Zen Barking Sessions</ServiceTitle>
                <ServiceTagline>Transcend through sound</ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  Meditative experiences where the Dog of Wisdom guides
                  participants through a series of enlightening barks and howls
                  that resonate with one's inner consciousness.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Cosmic bark translations</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Harmonic howl therapy</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Vibrational healing</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Group or private sessions</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>8</PriceValue>
                  <PriceUnit> treats / hour</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Book Session</ServiceButton>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaMoon />
                </ServiceIcon>
                <ServiceTitle>Dream Appearances</ServiceTitle>
                <ServiceTagline>Wisdom while you sleep</ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  The Dog of Wisdom will visit your dreamscape during your next
                  REM cycle, offering guidance, floating demonstrations, and
                  personalized wisdom quotes.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Subconscious wisdom delivery</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Dream flight lessons</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Nightmare transformation</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Memory enhancement</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>12</PriceValue>
                  <PriceUnit> treats / dream</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Request Visit</ServiceButton>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.6,
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaGraduationCap />
                </ServiceIcon>
                <ServiceTitle>Wisdom Consultation</ServiceTitle>
                <ServiceTagline>Direct cosmic guidance</ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  One-on-one sessions with the Dog of Wisdom to address specific
                  questions about life, the universe, and everything in between.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Personalized wisdom quotes</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Cosmic perspective alignment</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Philosophical paradox resolution</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Follow-up ear flaps</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>15</PriceValue>
                  <PriceUnit> treats / consultation</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Book Consultation</ServiceButton>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.8,
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaPaw />
                </ServiceIcon>
                <ServiceTitle>Paw Reading Sessions</ServiceTitle>
                <ServiceTagline>Discover your destiny</ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  The Dog of Wisdom analyzes the unique patterns of your paw
                  prints to reveal insights about your past, present, and future
                  path to enlightenment.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Detailed paw analysis</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Future path prediction</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Karmic pattern identification</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Digital paw print certificate</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>10</PriceValue>
                  <PriceUnit> treats / reading</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Book Reading</ServiceButton>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 1.0,
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
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FaBook />
                </ServiceIcon>
                <ServiceTitle>Wisdom Library Access</ServiceTitle>
                <ServiceTagline>Ancient knowledge unlocked</ServiceTagline>
              </ServiceHeader>
              <ServiceContent>
                <ServiceDescription>
                  Gain exclusive access to the Dog of Wisdom's vast collection
                  of cosmic texts, interdimensional scrolls, and rare wisdom
                  artifacts from across the multiverse.
                </ServiceDescription>
                <ServiceFeatures>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>24/7 virtual library access</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Telepathic text translation</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Wisdom artifact viewing</FeatureText>
                  </ServiceFeature>
                  <ServiceFeature>
                    <FeatureIcon>
                      <FaCheck />
                    </FeatureIcon>
                    <FeatureText>Monthly new acquisitions</FeatureText>
                  </ServiceFeature>
                </ServiceFeatures>
                <ServicePrice>
                  <PriceValue>20</PriceValue>
                  <PriceUnit> treats / month</PriceUnit>
                </ServicePrice>
                <ServiceButton to="/contact">Subscribe</ServiceButton>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>

      <ProcessSection>
        <ProcessContainer>
          <ProcessTitle>
            How It <span>Works</span>
          </ProcessTitle>
          <ProcessSteps>
            <ProcessStep
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
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
            >
              <StepNumber>1</StepNumber>
              <StepTitle>Contact</StepTitle>
              <StepDescription>
                Reach out through the contact form to express your wisdom needs
                and preferred service.
              </StepDescription>
            </ProcessStep>

            <ProcessStep
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
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
            >
              <StepNumber>2</StepNumber>
              <StepTitle>Cosmic Alignment</StepTitle>
              <StepDescription>
                The Dog of Wisdom will assess your needs and align with your
                cosmic frequency.
              </StepDescription>
            </ProcessStep>

            <ProcessStep
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
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
            >
              <StepNumber>3</StepNumber>
              <StepTitle>Service Delivery</StepTitle>
              <StepDescription>
                Experience the selected wisdom service through the agreed-upon
                medium.
              </StepDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                },
              }}
            >
              <StepNumber>4</StepNumber>
              <StepTitle>Enlightenment</StepTitle>
              <StepDescription>
                Integrate the received wisdom into your life and experience
                transformation.
              </StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </ProcessContainer>
      </ProcessSection>

      <FAQSection>
        <FAQContainer>
          <FAQTitle>
            Service <span>FAQs</span>
          </FAQTitle>

          <FAQList>
            <FAQItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FAQQuestion>What forms of payment do you accept?</FAQQuestion>
              <FAQAnswer>
                We accept various forms of treats, cosmic energy transfers, good
                deeds, and in special cases, belly rubs. For human clients,
                conventional payment methods can be arranged.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FAQQuestion>
                How long does it take to see results from wisdom services?
              </FAQQuestion>
              <FAQAnswer>
                Results vary based on individual receptiveness to cosmic wisdom.
                Some experience immediate enlightenment, while others may
                require multiple sessions as their consciousness gradually
                expands. Remember, wisdom is not a destination but a journey.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FAQQuestion>
                Can cats benefit from Dog of Wisdom services?
              </FAQQuestion>
              <FAQAnswer>
                Absolutely! The Dog of Wisdom transcends species boundaries.
                Cats, while naturally enigmatic themselves, often find the
                perspective of canine wisdom particularly illuminating. We offer
                special feline-friendly sessions with reduced barking.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FAQQuestion>
                What if I don't remember my dream appearance?
              </FAQQuestion>
              <FAQAnswer>
                Dream appearances come with a satisfaction guarantee. If you
                don't recall your visitation, we'll schedule another attempt at
                no additional cost. We also offer pre-dream memory enhancement
                techniques and post-dream recall assistance.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FAQQuestion>
                Do you offer group rates for Zen Barking Sessions?
              </FAQQuestion>
              <FAQAnswer>
                Yes! Group rates are available for packs of 3 or more. Group
                sessions create a powerful harmonic resonance that can amplify
                the wisdom experience. Perfect for family units, friend circles,
                or corporate team building.
              </FAQAnswer>
            </FAQItem>
          </FAQList>
        </FAQContainer>
      </FAQSection>

      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Receive Cosmic Wisdom?</CTATitle>
          <CTADescription>
            Take the first step on your journey to enlightenment by booking a
            service with the Dog of Wisdom today.
          </CTADescription>
          <CTAButton to="/contact">Book Now</CTAButton>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default Services;