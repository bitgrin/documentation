/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import withBaseUrl from "@docusaurus/withBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Contribute easily!</>,
    imageUrl: "img/undraw_drag_5i9w.svg",
    description: (
      <>
        Bitgrin is using Docusaurus was designed from the ground up to be easily
        installed and used to get your website up and running quickly.
      </>
    )
  },
  {
    title: <>Find everything that you need</>,
    imageUrl: "img/undraw_searching_p5ux.svg",
    description: (
      <>
        Extensive Bitgrin documents have everything that you possibly need, to
        develop on Bitgrin or use XBG. If its not here, you can add it easily
        you can check guides.
      </>
    )
  },
  {
    title: <>Everything open source</>,
    imageUrl: "img/undraw_version_control_9bpv.svg",
    description: (
      <>
        You can check the source of everything and improve anything, we have a
        big community eager to help you as well.
      </>
    )
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="All the Bitgrin documentation in one place <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={withBaseUrl("docs/introduction")}
            >
              Check it out
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames("col col--4", styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
