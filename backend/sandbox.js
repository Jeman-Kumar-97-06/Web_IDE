const Docker = require('dockernode');
const fs     = require('fs');
const path   = require('path');
const docker = new Docker({socketPath:"/var/run/docker.sock"});

async function runCode(language,code) {
    //Maintain a temporary folder named : ./sandbox:
    const tempDir = path.resolve('./sandbox'); 
    if (!fs.existsSync(tempDir)){
        fs.mkdirSync(tempDir);
    }
    let fileName, image, cmd;
    if (language === 'js') {
        fileName = 'code.js';
        image = "nodejs-sandbox";
        cmd = ["node","/app/code.js"];
    } else if (language === "python") {
        fileName = 'code.py';
        image = ""
    }
}