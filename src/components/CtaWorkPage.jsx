import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function CtaWorkPage() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="cta-work-page-container">
      <h2>{t("home.cta_section_title")}</h2>
      <p>{t("home.cta_section_description")}</p>
      <HashLink smooth to={`/${lang}/work`} className="btn primary-btn">
        {t("home.cta_work_page")}
      </HashLink>
    </div>
  );
}

export default CtaWorkPage;