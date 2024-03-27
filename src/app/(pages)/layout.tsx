import { FC, ReactNode } from "react";
import { getLayoutPage } from "@/data/loaders";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroWrapper from "@/components/hero-wrapper";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = async (props) => {
  const { children } = props;

  const { header: { navbar, ctaLink } = [], footer = {} } =
    await getLayoutPage();

  return (
    <section className="max-w-qhd mx-auto">
      <HeroWrapper />
      <Header navbar={navbar} ctaLink={ctaLink} />
      {children}
      <Footer data={footer} />
    </section>
  );
};

export default MainLayout;
