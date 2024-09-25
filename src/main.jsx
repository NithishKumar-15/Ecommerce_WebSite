import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './Page'
import "./index.css"
import { Provider } from 'react-redux'
import store from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
   <Page></Page>
   </Provider>
  </Fragment>
)
