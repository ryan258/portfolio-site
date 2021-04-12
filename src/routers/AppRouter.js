import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'

import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import PortfolioNode from '../components/PortfolioNode'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio/" exact component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioNode} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
