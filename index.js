const server = require('./api/server');

const PORT = process.env.PORT || 8675;
server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`)
})