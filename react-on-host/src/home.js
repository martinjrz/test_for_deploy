import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Product from './product.js'
export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path='/product' component={Product}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
