import React from 'react'

const PackageList = ({ title, children }) => {
  return (
    <div className="tab">
      <h2>{title}</h2>
      <div className="tab-content">{children}</div>
    </div>
  )
}

export default PackageList
