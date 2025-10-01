const Docker = require('dockernode');
const fs     = require('fs');
const path   = require('path');
const docker = new Docker({socketPath:"/var/run/docker.sock"});

async function runCode(language,code) {
    const tempDir = path.resolve('./sandbox');
}