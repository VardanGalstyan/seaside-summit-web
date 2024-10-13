import { getLayoutPage } from "@/data/loaders";
import { FC, ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroWrapper from "@/components/hero-wrapper";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = async (props) => {
  const { children } = props;

  const layoutData = await getLayoutPage();

  if (!layoutData) {
    return null;
  }

  const { footer = {}, header = {} } = layoutData;

  return (
    <section className="max-w-qhd mx-auto">
      {/* !todo move hero wrapper to page lavel */}
      <HeroWrapper />
      <Header navbar={header?.navbar} ctaLink={header.ctaLink} />
      {children}
      <Footer data={footer} />
    </section>
  );
};

export default MainLayout;
