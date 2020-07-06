const ALL_ELEMS = document.getElementsByTagName("input");

const CACHE_NAME = "time_table_data";

document.getElementById("save_btn").addEventListener("click", () => {
	let allData = [];

	for (let elem_num = 0; elem_num < ALL_ELEMS.length; elem_num++) {
		const element = ALL_ELEMS.item(elem_num);

		allData.push(element.value);
	}

	localStorage.setItem(CACHE_NAME, JSON.stringify(allData));

});

window.addEventListener("load", ()=> {

    if (localStorage.getItem("visited") == null ) {
        alert(" Make your changes then press the cave changes button on top left. your data will be available even if page reloads,but YOU SHOULDN'T CLEAR THE CACHE");
        localStorage.setItem("visited", "true")
    }


})


window.addEventListener("load", () => {

    let allData = JSON.parse(localStorage.getItem(CACHE_NAME))


    for (let elem_num = 0; elem_num < ALL_ELEMS.length; elem_num++) {
			const element = ALL_ELEMS.item(elem_num);

        element.value = allData[elem_num];
		}

})