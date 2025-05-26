import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaw, FaCloud, FaStar, FaHeart } from "react-icons/fa";

const AboutSection = styled.section`
  padding: 6rem 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);

  span {
    color: var(--primary-color);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageWrapper = styled(motion.div)`
  position: relative;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 10px;
  background-image: url("https://media.discordapp.net/attachments/703867186913083532/1376625392638492795/raw.png?ex=683601ce&is=6834b04e&hm=a6f7a0fc40e34b749d0c62ce48f3d6308240dd05a023a1981a6e91926f5aecf2&=&format=webp&quality=lossless&width=637&height=956");
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ImageDecoration = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #29b6f6 0%, #4fc3f7 100%);
  z-index: -1;

  &.top-left {
    top: -20px;
    left: -20px;
  }

  &.bottom-right {
    bottom: -20px;
    right: -20px;
  }
`;

const AboutInfo = styled(motion.div)``;

const AboutSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const AboutDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-color);
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.5rem;
`;

const StatTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const StatValue = styled.p`
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
`;

const SkillsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);

  span {
    color: var(--primary-color);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SkillLevel = styled.div`
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(to right, #29b6f6, #4fc3f7);
  border-radius: 10px;
  width: ${(props) => props.level}%;
`;

const TimelineSection = styled.section`
  padding: 5rem 0;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TimelineTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);

  span {
    color: var(--primary-color);
  }
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: var(--primary-color);

    @media screen and (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 3rem;
  width: 50%;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
    margin-left: auto;
  }

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 4px solid var(--primary-color);
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(odd)::before {
    right: -10px;
  }

  &:nth-child(even)::before {
    left: -10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;

    &:nth-child(even) {
      padding-left: 60px;
    }

    &::before {
      left: 10px !important;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineTitle2 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const TimelineDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <AboutTitle>
            About <span>The Dog of Wisdom</span>
          </AboutTitle>
          <AboutContent>
            <AboutImageWrapper
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutImage />
              <ImageDecoration className="top-left" />
              <ImageDecoration className="bottom-right" />
            </AboutImageWrapper>
            <AboutInfo
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutSubtitle>The Mystical Floating Philosopher</AboutSubtitle>
              <AboutDescription>
                The Dog of Wisdom is a mystical being of unknown origin,
                believed to be a Cloud Retriever of timeless age. First
                appearing in the viral animation by Joe Gran in 2015, this
                floating canine philosopher has been dispensing wisdom and
                enlightenment across the internet ever since.
              </AboutDescription>
              <AboutDescription>
                With the ability to float effortlessly through the air using
                magical floppy ears, the Dog of Wisdom communicates profound
                truths in a unique language that somehow transcends normal
                understanding. His most famous quote, "You have... the dumb,"
                has become a cornerstone of internet philosophy.
              </AboutDescription>
              <AboutStats>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <StatIcon>
                    <FaPaw />
                  </StatIcon>
                  <StatTitle>Breed</StatTitle>
                  <StatValue>Cloud Retriever</StatValue>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <StatIcon>
                    <FaCloud />
                  </StatIcon>
                  <StatTitle>Habitat</StatTitle>
                  <StatValue>The Cosmos</StatValue>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <StatIcon>
                    <FaStar />
                  </StatIcon>
                  <StatTitle>Age</StatTitle>
                  <StatValue>Timeless</StatValue>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <StatIcon>
                    <FaHeart />
                  </StatIcon>
                  <StatTitle>Followers</StatTitle>
                  <StatValue>Millions</StatValue>
                </StatItem>
              </AboutStats>
            </AboutInfo>
          </AboutContent>
        </AboutContainer>
      </AboutSection>

      <SkillsSection>
        <SkillsContainer>
          <SkillsTitle>
            Mystical <span>Skills</span>
          </SkillsTitle>
          <SkillsGrid>
            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillTitle>Dispensing Wisdom</SkillTitle>
              <SkillDescription>
                The ability to impart profound cosmic knowledge in simple,
                sometimes perplexing phrases that resonate with truth seekers.
              </SkillDescription>
              <SkillLevel>
                <SkillProgress level={98} />
              </SkillLevel>
            </SkillCard>

            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SkillTitle>Magical Flight</SkillTitle>
              <SkillDescription>
                Using mystical floppy ears to achieve graceful levitation and
                navigate through both physical and metaphysical realms.
              </SkillDescription>
              <SkillLevel>
                <SkillProgress level={100} />
              </SkillLevel>
            </SkillCard>

            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <SkillTitle>Philosophical Barking</SkillTitle>
              <SkillDescription>
                Communicating complex ideas through a unique language that
                transcends normal understanding yet conveys universal truths.
              </SkillDescription>
              <SkillLevel>
                <SkillProgress level={95} />
              </SkillLevel>
            </SkillCard>

            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <SkillTitle>Zen Maintenance</SkillTitle>
              <SkillDescription>
                Maintaining perfect calm and balance in all situations,
                embodying the peaceful wisdom that comes from cosmic
                understanding.
              </SkillDescription>
              <SkillLevel>
                <SkillProgress level={99} />
              </SkillLevel>
            </SkillCard>
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>

      <TimelineSection>
        <TimelineContainer>
          <TimelineTitle>
            The <span>Journey</span>
          </TimelineTitle>
          <Timeline>
            <TimelineItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineDate>2015</TimelineDate>
                <TimelineTitle2>First Appearance</TimelineTitle2>
                <TimelineDescription>
                  The Dog of Wisdom makes his debut in Joe Gran's animated
                  short, instantly capturing the hearts and minds of internet
                  users worldwide.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineDate>2016</TimelineDate>
                <TimelineTitle2>Viral Phenomenon</TimelineTitle2>
                <TimelineDescription>
                  The animation spreads across platforms, becoming a cultural
                  touchstone and spawning countless memes, remixes, and fan art.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineDate>2018</TimelineDate>
                <TimelineTitle2>Wisdom Recognition</TimelineTitle2>
                <TimelineDescription>
                  Awarded "Most Enlightened Dog on the Internet" by the
                  International Meme Academy, cementing his status as a
                  philosophical icon.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineDate>2020</TimelineDate>
                <TimelineTitle2>Pandemic Comfort</TimelineTitle2>
                <TimelineDescription>
                  During global uncertainty, the Dog of Wisdom experiences a
                  resurgence as people seek comfort in his simple yet profound
                  messages.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineDate>Present</TimelineDate>
                <TimelineTitle2>Continuing Legacy</TimelineTitle2>
                <TimelineDescription>
                  The Dog of Wisdom continues to float through the digital
                  cosmos, offering guidance and occasionally reminding us when
                  we have "the dumb."
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TimelineContainer>
      </TimelineSection>
    </>
  );
};

export default About;
