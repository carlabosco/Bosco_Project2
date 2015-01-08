var bio = {
	"name": "Carla Bosco",
	"role": "Web Developer",
	"contacts": {
		"mobile": "55 555-5555",
		"email": "carlabosco@gmail.com",
		"github": "carlabosco",
		"twitter": "carlabosco",
		"location": "Redmond, WA"
	},
	"welcomeMessage": "I love a good challenge. Can I help you with yours?",
	"skills": ["Front-end development", "Tech Writing", "User Experience"],
	"bioPic": "images/abstract.jpg",
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var cont = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedlocation;

	$("#header").prepend(formattedName + formattedRole + formattedBioPic);	
	$("#header").append(formattedWelcomeMsg);
	$(cont).appendTo("#topContacts, #footerContacts");
	$("#header").append(HTMLskillsStart);
 
 	for (skill in bio.skills) {
 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
 		$("#skills").append(formattedSkill);
 	}
}
bio.display();


var education = {
	"schools": [
		{
		"name": "UnB",
		"location": "Brasilia, Brazil",
		"degree": "BA",
		"majors": "International Relations",
		"dates": 2003,
		"url": "http://unb.br"
		},
		{
		"name": "UCSC Extension",
		"location": "Santa Clara, California",
		"degree": "Certificate",
		"majors": "Technical Communication",
		"dates": 2016,
		"url": "http://http://www.ucsc-extension.edu/"
		}
	],

	"onlineCourses": [
		{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2014,
		"url": "http://www.udacity.com"
		},
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
		}
	]
}

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();

var work = {
	"jobs": [
		{
		"title": "Volunteer",
		"employer": "Volunteer Match",
		"location": "Zurich, Switzerland",
		"dates": "2014 - present",
		"description": "Portuguese-English translations, social media manager"
		},
		{
		"title": "Administrative Analyst",
		"employer": "DNIT",
		"location": "Brasilia, Brazil",
		"dates": "2006 - 2008",
		"description": "Communicate with members of the Brazilian Congress"
		}
	]
}

work.display = function() {

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

var projects = {
	"projects": [
		{
		"title": "Awesomizer",
		"dates": "2013",
		"description": "Looking for an awesome app? Awesomizer!",
		"images": [
			"images/abstract4.jpg", "images/city1.jpg"
		]
		},

		{
		"title": "Kontrol",
		"dates": "2014",
		"description": "Easy control for development projects",
		"images": [
			"images/nature2.jpg", "images/nature3.jpg"
		]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
	projects.display();



$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


$("#main").append(internationalizeButton);

var inName = function(oldName) {
	var newName = oldName;
	var names = oldName.split(" ");
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase;
	names[1] = names[1].toUpperCase;
	newName = names.join(" ");
	return newName;
}


