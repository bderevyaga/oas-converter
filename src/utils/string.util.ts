export class StringUtil {
    static delimiter = /[\s_\-\\. /]+/g

    static toUpperSnakeCase(input: string): string {
        return input
            .replace(/([A-Z])/g, '_$1')
            .replace(StringUtil.delimiter, '_')
            .toUpperCase();
    }

    static toPascalCase(input: string): string {
        return input
            .replace(/([A-Z])/g, '_$1')
            .replace(/([A-Z,a-z])([A-Z,a-z]*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
            .replace(StringUtil.delimiter, '')
    }
}