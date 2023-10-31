import { StringUtil } from '../../src/utils/string.util';

describe('StringUtil', () => {
    describe('toUpperSnakeCase', () => {
        it('should convert string to upper snake case', () => {
            expect(
                StringUtil.toUpperSnakeCase(
                    'convert_--__(This---to/\\Upper.SnakeCase',
                ),
            ).toEqual('CONVERT_THIS_TO_UPPER_SNAKE_CASE');
        });

        it('should convert upper snake case to upper snake case', () => {
            expect(
                StringUtil.toUpperSnakeCase('CONVERT_THIS_TO_UPPER_SNAKE_CASE'),
            ).toEqual('CONVERT_THIS_TO_UPPER_SNAKE_CASE');
        });

        it('should convert pascal case to upper snake case', () => {
            expect(
                StringUtil.toUpperSnakeCase('ConvertThisToUpperSnakeCase'),
            ).toEqual('CONVERT_THIS_TO_UPPER_SNAKE_CASE');
        });
    });

    describe('toPascalCase', () => {
        it('should convert string to pascal case', () => {
            expect(
                StringUtil.toPascalCase(
                    'convert_--__()This---to/\\.PascalCase',
                ),
            ).toEqual('ConvertThisToPascalCase');
        });

        it('should convert pascal case to pascal case', () => {
            expect(StringUtil.toPascalCase('ConvertThisToPascalCase')).toEqual(
                'ConvertThisToPascalCase',
            );
        });

        it('should convert upper snake case to pascal case', () => {
            expect(
                StringUtil.toPascalCase('CONVERT_THIS_TO_PASCAL_CASE'),
            ).toEqual('ConvertThisToPascalCase');
        });
    });
});
