const path = require("node:path");

//////////////////////////////////////////  Q1  //////////////////////////////////////////

// Write a function that logs the current file path and directory. (0.5 Grade)

function logCurrentFilePath() {
  console.log({ File: __filename });
  console.log({ Dir: __dirname });
}
logCurrentFilePath();

//////////////////////////////////////////  Q2  //////////////////////////////////////////

// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)

function getFileName(filePath) {
  return console.log({ fileName: path.basename(filePath) });
}
getFileName(__filename);

//////////////////////////////////////////  Q3  //////////////////////////////////////////

// 3. Write a function that builds a path from an object (0.5 Grade)

function buildPath(obj) {
  return console.log({ path: path.format(obj) });
}
const objPath = path.parse(__dirname); // return obj

buildPath(objPath);

//////////////////////////////////////////  Q4  //////////////////////////////////////////

// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)

function fileEx(file) {
  return console.log({ fileExtension: path.extname(file) });
}

fileEx(__filename);

//////////////////////////////////////////  Q5  //////////////////////////////////////////

// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)

function getName(parse) {
  const formatedPath = path.format(parse);
  return console.log({
    name: path.basename(formatedPath),
    ext: path.extname(formatedPath),
  });
}

getName(path.parse(__filename));

//////////////////////////////////////////  Q6  //////////////////////////////////////////

// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)

function checkAbsolute(gPath) {
  return console.log({ isAbsolute: path.isAbsolute(gPath) });
}

checkAbsolute(__filename);

//////////////////////////////////////////  Q7  //////////////////////////////////////////

// 7. Write a function that joins multiple segments (0.5 Grade)

function joinSegments(segments) {
  return console.log({ joinSegments: path.join(...segments) });
}
joinSegments(["main.js", "main.js", "main.js"]);

//////////////////////////////////////////  Q8  //////////////////////////////////////////

// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)

function resolvePath(segments) {
  return console.log({ resolvedPath: path.resolve(segments) });
}
resolvePath("main.js");

//////////////////////////////////////////  Q9  //////////////////////////////////////////

// 9. Write a function that joins two paths. (0.5 Grade)
function joinPaths(segments1, segments2) {
  return console.log({ joinPaths: path.join(segments1, segments2) });
}
joinPaths("main.js", "data.txt");

//////////////////////////////////////////  Q10  //////////////////////////////////////////

//10. Write a function that deletes a file asynchronously. (0.5 Grade)

const fsPromise = require("node:fs/promises");

const filePath = path.resolve("./data.txt");
function delFile(filePath) {
  fsPromise
    .unlink(filePath)
    .then(() => {
      console.log("file deleted");
    })
    .catch((err) => console.log("file does not exist"));
}
delFile(filePath); // delete data.txt
console.log("done");

//////////////////////////////////////////  Q11  //////////////////////////////////////////

// 11. Write a function that creates a folder synchronously. (1 Grade)

const fs = require("node:fs");

const folderPath = path.resolve("./folder");
function createFolderSync(folderPath) {
  try {
    fs.mkdirSync(folderPath);
    console.log("Folder created");
  } catch (err) {
    console.log("Folder already exists");
  }

  console.log("done");
}
createFolderSync(folderPath);

//////////////////////////////////////////  Q12  //////////////////////////////////////////

//12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)

const events = require("node:events");
const emitter = new events.EventEmitter();
emitter.on("start", () => {
  console.log("welcome");
});
emitter.emit("start");

//////////////////////////////////////////  Q13  //////////////////////////////////////////

//13. Emit a custom "login" event with a username parameter. (0.5 Grade)

emitter.on("login", (username) => {
  console.log(`welcome ${username}`);
});
emitter.emit("login", "ahmed");

//////////////////////////////////////////  Q14  //////////////////////////////////////////

//14. Read a file synchronously and log its contents. (1 Grade)

const fsSync = require("node:fs");
const filePathSync = path.resolve("./data.txt");
function readFileSync(filePathSync) {
  try {
    const data = fsSync.readFileSync(filePathSync, "utf-8");
    console.log(data);
  } catch (err) {
    console.log("file does not exist");
  }
}
readFileSync(filePathSync);


//////////////////////////////////////////  Q15  //////////////////////////////////////////

//15. Write asynchronously to a file. (1 Grade)

function writeFileAsync(filePath, content) {
  fs.writeFile(filePath, content, { flag: "w" }, (err) => {
    if (err) {
      console.log("Error writing file:", err.message);
    } else {
      console.log("File written successfully!");
    }
  });
}

const file = path.resolve("./output.txt");

writeFileAsync(file, "Hello from async write!");


//////////////////////////////////////////  Q16  //////////////////////////////////////////


//16. Check if a directory exists. (0.5 Grade)
function checkDirExists(dirPath) {
  const exists = fs.existsSync(dirPath);

  if (exists) {
    console.log("Directory exists.");
  } else {
    console.log("Directory does not exist.");
  }
}

const folder = path.resolve("./folder");

checkDirExists(folder);


//////////////////////////////////////////  Q17  //////////////////////////////////////////

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)

const os = require("node:os");

function getSystemInfo() {
  return {
    platform: os.platform(),
    architecture: os.arch(),
  };
}

console.log(getSystemInfo());