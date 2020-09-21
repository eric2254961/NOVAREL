import React from 'react'
import PropTypes from 'prop-types'

function CardCharts({title, subtitle, icon, message, id}){
  return (
    <div className="col-md-4">
      <div className="card card-chart">
        <div className="card-header card-header-danger">
          <div className="ct-chart" id={id}></div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-category">{subtitle}</p>
        </div>
        <div className="card-footer">
          <div className="stats">
            {icon} {message}
          </div>
        </div>
      </div>
    </div>
  )
}

CardCharts.defaultProps = {
  id: "completedTasksChart"
}

CardCharts.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  id: PropTypes.string
}

export default CardCharts;