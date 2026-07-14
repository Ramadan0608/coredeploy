import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Core Deploy"
      description="Independent Apple Enterprise & Education Documentation"
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>

            <span className={styles.badge}>
              Apple Enterprise & Education
            </span>

            <h1>Core Deploy</h1>

            <p>
              Independent documentation for Apple Business,
              Apple School, Jamf Pro, Jamf School,
              Apple Platform Deployment,
              Apple Device Management,
              Apple Classroom,
              Apple Configurator and enterprise Apple deployments.
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Documentation
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/blog">
                Blog
              </Link>
            </div>

          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>

            <div className={styles.card}>
              <h2>🍎 Apple Business</h2>
              <p>
                Apple Business, Managed Apple Accounts,
                device enrollment, platform deployment,
                identity integration and enterprise management.
              </p>
            </div>

            <div className={styles.card}>
              <h2>🎓 Apple Education</h2>
              <p>
                Apple School, Apple Classroom,
                Shared iPad, Managed Apple Accounts,
                education deployment and best practices.
              </p>
            </div>

            <div className={styles.card}>
              <h2>🖥 Jamf</h2>
              <p>
                Jamf Pro, Jamf School,
                compliance, scripting,
                security and Apple device management.
              </p>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}