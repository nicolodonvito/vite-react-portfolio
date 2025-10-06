import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoChevronForward } from "react-icons/io5";


const BlogPostCard = ({ post }) => {
  const { i18n, t } = useTranslation();
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
    <Link to={`/blog/${post.slug}`}>
      <div className="buttonCard">
        {featuredImage && (
          <div className="image">
            <img src={featuredImage} alt={title} />
          </div>
        )}
        <div className="icon">
          {/* Placeholder for icon if needed, or remove if not applicable to blog posts */}
          <span>{t('blog:blogPostCard.type')}</span> {/* Example: "Blog Post" */}
        </div>
        <div className="cardDescription">
          <div className="description">
            <div>
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
            <div className="tags">
              {/* Placeholder for tags if needed, or remove if not applicable to blog posts */}
            </div>
          </div>
          <IoChevronForward size={42} className="chevron" />
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
