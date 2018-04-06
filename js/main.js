console.log("if you're looking here I'm assuming you're a web dev\nHit the contact link if you need help or are hiring")
console.log('Github: https://github.com/saltyJeff')
console.log('LinkedIn: https://www.linkedin.com/in/jefferson-lee-a30466155/')
window.store = MicroFlux({
	store: {
		menuOpen: false
	},
	actions: {
		toggleMenu: function () {
			this.menuOpen = !this.menuOpen
		}
	}
})

/*
	Menu
*/
var menu = document.querySelector('#nav')
store.on('toggleMenu', function (store) {
	//menu.style.display = store.menuOpen ? 'block' : 'none'
	menu.style.width = store.menuOpen ? '300px' : '0px'
	menu.style.opacity = store.menuOpen ? 1 : 0
})
var bigScreen = document.body.clientWidth > 700;
window.onresize = function () {
	bigScreen = document.body.clientWidth > 700;
}
//auto-expand the side menu if the client is wide
if(bigScreen) {
	store.toggleMenu()
}
var menuButton = document.querySelector('#menuButton')
menuButton.onclick = function () {
	store.toggleMenu()
}
var navButtons = document.querySelectorAll('#nav > a');
for(var i = 0; i < navButtons.length; i++) {
	navButtons[i].onclick = function () {
		if(!bigScreen) {
			store.toggleMenu()
		}
	}
}

/*
	Fill with content
*/
var xpTemplate = document.querySelector('#xpTemplate')
var xpWrapper = document.querySelector('#xpWrapper')

fetch("content.json")
	.then(function(res) {return res.json()})
	.then(function(content)  {
		Object.keys(content.experience).forEach(function(xp) {
			var details = content.experience[xp]
			var templateContent = xpTemplate.content.cloneNode(true)
			templateContent.querySelector('h2').textContent = xp
			var detailList = templateContent.querySelector('ul')
			details.forEach(function (deet) {
				var li = document.createElement('li')
				li.textContent = deet
				detailList.appendChild(li)
			})	
    		xpWrapper.appendChild(
        		document.importNode(templateContent, true))
		});
	})

function toggleProject(e) {
	var project = e.parentElement;
	var expanded = project.style.width == '100%'
	if(expanded) {
		project.style.width = '100%'
	}
	else {
		project.style.width = '100%'
	}
}