const hamButton = document.querySelector('#hamburger-button');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {navigation.classList.toggle('open');hamButton.classList.toggle('open');}); const temples = [	
	  {templeName: "Billings Montana",location: "Billings, Montana, United States",dedicated: "November, 20, 1999 ",area: 33800,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
	  },{templeName: "Nauvoo Illinois",location: "Nauvoo, Illinois, United States",dedicated: "June, 30, 2002",area: 54000,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg"
	  },{templeName: "Spokane Washington",location: "Spokane, Washington, United States",dedicated: "August, 23, 1999",area: 10700,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/spokane-washington/400x250/spokane-temple-lds-736590-wallpaper.jpg"
	  },{templeName: "Star Valley Wyoming",location: "Afton, Wyoming, United States",dedicated: "October, 30, 2016",area: 18609,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/star-valley-wyoming/400x250/star-valley-wyoming-temple-1795141-wallpaper.jpg"
	  },{templeName: "Idaho Falls Idaho",location: "Idaho Falls, Idaho",dedicated: "September, 25, 1945",area: 85624,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
	  },{templeName: "Manti Utah",location: "Manti, Utah",dedicated: "May, 21, 1888",area: 74792,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-766504-wallpaper.jpg"
	  },{templeName: "Aba Nigeria",location: "Aba, Nigeria",dedicated: " August, 7, 2005",area: 11500,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	  },{templeName: "Washington D.C.",location: "Kensington, Maryland, United States",dedicated: " November, 19, 1974",area: 156558,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	  },{templeName: "Lima Perú",location: "Lima, Perú",dedicated: " January, 10, 1986",area: 9600,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	  },{templeName: "Mexico City Mexico",location: "Mexico City, Mexico",dedicated: " December, 2, 1983",area: 116642,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	  },{templeName: "Yigo Guam",location: "Yigo, Guam",dedicated: " May, 2, 2020",area: 6861,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	  },{templeName: "Payson Utah",location: "Payson, Utah, United States",dedicated: " June, 7, 2020",area: 96630,imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	  }];
const albumContainer = document.getElementById('album');
function displayTemples(temples){ albumContainer.innerHTML = '';temples.forEach(temple => {
const templeCard = document.createElement('div');
templeCard.classList.add('card');
const templeImg = document.createElement('img');
templeImg.src = temple.imageUrl;
templeImg.alt = temple.templeName;
templeImg.loading = 'lazy';
const templeTitle = document.createElement('h2');
templeTitle.textContent = temple.templeName;
const templeLocation = document.createElement('p');
templeLocation.textContent = `Location: ${temple.location}`;
const dedicationDate = document.createElement('p');
dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;
const templeArea = document.createElement('p');
templeArea.textContent =`Area: ${temple.area} sq ft`;
templeCard.appendChild(templeTitle);
templeCard.appendChild(templeLocation);
templeCard.appendChild(dedicationDate);
templeCard.appendChild(templeArea);
templeCard.appendChild(templeImg);
albumContainer.appendChild(templeCard);});}
const dynamicTitle = document.querySelector('#filtered-title');
document.getElementById('sort-large').addEventListener('click', () => {const sortedLarge = temples.filter(temple => temple.area > 90000);displayTemples(sortedLarge); dynamicTitle.textContent =`Large`;});
document.getElementById('sort-small').addEventListener('click', () => {const sortedSmall = temples.filter(temple => temple.area < 10000);displayTemples(sortedSmall); dynamicTitle.textContent =`Small`;});
document.getElementById('sort-old').addEventListener('click', () => {const sortedOld= temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);displayTemples(sortedOld); dynamicTitle.textContent =`Old`;});
document.getElementById('sort-new').addEventListener('click', () => {const sortedNew= temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);displayTemples(sortedNew); dynamicTitle.textContent =`New`;});
displayTemples(temples);