// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": ["warn", 4],
        "import/extensions": 0,
        "no-plusplus": 0,
        "no-mixed-operators": 0,
        "max-len": ["warn", 120],
        "arrow-parens": ["error", "as-needed"],
        'space-before-function-paren': ['warn', 'never'],
        "semi": ["warn", "always"],
        "comma-dangle": 0,
        "no-multiple-empty-lines": "warn",
        "no-unused-vars": "warn",
        "padded-blocks": "warn",
        "standard/object-curly-even-spacing": ["warn", "always"],
    }
}