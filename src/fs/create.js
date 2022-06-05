import fs from 'fs';

export const create = async () => {
    // create.js - implement function that creates new file fresh.txt 
    // with content I am fresh and young inside of the files folder 
    // (if file already exists Error with message FS operation failed must be thrown)

    var filePath = './src/fs/files/fresh.txt';
    var content = 'I am fresh and young';

    try {
        if (fs.existsSync(filePath)) {
            throw new Error('FS operation failed')
        }
    } 
    catch(err) {
        console.error(err)
    }
    finally {
        try {
            await fs.promises.writeFile(filePath, content); // need to be in an async function
        } catch (error) {
            console.log(error)
        }
    }

};
