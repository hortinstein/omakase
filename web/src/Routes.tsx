// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="CallBacks" titleTo="callBacks" buttonLabel="New CallBack" buttonTo="newCallBack">
        <Route path="/call-backs/new" page={CallBackNewCallBackPage} name="newCallBack" />
        <Route path="/call-backs/{id:Int}/edit" page={CallBackEditCallBackPage} name="editCallBack" />
        <Route path="/call-backs/{id:Int}" page={CallBackCallBackPage} name="callBack" />
        <Route path="/call-backs" page={CallBackCallBacksPage} name="callBacks" />
      </Set>
      <Route path="/callback" page={CallbackPage} name="callback" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
