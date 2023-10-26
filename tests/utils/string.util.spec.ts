import { StringUtil } from '../../src/utils/string.util';

describe('StringUtil', () => {
    describe('toUpperSnakeCase', () => {
        it('should convert string to upper snake case', () => {
            expect(StringUtil.toUpperSnakeCase('convert_--__This---to/\\Upper.SnakeCase'))
                .toEqual('CONVERT_THIS_TO_UPPER_SNAKE_CASE')
        })
    })

    describe('toPascalCase', () => {
        it('should convert string to pascal case', () => {
            expect(StringUtil.toPascalCase('convert_--__This---to/\\.PascalCase'))
                .toEqual('ConvertThisToPascalCase')
        })
    })
})