// pages/obras.js
import Layout from '../components/Layout';

export default function Obras() {
  return (
    <Layout pageTitle="Obras" description="Projects by Victoria Nicchi">
      <div className="obra">
        <img src="/images/obra1.jpg" alt="Obra 1" />
      </div>
      <div className="obra">
        <img src="/images/obra2.jpg" alt="Obra 2" />
      </div>
      <div className="obra">
        <img src="/images/obra3.jpg" alt="Obra 3" />
      </div>
      <div className="obra">
        <img src="/images/obra4.jpg" alt="Obra 4" />
      </div>
      <div className="obra">
        <img src="/images/obra5.jpg" alt="Obra 5" />
      </div>
    </Layout>
  );
}
