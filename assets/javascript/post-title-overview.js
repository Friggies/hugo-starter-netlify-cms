let overview = document.getElementById("title-overview");
let titles = Array.from(document.getElementsByTagName("h2"));
titles.forEach(title => {
    let li = document.createElement("li");
    li.innerHTML = "- <a href='#"+title.innerText.toLowerCase().replace(" ", "-")+"'>"+title.innerText+"</a>";
    if (overview != null) {
        overview.appendChild(li);
    }
});