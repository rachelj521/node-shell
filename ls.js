    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();

        if (cmd === 'ls') {

            // console.log(cmd);
            const fs = require('fs')
            process.stdout.write('You typed: ' + cmd + '\n');
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                    throw err;
                } else {
                    process.stdout.write(files.join('\n'));
                    process.stdout.write('\nprompt > ');
                }
            });

        }

    });

