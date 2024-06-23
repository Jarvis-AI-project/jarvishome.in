import React from 'react'
import DownloadStyle from '../styles/download.module.css'

function DownloadSection() {
  return (
    <div className={DownloadStyle.page7}>
      <div className={DownloadStyle.download_btn}>
        <button>
          <span>Download</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
        </button>
      </div>
      <div id="confetti-container"></div>
    </div>
  )
}

export default DownloadSection
