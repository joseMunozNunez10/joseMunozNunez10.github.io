const { execSync } = require('child_process');
const path = require('path');

try {
  const distPath = path.join(__dirname, '..', 'dist');
  const command = process.platform === 'win32'
    ? `Get-ChildItem "${distPath}" -Recurse -Filter "*.html" | ForEach-Object { html-beautify -r $($_.FullName) }`
    : `find "${distPath}" -name "*.html" -exec html-beautify -r {} \\;`;

  const shell = process.platform === 'win32' ? 'powershell.exe' : '/bin/bash';
  execSync(command, { stdio: 'inherit', shell });
  console.log('✓ HTML files beautified successfully');
} catch (error) {
  console.error('Error beautifying HTML files:', error);
  process.exit(1);
}
