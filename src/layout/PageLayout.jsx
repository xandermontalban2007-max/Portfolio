import BackgroundEffects from "../components/effects/BackgroundEffects";
import ScrollProgress from "../components/common/ScrollProgress";
import ScrollToTop from "../components/common/ScrollToTop";

export default function PageLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <BackgroundEffects />

      {children}
    </>
  );
}