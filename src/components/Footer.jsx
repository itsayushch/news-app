import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill='#001529' fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,165.3C672,181,768,235,864,245.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div style={{ fontFamily: `'Varela Round', sans-serif`,  margin: 0, background: '#001529', textAlign: 'center', marginTop: -4, paddingTop: 6, paddingBottom: 6, color: 'white' }}>
                    <span>&copy; {new Date().getFullYear()} <strong><a href="https://ayushkr.me" target='_blank' rel='noopener noreferrer'>Ayush CH</a></strong></span><br />
                    <br />
                    <span>
                        A simple news application.
                    </span>
                </div>
                <div style={{ height: '5em', background: '#001529', marginTop: 1.5 }} />
            </div >
        )
    }
}

export default Footer;