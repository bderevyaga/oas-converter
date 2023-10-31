export class StringUtil {
    static delimiter = /[\s_\W]+/g;

    static toUpperSnakeCase(input: string): string {
        return input
            .replace(/([a-z\d])([A-Z])/g, '$1_$2')
            .replace(StringUtil.delimiter, '_')
            .toUpperCase();
    }

    static toPascalCase(input: string): string {
        return input
            .replace(/([a-z\d])([A-Z])/g, '$1_$2')
            .replace(
                /([A-Za-z])([A-Za-z]*)/g,
                (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase(),
            )
            .replace(StringUtil.delimiter, '');
    }
}
