AOS.init();


// To cycle between images for Assignment-1

let sci = document.getElementById("Sci")
sci.addEventListener('click', () =>
	{
		if (sci.src.match("../images/science.png")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		{sci.src="../images/science2.png";
		}

		// The if/else statement allows the user to continuously shift between the 2 images

	else if (sci.src.match("../images/science2.png")) {
		sci.src="../images/science3.png";
	}

	else if (sci.src.match("../images/science3.png")) {
		sci.src="../images/science4.png";
	}

	else{
		sci.src="../images/science.png";
		}	
	}
)


// To cycle between images for Assignment-2

let com = document.getElementById("Com")
com.addEventListener('click', () =>
	{
		if (com.src.match("../images/comic.png")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		{com.src="../images/comic2.png";
		}

		// The if/else statement allows the user to continuously shift between the 2 images

	else if (com.src.match("../images/comic2.png")) {
		com.src="../images/comic3.png";
	}

	else if (com.src.match("../images/comic3.png")) {
		com.src="../images/comic4.png";
	}

	else{
		com.src="../images/comic.png";
		}	
	}
)

let sound = document.getElementById("Sound")
sound.addEventListener('click', () =>
	{
		if (sound.src.match("../images/sound.png")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		{sound.src="../images/sound2.png";
		}

		// The if/else statement allows the user to continuously shift between the 2 images

	else if (sound.src.match("../images/sound2.png")) {
		sound.src="../images/sound3.png";
	}

	else if (sound.src.match("../images/sound3.png")) {
		sound.src="../images/sound4.png";
	}

	else{
		sound.src="../images/sound.png";
		}	
	}
)

let video = document.getElementById("Video")
video.addEventListener('click', () =>
	{
		if (video.src.match("../images/video.png")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		{video.src="../images/video2.png";
		}

		// The if/else statement allows the user to continuously shift between the 2 images

	else if (video.src.match("../images/video2.png")) {
		video.src="../images/video3.png";
	}

	else if (video.src.match("../images/video3.png")) {
		video.src="../images/video4.png";
	}

	else{
		video.src="../images/video.png";
		}	
	}
)


