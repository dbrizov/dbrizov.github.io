(function () {
	function loadContent(contentFile, parentId) {
		$(parentId).load(contentFile);
	}
	
	function loadAbout() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/master/html/about.html", "#about");
	}
	
	function loadProjects() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/master/html/projects.html", "#projects");
	}
	
	// $("#btn-about").click(loadAbout);
	// $("#btn-projects").click(loadProjects);
	
	loadAbout();
	loadProjects();
}());
