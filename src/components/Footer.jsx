import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer className="text-center p-4 bg-gray-900 py-4 text-gray-500">
            <aside>
                <p> Copyright @{year.toString()}-Md Rumon Sarker.All right reserved  </p>
            </aside>
        </footer>
    );
};

export default Footer;