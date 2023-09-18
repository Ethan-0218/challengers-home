const path = require('path');

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath, originalPath }) => {
    const exportName = path.basename(originalPath, path.extname(originalPath));
    const baseName = path.basename(filePath, path.extname(filePath));
    return { exportName, baseName };
  });
  return `${exportEntries
    .map(({ baseName }) => `import ${baseName} from './${baseName}';`)
    .join('\n')}

  export const ICONS = {${exportEntries
    .map(({ exportName, baseName }) => `${exportName}:${baseName}`)
    .join(',')}}

  export type IconNames = keyof typeof ICONS;`;
}

module.exports = defaultIndexTemplate;
