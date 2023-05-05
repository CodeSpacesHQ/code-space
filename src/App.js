import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        className="border-t w-10/12 sm:w-11/12 mx-auto my-4 mt-8 mb-12 sm:mb-20"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "#D1D1D2",
        }}
      ></div>
      <Footer />
    </>
  );
}
export default App;
