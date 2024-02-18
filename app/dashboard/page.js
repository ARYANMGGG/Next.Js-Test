
// pages/index.js
import Layout from '../components/Layout';

const WelcomePage = () => {
  return (
    <Layout title="Welcome to My Site">
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to My Site</h1>
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mi sed sapien vulputate, vitae feugiat
          felis condimentum. Integer auctor, purus sit amet varius cursus, libero sapien dictum justo, in laoreet elit
          odio quis est.
        </p>
        {/* بقیه محتوا */}
      </div>
    </Layout>
  );
};

export default WelcomePage;
