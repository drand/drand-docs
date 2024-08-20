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
    image: require('@site/static/img/drand-logo.avif').default,
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
        source of randomness.
      </>
    ),
  },
  {
    title: 'League Members',
    image: require('@site/static/img/league-members.avif').default,
    description: (
      <>
        Active members of the League currently include Arbitrand, Automata Network,
        ChainSafe, cLabs, Cloudflare, DIA Association, Emerald Onion, 
        École Polytechnique Fédérale de Lausanne (EPFL), Ethereum Foundation, 
        Filecoin Foundation; Gelato Network; IPFS Force, KEN Labs, Kudelski Security,
        Protocol Labs, PTisp, Quantum Resistant Ledger (QRL) Foundation, Randamu,
        StorSwift, Tierion, University of Chile, UCL, Tangle Network, and Zama.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
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
