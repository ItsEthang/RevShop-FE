import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routing/routes.tsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const queryClient = new QueryClient();

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme grayColor="slate" scaling="105%" accentColor="indigo">
        <AuthProvider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
        <ReactQueryDevtools />
      </Theme>
    </QueryClientProvider>
  </StrictMode>
);
