let myLibrary = []

class Book {

	constructor(title, author, numpages, read) {
		this.title = title;
		this.author = author;
		this.numpages = numpages;
		this.read = read;
	}
}

function addBookToLibrary(book, library) {

  library.push(book);
  return library;

}

function render(object) {

	$("#myLibrary").remove();

	var div = document.createElement("div");
	div.setAttribute('id', "myLibrary");

	for (index in object) {
		
		var line = document.createElement("div");
		line.setAttribute('id', index);
		line.innerHTML = object[index].title + ", " + object[index].author + ", " + object[index].numpages;
		
		var readStatus = document.createElement("INPUT");
		readStatus.setAttribute("type", "checkbox");
		if (object[index].read == true) {
			readStatus.setAttribute("checked", true);
		}
		readStatus.addEventListener('click', function() {
			myLibrary[index].read = !myLibrary[index].read;
			render(myLibrary);  
		}, false);
		line.appendChild(readStatus);

		var removal = document.createElement("button");
		removal.innerHTML = "Remove";
		removal.addEventListener('click', function() {
			document.getElementById(index).remove();
			myLibrary.pop(index);
			render(myLibrary);
		}, false);
		line.appendChild(removal);

		div.appendChild(line);
	}
	
	document.body.appendChild(div);

};

$(".newbook").click(function() {
	$("form").show();
});


$(".submitbook").click(function() {

	console.log(document.getElementById("read").getAttribute("checked"));
	var book = new Book($("#author").val(), $("#title").val(), $("#numpages").val(), document.getElementById("read").checked);
	addBookToLibrary(book, myLibrary);
	render(myLibrary);
	$("form").hide();

});