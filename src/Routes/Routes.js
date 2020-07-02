import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Main from '../Components/Main'
import Landing from '../Components/Landing'
import Grades from '../Components/Grades'
import Timetable from '../Components/Timetable'

const Routes=()=>(
    <Router>
        <Switch>
            <Route path='/' exact component={Landing}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/:id' exact component={Main}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/grades/:id' exact component={Grades}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/timetable/:id' exact component={Timetable}/>
        </Switch>
    </Router>
)

export default Routes