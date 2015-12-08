(function () {
	function loadContent(contentFile, parentId) {
		$(parentId).load(contentFile);
	}
	
	function loadAbout() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/master/html/about.html", "#main_content");
	}
	
	function loadProjects() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/master/html/projects.html", "#main_content");
	}
	
	$("#btn-about").click(loadAbout);
	$("#btn-projects").click(loadProjects);
	
	loadAbout();
}());
