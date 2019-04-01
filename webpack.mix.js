const fs = require('fs');
const mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');

const config = {
    pug: {
        pug: {
            pretty: true,
        },

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

if (process.env.MIX_NOTIFIED !== 'on') {
    mix.disableNotifications();
}

Object.keys(config.pug.locals.templates).forEach((template) => {
    const target = `${__dirname}/public/layouts/${template}`;

    if (! fs.existsSync(target)){
        fs.mkdirSync(target);
    }

    mix.pug(`resources/templates/${template}/*.pug`, `../../../public/layouts/${template}`, config.pug)
});

mix
    .setPublicPath('public')
    .copyDirectory('resources/assets/img', 'public/img')
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .pug(`resources/templates/index.pug`, `../../public`, config.pug)
;
