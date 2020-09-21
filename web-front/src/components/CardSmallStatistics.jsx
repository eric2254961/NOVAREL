import React from 'react'
import PropTypes from 'prop-types'

function CardSmallStatistics({icon, title, value, svalue, complement, complement_icon}){
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-header card-header-warning card-header-icon">
          <div className="card-icon">
            {icon}
          </div>
          <p className="card-category">{title}</p>
          <h3 className="card-title">{value}
            <small>{svalue}</small>
          </h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            {complement_icon}
            <a href="#">{complement}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

CardSmallStatistics.defaultProps = {
  id: "completedTasksChart"
}

CardSmallStatistics.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  svalue: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  complement_icon: PropTypes.object.isRequired,
  id: PropTypes.string
}

export default CardSmallStatistics;