import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

function SeoHead({ titleKey, descriptionKey, keywordsKey }) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { lang } = useParams();

  const currentUrl = window.location.origin + pathname;
  const canonicalUrl = currentUrl.replace(`/${lang}`, `/${i18n.language}`);

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
      {keywordsKey && <meta name="keywords" content={t(keywordsKey)} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl.replace(`/${lang}`, '/en')} />
      <link rel="alternate" hrefLang="it" href={currentUrl.replace(`/${lang}`, '/it')} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl.replace(`/${lang}`, '/en')} />
    </Helmet>
  );
}

export default SeoHead;
