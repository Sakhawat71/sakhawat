/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                port: '',
                pathname: '/**'
            }
        ]
    }

}