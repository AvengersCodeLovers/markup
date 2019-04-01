## About

Markup is the starting point of a simple, automated-tasking project with pug, sass, bootstrap v4 and font-awesome.

## Requirements

- Node: ^10.15
- Yarn: ^1.13

## Installation

Create a markup project via composer.

```bash
composer create-project --prefer-dist d1s1g4codelovers/markup your-markup-project
```

Change your working directory.

```bash
cd /path/to/your-markup-project
```

Install node dependencies via yarn.

```bash
yarn install
```

## Usage

Create pug files inside `resources/templates` directory (Similar to `resources/templates/items` directory).

```bash
resources/templates/
├── app.pug
├── index.pug
└── items
    ├── create-edit.pug
    ├── index.pug
    └── show.pug
```

Register pug files in `webpack.mix.js` file.

```javascript
const config = {
    pug: {
        locals: {
            templates: {
                items: [
                    { name: 'index', description: 'List Items' },
                    { name: 'create-edit', description: 'Create/Edit Item' },
                    { name: 'show', description: 'Show Item' },
                ],
            },
        },
    },
};
```

Build/Watch files (See `webpack.mix.js` for more details).

```bash
yarn run dev # yarn run development
yarn run prod # yarn run production
yarn run watch
```

Start a node server (expressjs)

```bash
yarn start # http://127.0.0.1:3000
```

Visit http://127.0.0.1:3000.

Supported enviroment variables:

```bash
MIX_PORT=8080 # Specify a server HTTP port.
MIX_NOTIFIED=on # Enable/Disable compiling notifications. (on/off)
```

## Contributing

- Thank you for considering contributing to `@d1s1g4codelovers/markup` package!

- Feel free to submit an issue or a pull request for your expectation!

- All contributions are welcome and accepted via pull requests.

## License

- The `@d1s1g4codelovers/markup` package is open-sourced software licensed under the [MIT license](LICENSE.md).
