(function () {
	function loadContent(contentFile, parentId) {
		$(parentId).load(contentFile);
	}
	
	function loadAbout() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/54505042e7bfdfa4f6ed7ed51a488253d3d75929/html/about.html", "#main_content");
	}
	
	function loadProjects() {
		loadContent("https://raw.githubusercontent.com/dbrizov/dbrizov.github.io/54505042e7bfdfa4f6ed7ed51a488253d3d75929/html/projects.html", "#main_content");
	}
	
	$("#btn-about").click(loadAbout);
	$("#btn-projects").click(loadProjects);
	
	loadAbout();
}());
