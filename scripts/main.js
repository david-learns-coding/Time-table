const ALL_ELEMS = document.getElementsByTagName("input");

const CACHE_NAME = "time_table_data";

const SAVE_BTN = document.getElementById("save_btn");

SAVE_BTN.addEventListener("click", () => {
	let allData = [];

	for (let elem_num = 0; elem_num < ALL_ELEMS.length; elem_num++) {
		const element = ALL_ELEMS.item(elem_num);

		allData.push(element.value);
	}

	localStorage.setItem(CACHE_NAME, JSON.stringify(allData));
	SAVE_BTN.style.visibility = "hidden";
	$(".save_toast").toast("show")
	window.setTimeout(() => {
			$(".save_toast").toast("hide");
	}, 2000
	)
});

window.addEventListener("load", () => {
	if (localStorage.getItem("visited") == null) {
		$(".instructions_toast").toast("show");
		window.setTimeout(() => {
			$(".instructions_toast").toast("hide");
		}, 6000);
		localStorage.setItem("visited", "true");
	}
});

window.addEventListener("load", () => {
	let allData = JSON.parse(localStorage.getItem(CACHE_NAME));


	for (let elem_num = 0; elem_num < ALL_ELEMS.length; elem_num++) {
		const element = ALL_ELEMS.item(elem_num);

		if (allData !== null) {
			element.value = allData[elem_num];
		}

		element.addEventListener("keydown", () => {
			SAVE_BTN.style.visibility = "visible";
		});

	}
});
