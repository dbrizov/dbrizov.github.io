(function () {
	function loadContent(contentFile, parentId) {
		$(parentId).load(contentFile);
	}
	
	function loadAbout() {
		loadContent("./html/about.html", "#main_content");
	}
	
	function loadProjects() {
		loadContent("./html/projects.html", "#main_content");
	}
	
	$("#btn-about").click(loadAbout);	
	$("#btn-projects").click(loadProjects);
}());
