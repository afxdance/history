import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { App } from "src/components/App"
import { SemProvider } from "src/hooks/use-sem"
import "./index.css"
import "node_modules/bootstrap/dist/css/bootstrap.min.css"

// import registerServiceWorker from "./registerServiceWorker";
const appWithProviders = (
  <SemProvider>
    <App />
  </SemProvider>
)

ReactDOM.render(appWithProviders, document.getElementById(
  "root"
) as HTMLElement)
// registerServiceWorker();
