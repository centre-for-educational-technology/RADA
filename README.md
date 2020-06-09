# Toolset

Gaming platform for RADA project

The main objective of the current project is to integrate the zoos of the CB region into joint tourist attraction through developing and implementing a cross-border service package for creative adventure learning. It consists of a set of creative online multimedia game-based learning tools and related apps for mobile devices.

This tool set includes:
- an online tool for creating at least four types of location-based interactive assignments relevant for Zoo settings (triggered either by a QR code or GPS-based proximity): augmented reality assignments; quizzes; crossword and memory puzzles; video and photo story telling assignments;
- an online repository of interactive assignments;
- an online environment (Web platform + mobile clients) for composing and conducting location-based GPS adventure games, challenges and tournaments that utilise all these different types of interactive assignments. The platform uses Mozilla Open Badges framework for awarding the achievements of players.

**Ellu viidud projekti Mobilitas Pluss MOBEC001 "Piireületav haridusuuendus tehnoloogiapõhiste teadusuuringute toel" tegevuskava raames.**

![Ellu viidud projekti Mobilitas Pluss MOBEC001 "Piireületav haridusuuendus tehnoloogiapõhiste teadusuuringute toel" tegevuskava raames.](https://github.com/centre-for-educational-technology/RADA/blob/master/public/img/logos/logo-mobilitas-and-eu.jpg "Ellu viidud projekti Mobilitas Pluss MOBEC001 \"Piireületav haridusuuendus tehnoloogiapõhiste teadusuuringute toel\" tegevuskava raames.")

## Requirements

- Requirements are best determined using [Server Requirements page](https://laravel.com/docs/6.x/installation#server-requirements) of corresponding Laravel 5 version
  - Currently used version is 6.x
- PHP version 7.3 (some of the additional modules have strict requirements)
- SSH access to the server (terminal access)
- [Composer](https://getcomposer.org/) being installed

## Installation

- Make sure that [composer](https://getcomposer.org/) is installed globally or install it in place
- Clone the repository
  - Please make sure to switch to `production` branch if you are running on production server
  - In case of development instance, please make sure to build the static assets. Refer to [working with compiled assets](#working-with-compiled-assets) for more information
- Move into the directory (`cd RADA`)
- Install the dependencies `composer install`
- Make sure that .env file is present and configured as needed (copy .env.example to .env and fill in with data)
  - Either create application key manually or do that with a command `php artisan key:generate`
  - Make sure that `APP_ENV=production` and `APP_DEBUG=false` for production environments (this should prevent unneeded error detailed data exposure)
  - Create and configure Google and Facebook apps, fill the needed environment variables
    - Please make sure to activate the `Google Maps JavaScript API`, `Google Maps Embed API` and `Google+ API`, create the API key for Maps and OAuth credentials
    - Please make sure that Facebook App is set to `public` mode
    - The redirect URL addresses are in the form `BASE-URL/auth/PROVIDER-name/callback`
  - Create reCaptcha(V2) keys and fill in the configurations in `.env` file. Constants to look for are `NOCAPTCHA_SECRET` and `NOCAPTCHA_SITEKEY`
  - Create and configure Google Analytics and UserReport services. Configuration constant names are `GOOGLE_ANALYTICS_KEY` and `USERREPORT_KEY`
- Configure subject and title from sent email messages
 - Open the `config/mail.php` file and set the needed values within the `from` element
- Create the database as needed (according to configuration provided)
- For xAPI integration (step 1)
  - Make sure you have set the `QUEUE_DRIVER` in the .env file
    - `QUEUE_DRIVER=database`
  - Run `php artisan queue:table` from terminal
- Run `php artisan migrate` from terminal (this should create database and more)
  - Running `php artisan serve` would serve the app in development (or configure the server of your choice)
- Run `php artisan db:seed` to ensure that database is filled with required information
- For xAPI integration (step 2)
  - Run `php artisan queue:work --tries=0 &` from terminal to start the queue worker
- Add private and public keys to the `storage/app/keys` directory (key length might be different)
- Make sure to deploy Passport as described in the [documentation](https://laravel.com/docs/6.x/passport#deploying-passport)
  - Only keys would be needed by default
  - Make sure to define API access in the `.env` file by specifying user identifiers
```
openssl genrsa -out private-key.pem 2048
openssl rsa -in private-key.pem -out public-key.pem -outform PEM -pubout
```
- Setup scheduled jobs (Cron)
  - Those jobs should be run from Command-line interface (CLI) as those might require a longer period of time to run
  - Please check the [documentation](https://laravel.com/docs/6.x/scheduling#introduction) for detailed instructions

## Set up Google Analytics integration for active users graph on statistics page
- Create API Service account which can access desired Google Analytics project. [Documentation](https://cloud.google.com/iam/docs/creating-managing-service-accounts)
- Add service account json to project
- Add `GOOGLE_SERVICE_ACCOUNT_KEY_JSON_NAME` to .env file which points to the json file added in the previous step

## Upgrades

Upgrade procedure is generally simple enough, but could also involve some additional steps to be taken. This could be the case if some of the application logic aspects have changed. An example could be the storage logic structural change, in that particular case the migration has to be applied manually by running `php artisan storage:public:migrate`. Another case would be some additions to configurations. Most of those are well described within the commit messages.

The common septs for the process are as follows:

- Log into the server terminal with `ssh` command
- Navigate to the service directory (not to be mistaken with the `public` subdirectory)
- Run `php artisan down` to temporarily suspend the service
- Consider creating a backup of database and current service files
- Run `git pull` to get the latest code from the `production` branch (or use any other means to get the latest code and replace the current one)
- Run `php artisan migrate:status` to determine if migrations are required
  - If there are any unapplied migrations, run `php artisan migrate` command
  - You can check the state of migrations at any time by running the initial command
- Run `php artisan view:clear`, to clear any view caches
- Check if any additional migrations/configurations are required
  - See if any modules have been added to requirements, those could be installed by running `php composer install MODULE-NAME` or just running `php composer update`
  - See if any configurations have been added and require to be set
  - See if there is a need to run any additional migration commands
- Once you are sure that all required steps have been made, run `php artisan up` to make service available


## Development

### Working with compiled assets

Working with JS and SASS requires [Node.js](https://nodejs.org) and [Webpack](https://webpack.js.org/) for compilation, generation and management purposes.
More information could be found on [Laravel Mix](https://laravel.com/docs/6.x/mix) documentation pages.

Tasks should run well enough with Node.js versions 10 and 12 (tested to run well enough with both versions). Other versions might be having certain compatibility issues.

If all the dependencies are installed (`npm install`), then one would only need to run one of the tasks:

 - `npm run dev` would build assets for development purposes
 - `npm run prod` would build assets for use in production
 - `npm run watch` would build assets for development and keep watching for changes (CTRL + C to cancel the task in terminal)
 - Look at `package.json` file for more details

### Merging into production

Once the code has reached a stable point and is ready to me run in production, there is a need to merge `master` branch into one called `production`. The process requires a few steps to be taken:

  - Switch to local branch that is tracking upstream `production`
    - [This](https://stackoverflow.com/questions/520650/make-an-existing-git-branch-track-a-remote-branch#answer-2286030) should have enough instruction to setup the branch from the terminal
  - Merge the code from `master` by running `git merge --strategy-option=theirs master`
    - The strategy is needed to make sure that no conflicts arise. The strategy does not matter too much as any of the static assets would be rebuilt. It is solely needed because generated/built files for static assets (JS and CSS) would have conflicts, as both branches are building their own versions of those files. The ones in production are minified and made ready for production use
  - Make sure to build the production assets by running `npm run prod`, which should add new files to the `public` directory and its subdirectories. Versioning information is kept with in `mix-manifest.json`
    - In case no changes were made to the base files for JS or CSS, there could be no changes to the static assets. Although, running the process just in case would be a good idea (unless one is absolutely sure that it is not necessary)
  - Add all the changes files, commit and push

## Localisation

All translations are placed under `ROOT/resources/lang/LANGUAGE`, where `LANGUAGE` is one of the following `en`, `et`, `ru`, `fi`, `sv`.

I order to create a new translation, please copy all the files from `ROOT/resources/lang/en` to newly created directory. **NB! Please make sure that the system would need to be configured to recognise that newly added translation.**

Please note that files for different translations should be synchronised, meaning, new translations should be added to all of these files and translated right away. The translation system should be able to fall-back to ones for default language, provided those are present.

NB! While translating textual strings please make sure not to remove the replacement parts. Each replacement part could be identified buy having a colon in front of the word: Example: `User :name has logged in.`, the `:name` is a placeholder that will be substituted with some value and should be left as is in all translations.

Also check any additional translations within the `vendor` subdirectory. That would host any translation files that belong to the third-party modules. The logic of creating translations for new languages is the same as described earlier.

## Production

If you need to be running in production mode, then please use the branch named `production` instead of `master`. That branch might not have all the latest changes, but it should have the JS and CSS assets built for running in production (minified and more).

## Vagrant + Homestead

This is an example `Homestead.yaml` configuration file for running with `Vagrant` on `VirtualBox`. Please modify it to comply with your local system. Read [documentation](https://laravel.com/docs/6.x/homestead) for more information on how to use `Laravel Homestead`.

```
ip: 192.168.10.10
memory: 2048
cpus: 2
provider: virtualbox
authorize: ~/.ssh/id_rsa.pub
keys:
    - ~/.ssh/id_rsa
folders:
    -
        map: <PATH-TO-REPO>
        to: /home/vagrant/code
sites:
    -
        map: homestead.test
        to: /home/vagrant/code/public
        php: "7.3"
        type: "apache"
        schedule: true
databases:
    - homestead
features:
    -
        mariadb: false
    -
        ohmyzsh: false
    -
        webdriver: false
name: rada
hostname: rada
```

## License

MIT License

Copyright (c) 2018 RADA Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
