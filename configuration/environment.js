const NODE_PORT = process.env.NODE_PORT ? process.env.NODE_PORT : '3000';
const EMIT_INTERVAL = process.env.EMIT_INTERVAL ? process.env.EMIT_INTERVAL : '1000';
const ENABLE_HTTPS = process.env.ENABLE_HTTPS ? process.env.ENABLE_HTTPS : true;

module.exports.NODE_PORT = NODE_PORT;
module.exports.EMIT_INTERVAL = EMIT_INTERVAL;
module.exports.ENABLE_HTTPS = ENABLE_HTTPS;