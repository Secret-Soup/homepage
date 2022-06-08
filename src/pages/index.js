import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Secret Soup" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Stories" sources={['Blog']} />
        <AboutSection sectionId="about" heading="SecretSoupについて" />
        {/* <InterestsSection sectionId="details" heading="特徴" /> */}
        <ProjectsSection sectionId="features" heading="主な活動" />
        <ContactSection sectionId="github" heading="お問い合わせ" />
      </Page>
    </>
  );
}
