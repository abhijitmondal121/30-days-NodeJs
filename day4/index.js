const path = require('path');
function resolvePath(relativePath) {
  const absolutePath = path.resolve(__dirname, relativePath);
  console.log('Resolve Path:', absolutePath);
}

resolvePath('test-files/file3.txt');
resolvePath('nonexistent-folder/file3.txt');