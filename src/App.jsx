import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Tooltip from "./components/Tooltip";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Tooltip>
        <p>new message for tooltip</p>
      </Tooltip>
      <Footer />
    </Layout>
  );
}

export default App;
