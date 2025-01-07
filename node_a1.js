const fs = require('fs');

// 1.Creating a Space project in node 
 fs.mkdirSync("Space_Project");



//2. Data to write into the file(Asynchronously)
const data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft";
fs.writeFile('log.txt', data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully!');
});

//2. Data to write into the file (Sychronously)
const data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft";
fs.writeFileSync('log.txt', data);
console.log('File created successfully!');


//3.Replace the line with "ISRO has started working on Gaganyaan."

let newData = "ISRO has started working on Gaganyaan";
fs.writeFile('log.txt', newData, (err) => {
    if (err) {
        throw err;
    }
    console.log('Content replaced successfully in log.txt');
});

//Synchronously
const newData = "ISRO has started working on Gaganyaan";
fs.writeFileSync('log.txt', newData);
console.log('Content replaced successfully in log.txt');

//4.Add a newline 
let newLine = " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
output_path = "log.txt";
fs.appendFile('log.txt',newLine,(err)=>{
    if(err)
        throw err;
    console.log(`Succesfully Done ${output_path}`)
});

//Synchronous
const fs = require('fs');

let newLine = " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
let output_path = "log.txt";
fs.appendFileSync(output_path, newLine);
console.log(`Successfully Done ${output_path}`);



//5.Rename the log.txt to update.txt
fs.rename("log.txt","update.txt",(err)=>{
    if(err)
        throw err
    console.log("Successfully changed the .txt file !!");
})

//Synchronous 
try {
    fs.renameSync("log.txt", "update.txt");
    console.log("Successfully changed the .txt file !!");
} catch (err) {
    console.error("Error renaming the file:", err);
}

//6.Read the update.txt file
fs.readFile('update.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('Content of update.txt:', data);

    console.log("We are excited");
});

//Synchronous 
try {
    const data = fs.readFileSync('update.txt', 'utf-8');
    console.log('Content of update.txt:', data);
    console.log("We are excited");
} catch (err) {
    console.error('Error reading the file:', err);
}


//7.Delete update.txt
fs.unlink("update.txt",(err)=>{
    if(err){
        console.error("Error deleting th file",err);
        return;
    }
    console.log("file update.txt deleted succesfully");

})

//Synchronously 
try {
    fs.unlinkSync('update.txt');
    console.log('file update.txt deleted successfully');
} catch (err) {
    console.error('Error deleting the file:', err);
}

//8 Deleting the Space_project
fs.rmdir('Space_Project', (err) => {
    if (err) {
        console.error('Error deleting the Space_Project folder:', err);
        return;
    }
    console.log('Space_Project folder deleted successfully');
});

//Synchrously
try{
    fs.rmdirSync('Space_Project');
    console.log('Space_Project folder deleted successfully');
} catch (err) {
    console.error('Error deleting the Space_Project folder:', err);
}

