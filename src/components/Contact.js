import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaCloud, FaCheck } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const ContactSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const ContactInfoText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactInfoItems = styled.div`
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: #fff;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div``;

const ContactInfoLabel = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ContactInfoValue = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(79, 195, 247, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(79, 195, 247, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(79, 195, 247, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #0288d1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const FAQSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
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

const FAQItem = styled.div`
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    // Form would be submitted to backend here
    // For demo purposes, we'll just show success message
    setFormError('');
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      service: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      <ContactSection>
        <ContactContainer>
          <ContactTitle>
            Contact <span>The Wisdom</span>
          </ContactTitle>
          <ContactSubtitle>
            Reach out for cosmic guidance, collaborations, or to request the Dog of Wisdom's services.
          </ContactSubtitle>
          
          <ContactContent>
            <ContactInfo>
              <ContactInfoTitle>Get in Touch</ContactInfoTitle>
              <ContactInfoText>
                Whether you seek wisdom, have questions about the universe, or wish to request a dream appearance, the Dog of Wisdom welcomes your message.
              </ContactInfoText>
              
              <ContactInfoItems>
                <ContactInfoItem>
                  <ContactInfoIcon>
                    <FaEnvelope />
                  </ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoLabel>Email</ContactInfoLabel>
                    <ContactInfoValue>wisdom@dogofwisdom.com</ContactInfoValue>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <ContactInfoIcon>
                    <FaMapMarkerAlt />
                  </ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoLabel>Location</ContactInfoLabel>
                    <ContactInfoValue>Floating somewhere in the cosmos, usually above the third cloud from the left</ContactInfoValue>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <ContactInfoIcon>
                    <FaCloud />
                  </ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoLabel>Cosmic Hours</ContactInfoLabel>
                    <ContactInfoValue>Available during all phases of the moon and most sunny afternoons</ContactInfoValue>
                  </ContactInfoContent>
                </ContactInfoItem>
              </ContactInfoItems>
              
              <ContactInfoText>
                For urgent wisdom needs, simply look up at the sky and whisper "haba ba" three times. Results may vary based on cosmic alignment.
              </ContactInfoText>
            </ContactInfo>
            
            <ContactForm
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              {formSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheck /> Your message has been sent to the cosmos! The Dog of Wisdom will respond when the stars align.
                </SuccessMessage>
              )}
              
              {formError && (
                <SuccessMessage
                  style={{ backgroundColor: '#ffebee', color: '#c62828' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formError}
                </SuccessMessage>
              )}
              
              <FormGroup>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="service">Service Requested</FormLabel>
                <FormSelect 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="meme-counseling">Meme Counseling</option>
                  <option value="zen-barking">Zen Barking Sessions</option>
                  <option value="dream-appearance">Dream Appearance</option>
                  <option value="wisdom-consultation">Wisdom Consultation</option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactContent>
        </ContactContainer>
      </ContactSection>
      
      <FAQSection>
        <FAQContainer>
          <FAQTitle>
            Frequently Asked <span>Questions</span>
          </FAQTitle>
          
          <FAQList>
            <FAQItem>
              <FAQQuestion>How can I receive wisdom from the Dog of Wisdom?</FAQQuestion>
              <FAQAnswer>
                Wisdom can be received through various channels: this website, dream appearances, or by simply being open to cosmic messages. Fill out the contact form to request specific guidance.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>What is a Zen Barking Session?</FAQQuestion>
              <FAQAnswer>
                Zen Barking Sessions are meditative experiences where the Dog of Wisdom guides participants through a series of enlightening barks and howls that resonate with one's inner consciousness. Each session is unique and tailored to the individual's spiritual needs.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>How do Dream Appearances work?</FAQQuestion>
              <FAQAnswer>
                After requesting a Dream Appearance, the Dog of Wisdom will attempt to visit your dreamscape during your next REM cycle. Success rates vary based on your openness to cosmic influence and whether you've had cheese before bedtime.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Is the Dog of Wisdom available for events?</FAQQuestion>
              <FAQAnswer>
                Yes, the Dog of Wisdom can make appearances at philosophical gatherings, meme conventions, and existential crisis intervention workshops. Please note that physical manifestation is limited by dimensional constraints.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>What does "You have... the dumb" actually mean?</FAQQuestion>
              <FAQAnswer>
                This profound statement is intentionally open to interpretation. Many scholars believe it refers to the universal human condition of occasionally missing obvious truths. Others suggest it's a koan meant to trigger enlightenment through paradox.
              </FAQAnswer>
            </FAQItem>
          </FAQList>
        </FAQContainer>
      </FAQSection>
    </>
  );
};

export default Contact;