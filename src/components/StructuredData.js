import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name || 'The Dog of Wisdom',
        url: data.url || 'https://dogofwisdom.com',
        description: data.description || 'The Dog of Wisdom - Official Portfolio',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${data.url || 'https://dogofwisdom.com'}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;
    
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || 'The Dog of Wisdom',
        url: data.url || 'https://dogofwisdom.com',
        logo: data.logo || 'https://dogofwisdom.com/logo512.png',
        sameAs: data.socialLinks || []
      };
      break;
    
    case 'blogPost':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        image: data.image || 'https://dogofwisdom.com/logo512.png',
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Person',
          name: data.author || 'The Dog of Wisdom'
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Dog of Wisdom',
          logo: {
            '@type': 'ImageObject',
            url: 'https://dogofwisdom.com/logo512.png'
          }
        },
        description: data.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url
        }
      };
      break;
    
    case 'faq':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map(q => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        }))
      };
      break;
    
    default:
      return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;