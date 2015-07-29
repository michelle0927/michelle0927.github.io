var bio = {
	"name": "Michelle Bergeron",
	"role": "Web Developer",
	"welcomeMessage": "<br>Hello. My name is Michelle and I live in Broomfield, CO. I am looking for full-time employment as a Web Developer.<br><br>",
	"contacts": {
		"mobile": "831-465-4820",
		"email": "michellelbergero@hotmail.com",
		"github": "michelle0927",
		"location": "Broomfield, CO"
	},
	"skills": ["HTML", "CSS", "JavaScript", "JQuery", "Perl", "PHP", "MySQL"],
	"bioPic": "images/me.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "IBM",
			"title": "Software Receive Call Agent",
			"dates": "05/2015 - Present",
			"location": "Boulder, CO",
			"description": "Receive inbound calls from IBM customers, set up support tickets for them based on information provided, and route the customer to the proper technical group."
		},
		{
			"employer": "SmithMicro Software",
			"title": "Web Developer",
			"dates": "03/2013 - 12/2014",
			"location": "Watsonville, CA",
			"description": "Maintained and developed internal and external websites and applications using Perl, PHP, HTML5, Javascript, CSS3, Python, SQL, JQuery, AJAX, SVN, UX/UI. In this job, I worked on developing product microsites, as well as updating and maintaining internal systems related to serial number generation & activation/deactivation and online product delivery."
		},
		{
			"employer": "OfficeMax",
			"title": "Impress Associate",
			"dates": "06/2012 - 03/2013",
			"location": "Santa Cruz, CA",
			"description": "Assisted customers and completed projects within the copy center of an office supply retail store."
		},
		{
			"employer": "ClickAway Corporation",
			"title": "Web Developer",
			"dates": "05/2011 - 09/2011",
			"location": "Campbell, CA",
			"description": "Built an online internet application for keeping track of employee hours, tasks, etc. This was built using primarily PHP, JQuery, Javascript, MySQL, CSS, and AJAX. Updated and added features to other sites as needed."
		},
		{
			"employer": "California Hydroponics",
			"title": "Owner/Bookkeeper",
			"dates": "2006 - 2012",
			"location": "Santa Cruz, CA",
			"description": "Managed financial records using Quickbooks and Quickbooks POS. Responsible for payroll, accounts recievable and accounts payable. Greeted customers, helped customers find products, and used cash register to complete transactions."
		},
		{
			"employer": "Eight3OneDesign",
			"title": "Web Developer",
			"dates": "2008 - 2010",
			"location": "Santa Cruz, CA",
			"description": "Developed and maintained various websites as needed. Completed work within specified deadlines."
		},
		{
			"employer": "Web Network Billing",
			"title": "Web Developer",
			"dates": "06/2012 - 03/2013",
			"location": "Houston, TX",
			"description": "Developed and maintained five seperate E-Commerce websites using OsCommerce. Responded to customer emails. Entered and edited inventory data. Maintained websites using HTML, PHP, MySQL, CSS, and Javascript."
		},
		{
			"employer": "Universal Computer Systems",
			"title": "COBOL Programmer",
			"dates": "2002 - 2003",
			"location": "Houston, TX",
			"description": "Maintained and made improvements to programs written in COBOL for use in the automobile industry. Also self-tested all code and kept track of changes through version control software."
		}
	]
}

var education = {
	"schools": [
		{
			"schoolName": "University of Houston",
			"degree": "B.S.",
			"majors": ["Computer Information Systems"],
			"dates": 2001,
			"location": "Houston, TX",
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud245-nd"
		},
				{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
				{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud775-nd/"
		},
				{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud882-nd"
		},
				{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "MotionArtist.tv",
			"dates": "2014",
			"description": "An interactive social site for sharing animation created with MotionArtist software.",
			"images": ["images/motionartisttv.jpg"],
			"url": "http://www.motionartist.tv"
		}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedLocation);

	//$("#header").append(formattedImage);
	//$("#header").append(formattedWelcomeMessage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var skill = 0; skill < bio.skills.length; skill++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].schoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);

		for (var major = 0; major < education.schools[school].majors.length; major++) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	$("#education").append("<br>" + HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);

		$(".online-entry:last").append(formattedOnlineName + formattedOnlineSchool);
		$(".online-entry:last").append(formattedOnlineDates);
		$(".online-entry:last").append(formattedOnlineURL);
	}
}

projects.display = function() {
	for (var p in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		if (projects.projects[p].url) {
			formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[p].url);
		}
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		for (var i = 0; i < projects.projects[p].images.length; i++) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

bio.display();
work.display();
education.display();
projects.display();

$("#map-div").append(googleMap);