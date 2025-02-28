import React, { memo } from 'react'
import styles from './Header.module.css'
const Header = memo( function Header() {
  return (
    <div className={styles.container}>
        <img src='./logo.png' alt='logo' />
          <br/>
          <h3>Investment Calculator</h3>
    </div>
  )
})
export default Header
