import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './styles.module.css'; // Optionally, add custom CSS

export default function Layout(props) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <OriginalLayout {...props}>
      {/* Add your banner image below the navbar */}
      <div>
        <img
          src="/img/banner.avif"  // Path to your banner image
          alt="Banner"
        />
      </div>
      {props.children}
    </OriginalLayout>
  );
}
