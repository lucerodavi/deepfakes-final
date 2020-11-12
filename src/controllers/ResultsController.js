import React from 'react'
import ResultsView from '../views/ResultsView'

export default (props) => (
  <ResultsView>
    <message>
    {props.location.state.text}
    </message>
  </ResultsView>
)
