import { FileSystemUtil } from './utils/file-system.util';

const files = FileSystemUtil.getFiles('sources', './**/*.yaml');

for (const file of files) {
    console.log(FileSystemUtil.readYamlFile(file));
}
