import * as fs from 'fs';
import { FileSystemUtil } from '../../src/utils/file-system.util';

jest.mock('fs');

describe('FileSystemUtil', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('ensureDirectoryExists', () => {
        it('should create directory if it does not exist', () => {
            const mockExistsSync = jest.spyOn(fs, 'existsSync');
            const mockMkdirSync = jest.spyOn(fs, 'mkdirSync');

            mockExistsSync.mockReturnValueOnce(false);

            const path: string = 'path';
            FileSystemUtil.ensureDirectoryExists(path);

            expect(mockExistsSync).toHaveBeenCalledWith(path);
            expect(mockMkdirSync).toHaveBeenCalledWith(path, {
                recursive: true,
            });
        });

        it('should not create directory if it already exists', () => {
            const mockExistsSync = jest.spyOn(fs, 'existsSync');
            const mockMkdirSync = jest.spyOn(fs, 'mkdirSync');

            mockExistsSync.mockReturnValueOnce(true);

            const path: string = 'path/existing';
            FileSystemUtil.ensureDirectoryExists(path);

            expect(mockExistsSync).toHaveBeenCalledWith(path);
            expect(mockMkdirSync).not.toHaveBeenCalled();
        });
    });
});
