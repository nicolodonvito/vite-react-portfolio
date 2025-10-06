import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import BlogPostCard from './BlogPostCard';
import CtaWorkPage from './CtaWorkPage';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import SeoHead from './SeoHead';


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
        title={t('blogPage.metaTitle')}
        description={t('blogPage.metaDescription')}
        keywords={t('blogPage.metaKeywords')}
        ogTitle={t('blogPage.ogTitle')}
        ogDescription={t('blogPage.ogDescription')}
        ogUrl="https://www.ndonvito.it/blog"
      />
      <Helmet>
        <link rel="canonical" href="https://www.ndonvito.it/blog" />
      </Helmet>
      <Navbar />
      <NavbarMobile />
      <main>
        <section className="blog-posts-section">
          <div className="container">
            <h1>{t('blogPage.title')}</h1>
            <div className="blog-posts-grid">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        <CtaWorkPage />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
