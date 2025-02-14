import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'drand',
    image: require('@site/static/img/drand-logo.png').default,
    description: (
      <>
        drand is a distributed randomness beacon daemon written in the Go programming
        language. It generates collective, publicly verifiable, unbiased, and
        unpredictable random values at fixed intervals using advanced cryptographic
        techniques.
      </>
    ),
  },
  {
    title: 'League of Entropy',
    image: require('@site/static/img/league-of-entropy.avif').default,
    description: (
      <>
        The League of Entropy is a voluntary consortium providing a verifiable,
        decentralized randomness beacon for anyone who needs a publicly verifiable
        source of randomness. Checkout the current League Members on our website <a href="https://drand.love/loe/">drand.love</a>. 
      </>
    ),
  },
  {
    title: 'Timelock Encryption',
    image: require('@site/static/img/timelock.png').default,
    description: (
      <>
        Our Timelock scheme, tlock, is the first widely available and easy to use timed-release encryption scheme! 
        Use it to encrypt messages toward the future that anybody can decrypt when the time has come, even if you 
        or your services are off-line by then.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} style={{ width: 'auto', maxHeight: '250px'}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
