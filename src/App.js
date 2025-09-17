// import { Route, Routes } from "react-router-dom";
// import { Home } from "./page/Home";
// import { Archive } from "./page/Archive";

// function App(){
//   return(
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/archive" element={<Archive />} />
//     </Routes>
//   )
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Archive } from "./page/Archive";
import { Bin } from "./page/Bin";
import { Important } from "./page/Important";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/bin" element={<Bin />} />
      <Route path="/important" element={<Important />} />
    </Routes>
  );
}

export default App;
