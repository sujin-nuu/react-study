import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "routes";

function App() {
  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
