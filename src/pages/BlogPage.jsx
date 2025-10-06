import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import BlogPostCard from '../components/BlogPostCard';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import SeoHead from '../components/SeoHead';


const BlogPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.ndonvito.it/backend/wp-json/wp/v2/posts?_embed');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <SeoHead
        title={t('blog:blogPage.metaTitle')}
        description={t('blog:blogPage.metaDescription')}
        keywords={t('blog:blogPage.metaKeywords')}
        ogTitle={t('blog:blogPage.ogTitle')}
        ogDescription={t('blog:blogPage.ogDescription')}
        ogUrl="https://www.ndonvito.it/blog"
      />
      <section className="blog-posts-section">
        <div className="container">
          <h1>{t('blog:blogPage.title')}</h1>
          <p className="blog-page-description">{t('blog:blogPage.description')}</p>
          <div className="blog-posts-grid">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
