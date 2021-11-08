import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p><span>Team Cersei</span> &copy; {year}</p>
        </div>
    )
}

export default Footer
