import React from 'react'

function Footer() {
    const currentDate = new Date();
    return <footer>
        <p>Copyright © {currentDate.getFullYear()}</p>
    </footer>
}

export default Footer;