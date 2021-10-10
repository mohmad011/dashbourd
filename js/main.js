/**
 * Define Global Variables
 * 
*/

/* Start Color Option Box */
let storeColor = localStorage.getItem("color_option");

// Access Unorder List For List Of Color
let ColorListEl = window.document.querySelector(".colors-list")

// Data Of Colors
let ColorsListData = [
	{
		Color:"#ff9800",
		ActiveClass:"active"
	},
	{
		Color:"#e91e63"
	},
	{
		Color:"#009688"
	},
	{
		Color:"#03a9f4"
	},
	{
		Color:"#4caf50"
	}
]
/* End Color Option Box */


/* Start Slider Box */

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let	backgroundInterval;

// Get Background Option Data From LocalStorage
let	backgroundImageStore = localStorage.getItem("background_option");

// Switch Background Images
let imageBackEl = window.document.querySelectorAll('.random-background span');

// Select Landing Page
let landingPage = window.document.querySelector('.landing-page');

// Data Of Background Images
let	imageArray  = ["landing1.jpeg" , "landing2.jpg", "landing3.jpg" , "landing4.jpg" , "landing5.jpg"];
/* End Slider Box */

/* Start Skills Box */

// Select Skills Selector
let ourSkills = window.document.querySelector('.skills');

/* End Skills Box */

/* Start Links Area */

// Select All Links
const allLinks = window.document.querySelectorAll('.header-area .links a');


// Toggle Menu
let toggleButton = window.document.querySelector('.toggle-menu'),
	
	// Number Of Spans in Toggle Menu Botton
	spanNumber = [1,2,3],

	// Access Unorder List For List Of Links
	theLinks = window.document.querySelector('.links'),

	// Data Of Links
	LinksData = [
		{
			Section:".landing-page",
			Text:"Home"
		},
		{
			Section:".about-us",
			Text:"About"
		},
		{
			Section:".skills",
			Text:"Skills"
		},
		{
			Section:".timeline",
			Text:"Timeline"
		},
		{
			Section:".features",
			Text:"Features"
		},
		{
			Section:".testimonial",
			Text:"Testimonials"
		},
		{
			Section:".contact",
			Text:"Contact"
		}
	];
/* End Links Area */

// Access ScrollToTop Botton
let ScrollTopBtn = window.document.querySelector(".scrollToTop")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function To Make Randomize For Images
const randomizeimg = () => {
		
	if (backgroundOption === true) { // Check If there is Background Option

		backgroundInterval = setInterval(() => {

			// Get Random Image
			let	randomImages = Math.floor(Math.random() * imageArray.length);

				landingPage.style.transition = '1s';

				landingPage.style.backgroundSize = 'cover';

				// Change Background Image
				landingPage.style.backgroundImage = `url(Images/${imageArray[randomImages]})`;

			},3000);

		}


}

// randomizeimg();

// Function To Move To Other Section
const goToSection = (Elements) => {

	Elements.forEach(Element => {

		Element.addEventListener('click' , (e) => {

			e.preventDefault();

			window.document.querySelector(e.target.dataset.section).scrollIntoView({ // Go To Spacify Section Smoothly

				behavior: 'smooth',
				block: "start" // Go To The Specifc Start Of Block Element

			});

		});

	});
}

// Handel Active State
const removeAddActive = (event) => {

	// Remove Active Class From All Childrens
	event.target.parentElement.querySelectorAll('.active').forEach(Element =>{

		Element.classList.remove('active');

	});

	// Add Active Class On Selfevent
	event.target.classList.add('active');

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Loop On All Links Navegation
LinksData.forEach(e => {
	
	// Create Li Element
	const Li = document.createElement("li");

	// Create anchor Element
	const ALink = document.createElement("a");

	// Set href Attribute = "#" For anchor Element
	ALink.setAttribute("href" , "#")

	// Set data-section Attribute = e.Section For anchor Element
	ALink.setAttribute("data-section" , e.Section)

	// Create Text Node for Links
	let NameLink = document.createTextNode(e.Text)

	// Add Text Node for Links in anchor Element
	ALink.appendChild(NameLink)

	// Add anchor Element in Li Element
	Li.appendChild(ALink)
	
	// Add Li Element in Ul Element
	theLinks.appendChild(Li)
})

// Loop In All Of anchor Elements
window.document.querySelectorAll('.header-area .links a').forEach(e => {
	
	e.addEventListener('click' , (eActive) => {
		window.document.querySelectorAll('.header-area .links a').forEach(linkA => {
			linkA.classList.remove('active'); // Remove Active Class Not Selfevent
		})

		// Add Active Class On Selfevent
		eActive.target.classList.add('active');
	})
})

// Toggle Spin Class On Icon
window.document.querySelector('.setting-box .setting_shap').onclick = function(){

	// Toggle Class Fa-Spin On Icon
	this.classList.toggle('fa-spin');

	// Toggle Class Open On Main Setting Box
	window.document.querySelector('.setting-box ').classList.toggle('open');

}

// make Animation For Progress For Each Skill
window.onscroll = () => {

		// Skills Offset Top
	let skillsOffsetTop = ourSkills.offsetTop,

		// Skills Outer Height
		skillsOuterHeight = ourSkills.offsetHeight,

		// Window Height
		windowHeight = this.innerHeight,

		// Window ScrollTop
		windowScrollTop = this.pageYOffset;

	if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

		allSkills = window.document.querySelectorAll('.skills .skill-box .skill-progress span');

		allSkills.forEach(skill =>{

			skill.style.transition = '0.8s';

			skill.style.width = skill.dataset.progress

		});

	}


};

