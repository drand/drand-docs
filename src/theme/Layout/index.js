import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './styles.module.css'; // Optionally, add custom CSS

export default function Layout(props) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <OriginalLayout {...props}>
      {/* Add your banner image below the navbar */}
      <div style={{width: "100%", maxHeight: '500px', overflow: "hidden"}}>
        <img
          src="/img/banner.avif"  // Path to your banner image
          alt="Banner"
          style={{width: "100%", height: '100%', objectFit: "cover", objectPosition: "center bottom"}}
        />
      </div>
      {props.children}
    </OriginalLayout>
  );
}
