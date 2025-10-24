const Docker      = require('dockerode');
const fs          = require('fs');
const { Network } = require('inspector/promises');
const path        = require('path');
const docker      = new Docker({socketPath:"/var/run/docker.sock"});

async function runCode(language,code) {
    
    //Maintain a temporary folder named : ./sandbox:
    const tempDir = path.resolve('./sandbox'); 
    if (!fs.existsSync(tempDir)){
        fs.mkdirSync(tempDir);
    }
    let fileName, image, cmd;

    //Check the programming language of input:
    if (language === 'js') {
        fileName = 'code.js';
        image = "nodejs-sandbox";
        cmd = ["node","/app/code.js"];
    } else if (language === "python") {
        fileName = 'code.py';
        image = "python-sandbox";
        cmd = ["python3","/app/code.py"];
    } else if (language === "c") {
        fileName = 'code.c';
        image = 'c-sandbox';
        cmd = ['sh','-c','gcc code.c -o code.out && ./code.out'];
    } else {
        throw new Error('Unsupported Language!')
    }

    //see if the user
    //Save the cleint's code to file:
    fs.writeFileSync(path.join(tempDir,fileName),code);

    //Create Container : 
    const container = await docker.createContainer({
        Image : image,
        Cmd   : cmd,
        HostConfig : {
            Binds : [`${tempDir}:/app`],
            NetworkMode : "none",
            Memory : 128 * 1024 * 1024,//allowed max memory
            CpuShares : 128,
            SecurityOpt: [
                `seccomp=${path.resolve(__dirname, "seccomp-profile.json")}`//the seccomp file specifies permissions 
            ]
        },
    });

    //Start the container:
    await container.start();
    //Print the logs of the container:
    const logs = await container.logs({stdout:true,stderr:true,follow:true});
    await container.remove({force:true});
    console.log(logs.toString('utf-8'))
    return logs.toString("utf-8");
};

runCode('js','console.log("Jeman")')