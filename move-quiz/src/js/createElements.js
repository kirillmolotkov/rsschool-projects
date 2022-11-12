const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const header = document.createElement('header');
header.className = 'header';
container.append(header);

const main = document.createElement('main');
main.className = 'main';
container.append(main);

const footer = document.createElement('footer');
footer.className = 'footer';
container.append(footer);

//elements for header

const logo = document.createElement('div');
logo.className = 'logo';
logo.innerHTML = 'MQ';
header.append(logo);

const nav = document.createElement('nav');
nav.className = 'nav';
header.append(nav);

const navList = document.createElement('ul');
navList.className = 'nav-list';
nav.append(navList);

const navListElemStart = document.createElement('li');
navListElemStart.className = 'nav-list-item';
navListElemStart.innerHTML = 'Start';
navList.append(navListElemStart);

const navListElemQuiz = document.createElement('li');
navListElemQuiz.className = 'nav-list-item';
navListElemQuiz.innerHTML = 'Quiz';
navList.append(navListElemQuiz);

const navListElemGallery = document.createElement('li');
navListElemGallery.className = 'nav-list-item';
navListElemGallery.innerHTML = 'Gallery';
navList.append(navListElemGallery);

const navListElemStatistic = document.createElement('li');
navListElemStatistic.className = 'nav-list-item';
navListElemStatistic.innerHTML = 'Statistic';
navList.append(navListElemStatistic);

const settings = document.createElement('div');
settings.className = 'settings';
header.append(settings);

const settingsLang = document.createElement('div');
settingsLang.className = 'settings-lang';
settingsLang.innerHTML = 'en';
settings.append(settingsLang);

const settingsTheme = document.createElement('div');
settingsTheme.className = 'settings-theme';
settingsTheme.innerHTML = 'dark';
settings.append(settingsTheme);
