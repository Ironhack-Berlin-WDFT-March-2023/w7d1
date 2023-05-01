import "./styles.css";
// We import other components to be able to use them inside of this component
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import CustomButton from "./components/CustomButton";
import Headline from "./components/Headline";
import Gallery from "./components/Gallery";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />

      <Button />
      <CustomButton btnText="REACT NATIVE" url="https://reactjs.org" />
      <CustomButton btnText="REDUX" url="https://redux.js.org/" />
      <MyButton/>

      <Gallery />
    </div>
  );
}

export default App;