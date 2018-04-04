console.log("if you're looking here I'm assuming you're a web dev\nHit the contact link if you need help or are hiring")
console.log('Github: https://github.com/saltyJeff')
console.log('LinkedIn: https://www.linkedin.com/in/jefferson-lee-a30466155/')
window.store = MicroFlux({
	store: {
		menuOpen: false,
		page: 'profile'
	},
	actions: {
		toggleMenu: function () {
			this.menuOpen = !this.menuOpen
		},
		routeTo: function (page) {
			this.page = page
		}
	}
})

/*
	Menu
*/
let menu = document.querySelector('#nav')
let closeButton = document.querySelector('#closeButton')
store.on('toggleMenu', function (store) {
	//menu.style.display = store.menuOpen ? 'block' : 'none'
	menu.style.width = store.menuOpen ? '300px' : '0px'
	menu.style.opacity = store.menuOpen ? 1 : 0
})
//auto-expand the side menu if the client is wide
if(document.body.clientWidth > 700) {
	store.toggleMenu()
}
let menuButton = document.querySelector('#menuButton')
menuButton.onclick = function () {
	store.toggleMenu()
}
closeButton.onclick = function () {
	store.toggleMenu()
}

/*
	Routing
*/
let titleText = document.querySelector('#title')
let frame = document.querySelector('#frame')
store.on('routeTo', function(store) {
	window.location.hash = store.page
	frame.src = store.page+".html"
})
for(let i = 1; i < menu.children.length; i++) {
	let elem = menu.children[i]
	let pageName = menu.children[i].textContent.trim().replace(' ','-').toLowerCase()
	elem.onclick = function () {
		console.log(pageName)
		store.routeTo(pageName)
	}
}
store.routeTo('about-me')