// Reset Button
window.document.querySelector('.reset-options').onclick = () => {

	localStorage.removeItem("color_option");

	localStorage.removeItem("background_option");

	// Reload Window
	window.location.reload();


};

// Loop on Number Of Spans
spanNumber.forEach(e => {

	// Create Span Element
	let Span = document.createElement("span");

	// Add Span Element In ToggleButton
	toggleButton.appendChild(Span)
})

toggleButton.onclick = function(e){

	// Stop Propagtion
	e.stopPropagation();

	// Toggle Class menu-active On Button
	this.classList.toggle('menu-active');

	// Toggle Class open On Links
	theLinks.classList.toggle('open');
}

// Add AddEvent Click On Document
document.addEventListener('click' , (e) => {

	if (e.target !== toggleButton && e.target !== theLinks) {

		 // Check If Menu Is Open
		 if (theLinks.classList.contains('open')) {

			// Toggle Class menu-active On Button
			toggleButton.classList.toggle('menu-active');

			// Toggle Class open On Links
			theLinks.classList.toggle('open');

		 }

	}

});



// Stop Propagation 
theLinks.onclick = (e) => {

	e.stopPropagation(); // This Make Node Between Parent And Children
}

// Set the top cordinate to 0
// make scrolling smooth
ScrollTopBtn.onclick = () => {

	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});

	// Loop On All Of anchor tags
	window.document.querySelectorAll('.header-area .links a').forEach(e => {
		
		e.classList.remove('active'); // Remove Active Class From Not Self Event
	})

	// Add Active Class For Self Event
	window.document.querySelectorAll('.header-area .links a')[0].classList.add('active')

}

// Show button when page is scorlled upto given distance
const toggleVisibility = () => {
	if (window.pageYOffset > 300) {
		ScrollTopBtn.classList.remove('hide')
	  	ScrollTopBtn.classList.add('show')
	} else {
		ScrollTopBtn.classList.remove('show')
	  	ScrollTopBtn.classList.add('hide')
	}
};

// When Do Scrolling Declare toggleVisibility Function
window.addEventListener("scroll", toggleVisibility);

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Add active class in first link
if (window.pageYOffset >= 0) {
	window.document.querySelectorAll('.header-area .links a')[0].setAttribute("class" , "active")
}

// Check If Is Found Color in Local Storage Or Not 
if (storeColor !== '') {

	document.documentElement.style.setProperty('--main-color' , storeColor);

	// Loop On All List Items
	ColorsListData.forEach(e => {
		
		// Create Li Element
		const Li = document.createElement("li");

		// Add data-color Attribute = e.Color
		Li.setAttribute("data-color" , e.Color)
		
		// Add class Attribute = ""
		Li.setAttribute("class" , "")

		if (Li.getAttribute("data-color") === storeColor){ // Check If data-color Attribute = storeColor

			// Add class Attribute
			Li.setAttribute("class" , "active")

		}
		
		// Add Event click to change color
		Li.addEventListener('click' , (e) => {

			// Set Color On Root
			document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

			// Set Color On Local Storage
			localStorage.setItem("color_option" ,  e.target.dataset.color);

			removeAddActive(e); // Declare removeAddActive

		});

		ColorListEl.appendChild(Li)
	})

}

// randomizeimg();

// Loop On All Spans
imageBackEl.forEach(span => {

	// Click On Evry Span
	span.addEventListener('click' , (e) => {


		if (e.target.dataset.background === 'yes') { // Check If data-background === "yes"

			backgroundOption = true;

			randomizeimg();

			localStorage.setItem("background_option" , true);

		}else {	
			backgroundOption = false;

			clearInterval(backgroundInterval);

			localStorage.setItem("background_option" , false);
		}

		removeAddActive(e);

	});


});

// Check If Is Found background Image in Local Storage Or Not 
if (backgroundImageStore !== null && backgroundImageStore === "true") {

	backgroundOption = true;

	window.document.querySelector('.random-background .yes').classList.add('active');

}else{

		backgroundOption = false;

		window.document.querySelector('.random-background .no').classList.add('active');
}


randomizeimg();

goToSection(window.document.querySelectorAll('.header-area .links a'));