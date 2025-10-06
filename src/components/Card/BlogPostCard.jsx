import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogPostCard.css';

const BlogPostCard = ({ post }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const getFeaturedImage = () => {
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  const getPostTitle = () => {
    if (post.translations && post.translations[currentLang] && post.translations[currentLang].title) {
      return post.translations[currentLang].title;
    }
    return post.title.rendered;
  };

  const getPostExcerpt = () => {
    if (post.translations && post.translations[currentLang] && post.translations[currentLang].excerpt) {
      return post.translations[currentLang].excerpt;
    }
    return post.excerpt.rendered;
  };

  const featuredImage = getFeaturedImage();
  const title = getPostTitle();
  const excerpt = getPostExcerpt();

  return (
    <div className="blog-post-card">
      {featuredImage && (
        <div className="blog-post-card-image">
          <img src={featuredImage} alt={title} />
        </div>
      )}
      <div className="blog-post-card-content">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link to={`/blog/${post.slug}`} className="read-more-button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
