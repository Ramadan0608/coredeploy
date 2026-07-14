import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function DocsHome() {
  return (
    <Layout title="Documentation">
      <main style={{maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem'}}>
        <h1>Core Deploy Documentation</h1>

        <p>
          Practical documentation for Apple Enterprise, Apple Education,
          Jamf, Identity, Networking and Security.
        </p>

        <hr />

        <h2>🍎 Apple</h2>

        <ul>
          <li><Link to="/docs/apple-business-manager/01-introduction">Apple Business</Link></li>
          <li><Link to="/docs/apple-school-manager/01-what-is-apple-school-manager">Apple School Manager</Link></li>
        </ul>

        <h2>🖥 Jamf</h2>

        <ul>
          <li><Link to="/docs/jamf-pro/01-introduction">Jamf Pro</Link></li>
          <li><Link to="/docs/jamf-school/01-introduction">Jamf School</Link></li>
        </ul>

        <h2>🏢 Enterprise</h2>

        <p>Coming Soon</p>
      </main>
    </Layout>
  );
}