import { PathLike, existsSync, mkdirSync, readFileSync } from 'fs';
import { globSync } from 'glob';
import { parse } from 'yaml';

export class FileSystemUtil {
    public static ensureDirectoryExists(path: PathLike): void {
        if (!existsSync(path)) {
            mkdirSync(path, { recursive: true });
        }
    }

    public static getFiles(cwd: string, pattern: string | string[]): string[] {
        return globSync(pattern, { cwd, absolute: true });
    }

    public static readYamlFile<T = object>(path: PathLike): T {
        const file = readFileSync(path, 'utf8');

        return parse(file);
    }
}
