import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'The Dog of Wisdom', 
  description = 'The Dog of Wisdom - Official Portfolio showcasing wisdom, achievements, and services.',
  canonicalUrl,
  ogType = 'website',
  ogImage = '/logo512.png',
  keywords = 'dog of wisdom, wisdom, dog, portfolio, services, quotes'
}) => {
  const siteUrl = window.location.origin;
  const url = canonicalUrl || window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="The Dog of Wisdom" />
    </Helmet>
  );
};

export default SEO;