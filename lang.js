// Shows the page in English, Uzbek or Russian: ?lang=xx, then the last choice, then the phone's language.
(function(){
  var ok=["en","uz","ru"],q=(location.search.match(/[?&]lang=(\w\w)/)||[])[1],s=null;
  try{s=localStorage.getItem("trackme-site-lang")}catch(e){}
  var n=(navigator.language||"en").slice(0,2).toLowerCase();
  function set(l){document.documentElement.lang=l;try{localStorage.setItem("trackme-site-lang",l)}catch(e){}
    var b=document.querySelectorAll(".langs button");for(var i=0;i<b.length;i++)b[i].classList.toggle("on",b[i].getAttribute("data-set")===l);
    var t=document.querySelector("title[data-"+l+"]");if(t)document.title=t.getAttribute("data-"+l)}
  set(ok.indexOf(q)>=0?q:ok.indexOf(s)>=0?s:ok.indexOf(n)>=0?n:"en");
  document.addEventListener("click",function(e){var b=e.target.closest("[data-set]");if(b)set(b.getAttribute("data-set"))});
})();
