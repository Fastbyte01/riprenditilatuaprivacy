import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Facile',
    Svg: require('../../static/img/undraw_searching_p5ux.svg').default,
    description: (
      <>
        Scopri in modo semplice con le nostre guide come riprendere il controllo della tua privacy online.
      </>
    ),
  },
  {
    title: 'Protetto',
    Svg: require('../../static/img/undraw_privacy_protection_nlwy.svg').default,
    description: (
      <>
        Scopri come proteggere te stesso e i tuoi dati
        mentre sei online e vivi la tua vita digitale.
      </>
    ),
  },
  {
    title: 'Libero',
    Svg: require('../../static/img/undraw_things_to_say_ewwb.svg').default,
    description: (
      <>
        La privacy è un tuo diritto e nessuno dovrebbe accedere
        ai tuoi dati senza il tuo consenso.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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