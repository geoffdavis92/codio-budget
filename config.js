module.exports = {
    express: {
        env: 'developement',
        port: 3000,
        routing: {
            pages: ['index','entry','log'],
            strict: true
        },
        views: {
            dir: './views',
            engine: 'jade'
        }
    }
}