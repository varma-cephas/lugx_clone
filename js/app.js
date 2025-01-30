const hero_image_discount=document.querySelector("#hero_image_discount");
const primary_header =document.querySelector("#primary-header")
const scrollWatchMan=document.createElement("div");

scrollWatchMan.setAttribute("data-scroll-watcher", "");

hero_image_discount.append(scrollWatchMan);

const navObserver=new IntersectionObserver((entries)=>{
    // console.log(entries)
    primary_header.classList.toggle("changeNav", !entries[0].isIntersecting)
})

navObserver.observe(scrollWatchMan)