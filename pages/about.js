// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout pageTitle="Information" description="About Victoria Nicchi">
      <div className="info-wrapper">
        <div className="info-image">
          <img src="/images/about_picture.jpg" alt="About me" />
        </div>
        <div className="info-text">
          <h2>About</h2>
          <p>
            Hi! I'm Victoria Nicchi, an architect student from University of Buenos Aires.
            I offer architectural &amp; design services including architectural plans &amp; drawings,
            3D modeling &amp; visualization, and design development. I'm proficient in AutoCAD,
            Revit, SketchUp, Rhinoceros, Lumion, &amp; Adobe Suite...
          </p>
          <p>I collaborate with my clients to create perfectly humble homes.</p>
          <p>
            My design is purposeful, producing work allied with the notions of 
            reductivism and beautility...
            Let’s work together!
          </p>
        </div>
      </div>
    </Layout>
  );
}
