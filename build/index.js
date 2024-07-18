#!/usr/bin/env node
import fs from 'node:fs';

const path = process.cwd();
const indexPath = `${path}/src/index.ts`;
fs.exists(indexPath, (exist) => {
	if (exist) {
		fs.unlink(indexPath, (res) => {
			if (res) {
				throw new Error('哎呀， 出错了...');
			} else {
				createFile();
			}
		});
	} else {
		createFile();
	}
});

const createFile = () => {
	fs.readdir(`${path}/src/`, (_, files) => {
		onContentWrite(files);
		updatePackage(files);
	});
};

const onContentWrite = (list) => {
	let str = '';
	list.forEach((element) => {
		const el = element.split('.');
		str += `export { ${el[0]} } from './${element}';\n`;
	});
	fs.writeFileSync(indexPath, str, (res) => {
		if (res) {
			throw new Error('哎呀，出错了。。。');
		}
	});
};

const updatePackage = (content) => {
	fs.readFile(`${path}/package.json`, 'UTF-8', (_, pkg) => {
		pkg = JSON.parse(pkg);
		pkg.keywords = content.map((c) => {
			return c.split('.')[0];
        });
		fs.writeFile(`${path}/package.json`, JSON.stringify(pkg, null, 4), (err) => {
			if (err) {
				throw new Error('哎呀，出错了...');
			}
		});
	});
};
