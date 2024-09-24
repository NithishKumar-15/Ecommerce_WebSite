import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './Page'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <Fragment>
   <Page></Page>
  </Fragment>
)
