<<<<<<< HEAD
import "node_modules/bootstrap/dist/css/bootstrap.min.css"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "src/components/App"
import { SemProvider } from "src/hooks/use-sem"
import "./index.css"
=======
import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { App } from "src/components/App"
import { SemProvider } from "src/hooks/use-sem"
import "./index.css"
import "node_modules/bootstrap/dist/css/bootstrap.min.css"
>>>>>>> 9a3b777dd9ebb84f8c7b94a2dd537c7061b4c13d

// import registerServiceWorker from "./registerServiceWorker";
const appWithProviders = (
  <SemProvider>
    <App />
  </SemProvider>
)

ReactDOM.render(appWithProviders, document.getElementById(
  "root"
) as HTMLElement)
<<<<<<< HEAD
// registerServiceWorker();
=======
>>>>>>> 9a3b777dd9ebb84f8c7b94a2dd537c7061b4c13d
// registerServiceWorker();
