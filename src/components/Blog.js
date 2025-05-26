import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaSearch, FaChevronRight } from 'react-icons/fa';

const BlogSection = styled.section`
  padding: 6rem 0;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BlogTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
`;

const BlogSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: #666;
  line-height: 1.6;
`;

const BlogContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 3rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogPosts = styled.div``;

const BlogPost = styled(motion.article)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PostImage = styled.div`
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const PostContent = styled.div`
  padding: 2rem;
`;

const PostTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  a {
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const PostDate = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }
`;

const PostCategory = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }
`;

const PostExcerpt = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 600;
  transition: var(--transition);
  
  svg {
    margin-left: 0.5rem;
    transition: var(--transition);
  }
  
  &:hover {
    color: #0288d1;
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const Sidebar = styled.aside``;

const SidebarWidget = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const WidgetTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 10px;
  }
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  padding-right: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(79, 195, 247, 0.2);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background: none;
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const CategoryList = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const CategoryCount = styled.span`
  background-color: #f5f5f5;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const RecentPostList = styled.ul`
  list-style: none;
`;

const RecentPostItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const RecentPostImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const RecentPostContent = styled.div``;

const RecentPostTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-color);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const RecentPostDate = styled.span`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.3rem;
    font-size: 0.7rem;
    color: var(--primary-color);
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.a`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #666;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PageNumber = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 0.3rem;
  border-radius: 5px;
  background-color: ${props => props.active ? 'var(--primary-color)' : '#fff'};
  color: ${props => props.active ? '#fff' : '#666'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
  }
`;

// Sample blog data
const blogPostsData = [
  {
    id: 1,
    title: "The Art of Floating: Defying Gravity Through Ear Power",
    excerpt: "Many have asked how I achieve my signature floating ability. In this post, I reveal the secrets of ear-propelled levitation and how it connects to higher states of consciousness.",
    date: "May 15, 2023",
    category: "Techniques",
    image: "https://i.imgur.com/placeholder1.jpg"
  },
  {
    id: 2,
    title: "Understanding 'The Dumb': A Philosophical Exploration",
    excerpt: "What does it mean to 'have the dumb'? This deep dive into my most famous quote examines the epistemological implications of recognizing one's own intellectual limitations.",
    date: "April 3, 2023",
    category: "Philosophy",
    image: "https://i.imgur.com/placeholder2.jpg"
  },
  {
    id: 3,
    title: "Cloud Cuisine: My Favorite Sky-High Snacks",
    excerpt: "Living among the clouds provides unique culinary opportunities. From condensation cookies to cirrus crisps, I share my favorite recipes for atmospheric dining.",
    date: "March 22, 2023",
    category: "Lifestyle",
    image: "https://i.imgur.com/placeholder3.jpg"
  },
  {
    id: 4,
    title: "Barking at the Cosmos: Communication Beyond Words",
    excerpt: "Human language is limited, but cosmic barking transcends conventional communication. Learn how to express complex ideas through strategic woofs and strategic silence.",
    date: "February 14, 2023",
    category: "Communication",
    image: "https://i.imgur.com/placeholder4.jpg"
  }
];

const categories = [
  { name: "Philosophy", count: 7 },
  { name: "Techniques", count: 5 },
  { name: "Lifestyle", count: 4 },
  { name: "Communication", count: 3 },
  { name: "Cosmic Events", count: 2 }
];

const tags = [
  "Wisdom", "Floating", "Ears", "Cosmic", "Barking", "Meditation", 
  "Dreams", "Enlightenment", "Treats", "Clouds", "Zen", "Memes"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log(`Searching for: ${searchTerm}`);
  };
  
  return (
    <BlogSection>
      <BlogContainer>
        <BlogTitle>
          Paws for <span>Thought</span>
        </BlogTitle>
        <BlogSubtitle>
          A blog of wisdom droppings and surreal experiences from the floating philosopher.
        </BlogSubtitle>
        
        <BlogContent>
          <BlogPosts>
            {blogPostsData.map((post) => (
              <BlogPost 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PostImage image={post.image} />
                <PostContent>
                  <PostTitle>
                    <a href={`#post-${post.id}`}>{post.title}</a>
                  </PostTitle>
                  <PostMeta>
                    <PostDate>
                      <FaCalendarAlt />
                      {post.date}
                    </PostDate>
                    <PostCategory>
                      <FaTag />
                      {post.category}
                    </PostCategory>
                  </PostMeta>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                  <ReadMoreLink href={`#post-${post.id}`}>
                    Read More <FaChevronRight />
                  </ReadMoreLink>
                </PostContent>
              </BlogPost>
            ))}
            
            <Pagination>
              <PageNumber href="#" active={true}>1</PageNumber>
              <PageNumber href="#">2</PageNumber>
              <PageNumber href="#">3</PageNumber>
              <PageNumber href="#">4</PageNumber>
            </Pagination>
          </BlogPosts>
          
          <Sidebar>
            <SidebarWidget>
              <WidgetTitle>Search</WidgetTitle>
              <SearchForm onSubmit={handleSearch}>
                <SearchInput 
                  type="text" 
                  placeholder="Search for wisdom..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton type="submit">
                  <FaSearch />
                </SearchButton>
              </SearchForm>
            </SidebarWidget>
            
            <SidebarWidget>
              <WidgetTitle>Categories</WidgetTitle>
              <CategoryList>
                {categories.map((category, index) => (
                  <CategoryItem key={index}>
                    <a href={`#category-${category.name.toLowerCase()}`}>
                      {category.name}
                      <CategoryCount>{category.count}</CategoryCount>
                    </a>
                  </CategoryItem>
                ))}
              </CategoryList>
            </SidebarWidget>
            
            <SidebarWidget>
              <WidgetTitle>Recent Posts</WidgetTitle>
              <RecentPostList>
                {blogPostsData.slice(0, 3).map((post) => (
                  <RecentPostItem key={post.id}>
                    <RecentPostImage image={post.image} />
                    <RecentPostContent>
                      <RecentPostTitle>
                        <a href={`#post-${post.id}`}>{post.title}</a>
                      </RecentPostTitle>
                      <RecentPostDate>
                        <FaCalendarAlt />
                        {post.date}
                      </RecentPostDate>
                    </RecentPostContent>
                  </RecentPostItem>
                ))}
              </RecentPostList>
            </SidebarWidget>
            
            <SidebarWidget>
              <WidgetTitle>Tags</WidgetTitle>
              <TagCloud>
                {tags.map((tag, index) => (
                  <Tag key={index} href={`#tag-${tag.toLowerCase()}`}>
                    {tag}
                  </Tag>
                ))}
              </TagCloud>
            </SidebarWidget>
          </Sidebar>
        </BlogContent>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;