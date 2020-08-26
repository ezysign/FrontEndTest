import React, { Suspense} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import List from './List/List'
function Home(props) {

  return (
    <Suspense>
        <div>
            <Switch>
              {
                <Redirect exact from="/" to="/home" />
              }
              <Route path="/home" component={List} />
            </Switch>
         
        </div>
    </Suspense>
  )
}

Home.propTypes = {

}

export default Home


