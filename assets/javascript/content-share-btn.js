document.getElementById("content-share-btn").addEventListener("click", function() {
    navigator.share(
        {
            url: '{{ .Permalink }}'
          }
    )
})