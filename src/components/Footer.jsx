import React from 'react'
import FooterStyle from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={FooterStyle.social_media_links}>
      <img src="/discord.png" alt="social media links" />
      <img src="/mail.png" alt="social media links" />
      <img src="/twitter.png" alt="social media links" />
      <img src="/instagram.png" alt="social media links" />
    </footer>
  )
}

export default Footer
