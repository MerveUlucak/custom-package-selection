'use client'
import React, { useState } from 'react'
import './packageItem.css'

const PackageItem = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [showTabs, setShowTabs] = useState(false)
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ]

  return (
    <div>
      <button onClick={() => setShowTabs(!showTabs)}>
        {showTabs ? 'Hide Tabs' : 'Show Tabs'}
      </button>
      {showTabs && (
        <div className="tabs">
          <div className="tab-list" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                role="tab"
                tabIndex={activeTab === index ? 0 : -1}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-content ${activeTab === index ? 'active' : ''}`}
              role="tabpanel"
            >
              {tab.content}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default PackageItem
