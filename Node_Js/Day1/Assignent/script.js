const fs = require('fs');

// Get the command line arguments
const [operation, ...args] = process.argv.slice(2);

// Define the file path as ./text.txt
const filePath = './text.txt';

// Function to read a file
const readFile = (filePath) => {
  if (!filePath) {
    console.error('Please provide a file path for the read operation.');
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}':`, err.message);
    } else {
      console.log(data);
    }
  });
};

// Function to create a file
const createFile = (filePath) => {
  if (!filePath) {
    console.error('Please provide a file path for the create operation.');
    return;
  }

  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file '${filePath}':`, err.message);
    } else {
      console.log(`File '${filePath}' created`);
    }
  });
};

// Function to delete a file
const deleteFile = (filePath) => {
  if (!filePath) {
    console.error('Please provide a file path for the delete operation.');
    return;
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file '${filePath}':`, err.message);
    } else {
      console.log(`File '${filePath}' deleted`);
    }
  });
};

// Function to append content to a file
const appendToFile = (content, filePath) => {
  if (!content) {
    console.error('Please provide content to append.');
    return;
  }

  if (!filePath) {
    console.error('Please provide a file path for the append operation.');
    return;
  }

  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file '${filePath}':`, err.message);
    } else {
      console.log(`Content appended to the file '${filePath}'`);
    }
  });
};

// Function to rename a file
const renameFile = (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    console.error('Please provide both the old path and new path for the rename operation.');
    return;
  }

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file '${oldPath}' to '${newPath}':`, err.message);
    } else {
      console.log(`File '${oldPath}' renamed to '${newPath}'`);
    }
  });
};

// Function to list the contents of a directory
const listDirectory = (dirPath) => {
  if (!dirPath) {
    console.error('Please provide a directory path for the list operation.');
    return;
  }

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${dirPath}':`, err.message);
    } else {
      console.log(`Contents of directory '${dirPath}':`);
      files.forEach(file => {
        console.log(file);
      });
    }
  });
};

// Handle the operations based on the command line arguments
if (operation === 'read') {
  readFile(filePath);
} else if (operation === 'create') {
  createFile(filePath);
} else if (operation === 'delete') {
  deleteFile(filePath);
} else if (operation === 'append') {
  const [content] = args;
  appendToFile(content, filePath);
} else if (operation === 'rename') {
  const [newPath] = args;
  renameFile(filePath, newPath);
} else if (operation === 'list') {
  const [dirPath] = args;
  listDirectory(dirPath);
} else {
  console.log("Invalid operation. Please use read, create, delete, append, rename, or list.");
}


