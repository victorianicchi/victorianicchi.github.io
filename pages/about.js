// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout pageTitle="About">
      <div style={{ padding: '2rem' }}>
        <h1>About Me</h1>
        <p>
          I’m Victoria Nicchi, an architect from Buenos Aires focusing on modern, 
          minimal design. My passion is creating spaces that marry comfort and elegance...
        </p>
        {/* Insert an elegant image or a timeline of experience */}
        <img
          src="/images/about_picture.jpg"
          alt="About"
          style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
        />
      </div>
    </Layout>
  );
}
