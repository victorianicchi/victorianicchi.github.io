// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout pageTitle="About">
      <div className="info-wrapper" style={{ alignItems: 'flex-start' }}>
        {/* Smaller image */}
        <div className="info-image" style={{ maxWidth: '300px', marginRight: '2rem' }}>
          <img
            src="/images/about_picture.jpg"
            alt="About me"
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />
        </div>

        {/* Rewritten text */}
        <div className="info-text">
          <h2>About</h2>
          <p>
            Greetings! I’m Victoria Nicchi, an architectural student at the University of
            Buenos Aires, offering comprehensive architectural and design services. My practice
            includes meticulously developing plans and drawings, creating immersive 3D models,
            producing photorealistic visualizations, and guiding the design development process. 
            I leverage leading software—AutoCAD, Revit, SketchUp, Rhinoceros, Lumion, and Adobe 
            Suite—to craft refined solutions that fuse artistic expression with architectural rigor.
          </p>

          <p>
            Collaboration is central to my work, ensuring that every space resonates with 
            the individuality of those who inhabit it. My design philosophy centers on 
            reductivism and beautility, marrying simplicity with purposeful elegance. 
            I hold my clients’ needs at the heart of each project, transforming conceptual ideas 
            into built realities. Let’s craft a distinctive environment together!
          </p>
        </div>
      </div>
    </Layout>
  );
}
