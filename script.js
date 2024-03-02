var arr=[
    {name:'spider',img: "./images/115619.jpg"},
    {name:'tekken',img: "./images/tekken8.jpg"},
    {name:'boy',img: "https://i.pinimg.com/564x/88/8a/d5/888ad5496d44a7b10ed8557318a6d455.jpg"},
    {name:'girl',img: "./images/coolgirl.jpg"},
    {name:'mirrorgirl',img: "https://i.pinimg.com/564x/b2/18/e6/b218e6d4adf737be5ae751b72e9748d3.jpg"},
    {name:'beachgirl',img: "https://i.pinimg.com/564x/15/f5/03/15f503c961828d193b6b79e8d4bbb0ad.jpg"},
    {name:'jinkazama',img: "https://i.pinimg.com/564x/2f/45/08/2f4508c7792fcffe71e65c1cc8af6fc9.jpg"},
    {name:'emy',img: "https://i.pinimg.com/564x/bd/8a/4d/bd8a4dda65cc6e6c64f3da6892abceb8.jpg"},
    {name:'kinzy',img: "https://i.pinimg.com/564x/b8/51/5d/b8515dbbc14bfe75c63ec8f508337331.jpg"},
    {name:'wallpaper',img: "https://i.pinimg.com/564x/84/39/1e/84391ebc5a154cacaf50c6003a103282.jpg"},
    {name:'beuatygirl',img: "https://i.pinimg.com/564x/b5/9f/0d/b59f0dda21c3b645cd614e64184f8064.jpg"},
    {name:'cat',img: "https://i.pinimg.com/564x/e8/b5/c7/e8b5c7b61bd8e19e7a6dda2a50bb4daa.jpg"},
    {name:'rat',img: "https://i.pinimg.com/564x/93/95/84/9395847a93b4f8b1af37905351af2cb8.jpg"},
    {name:'brokengirl',img: "https://i.pinimg.com/564x/b9/fd/c3/b9fdc3fe4d6153afad8c9e321d8c6623.jpg"},
    
]
function showcards(){
   var clutter='';
    arr.forEach(function(val){
     clutter+=`<div class="box">
     <img class="cursor-pointer" src=${val.img} alt="image">
     <div class="caption">pins</div>
 </div>`
 document.querySelector('.container').innerHTML=clutter;
});
}


function handleSearch(){
    var input = document.querySelector('#searchinput');
    var overlay = document.querySelector('.overlay');
    var searchdata=document.querySelector('.searchdata'); 
    input.addEventListener('focus', function() {
        overlay.style.display='block'
    });
    input.addEventListener('blur', function() {
        overlay.style.display='none'
        searchdata.style.display="none";
    });


    input.addEventListener('input',function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj){
            clutter+=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })
        searchdata.style.display="block";
        searchdata.innerHTML=clutter;
    });
}
showcards();
handleSearch();

