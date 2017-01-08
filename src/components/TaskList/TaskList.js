import React from 'react'
import './TaskList.scss'

class TaskList extends React.Component {

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout__title">Fixed drawer layout demo</span>
          <div className="mdl-layout-spacer"></div>
          <i className="material-icons">settings</i>
        </div>
      </header>
    )
  }
}

export default TaskList
