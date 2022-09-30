function myFunction() {
    document.getElementById("about-me").style.display = "block";
    document.getElementById("about-me").style.margin = "10px";
    document.getElementById("about-me").style.fontSize = "20px";
    document.getElementById("about-me").style.height = "259px";
    document.getElementById("title-text").style.display = "none";
}


function aboutMe() {
    document.getElementById("about-me").style.display = "none";
    document.getElementById("title-text").style.display = "block";
}


/* 

<button onclick="getHeight()">Get height</button>

<span class="output"></span>

<script type="text/javascript">
    function getHeight() {
          
        divElement = document.querySelector("#title-bar");
    
        elemHeight = divElement.offsetHeight;
    
        document.querySelector(".output").textContent
                = elemHeight + "px";
    }
    </script>

*/


