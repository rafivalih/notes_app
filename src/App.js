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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}

export default App;
