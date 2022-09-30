function mouseLeave() {
    document.getElementById("title-text").style.display = "block";
    document.getElementById("intro").style.display = "none";

}

function intro() {
    document.getElementById("intro").style.display = "block";
    document.getElementById("intro").style.fontSize = "20px";
    document.getElementById("intro").style.height = "259px";
    document.getElementById("intro").style.lineHeight = "35px";
    document.getElementById("intro").style.margin = "10px";
    document.getElementById("title-text").style.display = "none";
}

function mtpIntro() {
    document.getElementById("mtp-intro").style.display = "block";
    document.getElementById("mtp-intro").style.fontSize = "20px";
    document.getElementById("mtp-intro").style.height = "259px";
    document.getElementById("mtp-intro").style.lineHeight = "35px";
    document.getElementById("mtp-intro").style.margin = "10px";
    document.getElementById("title-text").style.display = "none";
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


