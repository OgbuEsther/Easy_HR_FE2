import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loading from "./utils/hoc/Loading";
import { RouterProvider } from "react-router-dom";
import { Elements } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux/es/exports";
import { Store } from "./components/global/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();
let persistor = persistStore(Store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Elements} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
