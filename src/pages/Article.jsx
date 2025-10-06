import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/SeoHead';
import Loader from '../components/Loader';
import ArticleSidebar from '../components/ArticleSidebar';


const Article = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [processedContent, setProcessedContent] = useState('');

  const getPostTitle = () => {
    if (post.translations && post.translations[i18n.language] && post.translations[i18n.language].title) {
      return post.translations[i18n.language].title;
    }
    return post.title.rendered;
  };

  const getPostContent = () => {
    if (post.translations && post.translations[i18n.language] && post.translations[i18n.language].content) {
      return post.translations[i18n.language].content;
    }
    return post.content.rendered;
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dev.ndonvito.it/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setError(new Error('Post not found'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setContentLoaded(true);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (contentLoaded) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 0); 
      return () => clearTimeout(timer);
    }
  }, [contentLoaded]);

  useEffect(() => {
    if (post) {
      const content = getPostContent();
      const headings = [];
      let modifiedContent = content;

      // Regex to find h1 to h6 tags, accounting for attributes and nested tags
      const headingRegex = /<(h[1-6])(?:\s+[^>]*)?>(.*?)<\/h[1-6]>/gs;
      let match;

      while ((match = headingRegex.exec(content)) !== null) {
        const [fullMatch, tag, textWithHtml] = match;
        const text = textWithHtml.replace(/<[^>]*>/g, ''); // Remove HTML tags
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|\s/g, '');
        headings.push({ level: parseInt(tag.substring(1)), text, id });
        modifiedContent = modifiedContent.replace(fullMatch, `<${tag} id="${id}">${textWithHtml}</${tag}>`);
      }
      setTableOfContents(headings);
      setProcessedContent(modifiedContent);
    }
  }, [post, i18n.language]);

  if (showLoader) {
    return <Loader />;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] ? post._embedded['wp:featuredmedia'][0].source_url : null;

  return (
    <>
      <SeoHead
        title={getPostTitle()}
        description={post.excerpt.rendered.replace(/<[^>]*>?/gm, '')}
        keywords={t('blog:blogPage.metaKeywords')}
        ogTitle={getPostTitle()}
        ogDescription={post.excerpt.rendered.replace(/<[^>]*>?/gm, '')}
        ogUrl={`https://www.ndonvito.it/blog/${post.slug}`}
      />
      <ArticleSidebar
        featuredImage={featuredImage}
        tableOfContents={tableOfContents}
        getPostTitle={getPostTitle}
      />
      <section className="blog-post-detail-section">
        <div className="container">
          <h1>{getPostTitle()}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: processedContent }} />
        </div>
      </section>
    </>
  );
};

export default Article;
