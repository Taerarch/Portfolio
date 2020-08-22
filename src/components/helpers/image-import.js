
const testFolder = '../images/';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
	if (err) throw new Error(err);
	fs.writeFile(
		'../ImageList.js',
		"import React from 'react'\n" +
		"import {Image} from 'react-bootstrap'\n\n" +
			importImages(files) +
			'\n\n' +
			exportFile(files),
		'utf-8',
		() => {}
	);
});
const importImages = (files) =>
	files.map((f) => `import ${f.split('.')[0] + "Image"} from './images/${f}'`).join('\n');
const exportFile = (files) =>
	files
		.map(
			(f) =>
				`export const ${f.split('.')[0]} = <Image src={${
					f.split('.')[0] + "Image"
				}}  alt='${f.split('.')[0]}' title='${f.split('.')[0]}' width="100" rounded fluid />`,
		)
		.join('\n\n');
