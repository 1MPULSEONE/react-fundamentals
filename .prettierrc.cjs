/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    quoteProps: 'consistent',
    bracketSameLine: false,
    jsxSingleQuote: true,
    bracketSpacing: true,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    semi: true,
};

module.exports = config;
