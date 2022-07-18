import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Feature 1",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Feature 1 description</>,
  },
  {
    title: "Feature 2",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Feature 2 description</>,
  },
  {
    title: "Feature 3",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Feature 3 description</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
