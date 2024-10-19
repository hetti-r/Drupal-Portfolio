import React from 'react'

const Footer = () => {
    return (
        <footer className="py-4 mt-auto footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <small>&copy; {new Date().getFullYear()} Hetti Rönnemaa</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
