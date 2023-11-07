import Layout from "../templates/layout";
import Show from "../organisms/show";
import Clear from "../organisms/clear"
import Increment from "../organisms/increment"
import Reverse from "../organisms/reverse"

function App() {
  return (
    <Layout>
      <Show />
      <Clear />
      <Increment />
      <Reverse />
    </Layout>
  );
}

export default App;
