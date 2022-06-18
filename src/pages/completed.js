import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ThanksPage() {
  return (
    <>
      <Seo title="お支払い手続きが完了しました" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="completed" heading="お支払いが完了しました" />
      </Page>
    </>
  );
}
