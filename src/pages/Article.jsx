import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import CtaWorkPage from '../components/CtaWorkPage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import SeoHead from '../components/SeoHead';


const BlogPostPage = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

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
      <section className="blog-post-detail-section">
        <div className="container">
          {featuredImage && (
            <div className="blog-post-featured-image">
              <img src={featuredImage} alt={getPostTitle()} />
            </div>
          )}
          <h1>{getPostTitle()}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: getPostContent() }} />
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
