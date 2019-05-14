const siteContent = {
	nav            : {
		'nav-item-1' : 'Services',
		'nav-item-2' : 'Product',
		'nav-item-3' : 'Vision',
		'nav-item-4' : 'Features',
		'nav-item-5' : 'About',
		'nav-item-6' : 'Contact',
		'img-src'    : 'img/logo.png',
	},
	cta            : {
		h1        : 'DOM Is Awesome',
		button    : 'Get Started',
		'img-src' : 'img/header-img.png',
	},
	'main-content' : {
		'features-h4'      : 'Features',
		'features-content' :
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4'         : 'About',
		'about-content'    :
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src'   : 'img/mid-page-accent.jpg',
		'services-h4'      : 'Services',
		'services-content' :
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4'       : 'Product',
		'product-content'  :
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4'        : 'Vision',
		'vision-content'   :
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact        : {
		'contact-h4' : 'Contact',
		address      : '123 Way 456 Street Somewhere, USA',
		phone        : '1 (888) 888-8888',
		email        : 'sales@greatidea.io',
	},
	footer         : {
		copyright : 'Copyright Great Idea! 2018',
	},
};
const addElement = (elementType, elementText) => {
	let newElement;
	newElement = document.createElement(elementType);
	newElement.textContent = elementText;
	return newElement;
};
// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const navigation = document.querySelector('nav');
let navLinks = navigation.children;
const navLinkContent = Object.values(siteContent.nav)
	.filter(element => {
		return !element.match(/(img)/i);
	})
	.forEach((element, i) => (navLinks[i].textContent = element));
navigation.prepend(addElement(`a`, `Home`));
navigation.appendChild(addElement(`a`, `Specials`));
Array.from(navLinks).forEach(element => (element.style.color = 'green'));
const ctaElements = document.querySelector('.cta-text').children;
const ctaContent = Object.values(siteContent.cta)
	.filter(element => {
		return !element.match(/(img)/i);
	})
	.forEach((element, i) => (ctaElements[i].textContent = element));

const ctaImage = document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);
const mainContentHeadings = document.querySelectorAll('.text-content h4');
const textMainContentHeadings = Object.values(siteContent['main-content'])
	.filter(element => {
		return !element.match(/(img)/i) && !element.match(/\s/g);
	})
	.forEach((element, i) => (mainContentHeadings[i].textContent = element));

const mainContentParagraphs = document.querySelectorAll('.text-content p');
const textMainContentParagraphs = Object.values(siteContent['main-content'])
	.filter(element => {
		return element.match(/\s/g);
	})
	.forEach((element, i) => (mainContentParagraphs[i].textContent = element));

const contactContent = Object.values(siteContent.contact);
const contactSection = document.querySelector('.contact').children;

contactContent.forEach((element, i) => (contactSection[i].textContent = element));

const copyRight = document.querySelector('footer').children;

copyRight[0].textContent = siteContent['footer']['copyright'];
