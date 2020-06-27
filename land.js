// let but = document.getElementById("butterfly")
// but.addEventListener('mouseenter', () =>
// 	{but.src="images/ButterflyA4.png";}
// 	)





		// if (but.src.match("images/ButterflyA.png")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
		// {but.src="images/ButterflyA4.png";
		// }

	// 	// The if/else statement allows the user to continuously shift between the 2 images

	// else{
	// 	but.src="images/ButterflyA.png";
	// 	}	
	// }




// let but = document.getElementById("butterfly")
// but.addEventListener('mouseleave', () =>
// 	{but.src="images/ButterflyA4.png";}
// 	)
// 	

AOS.init();


//Switched to just having a function for mouseenter and mouseleave instead of clicking on the butterfly


function flap1(pic){
pic.src="images/ButterflyA4.png";
document.getElementById("tex").textContent = "Indeed it is!";
}

function flap2(pic){
pic.src="images/ButterflyA.png";
document.getElementById("tex").textContent = "Is this a personal website?";
// document.getElementById("tex").style.right= 40%;
}


// let but = document.getElementById("butterfly")
// but.addEventListener('click', () =>
// 	{
// 		if (yas.src.match("Yasser.jpg")) // I just added an id to each image called in the .html file and the interactivity is added by changing the src name of the images used when matched with the right id
// 		{yas.src="Yasser2.jpg";
// 		}
// 	}
// 	)



// function openPage(pageUrl){
//     window.location.href = pageUrl;
//   }

//   // onclick="openPage(home.html)"

// function openPageNew(pageUrl){
// window.open(pageUrl);
// }


