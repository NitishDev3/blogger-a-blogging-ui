import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/store";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
