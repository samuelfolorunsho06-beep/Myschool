const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const shareBtn=document.getElementById("shareBtn"),shareStatus=document.getElementById("shareStatus");
shareBtn?.addEventListener("click",async()=>{
  const data={title:"Future Leaders College",text:"Explore this digital school experience for Future Leaders College — JSS1 to SS3.",url:location.href};
  try{
    if(navigator.share){await navigator.share(data);shareStatus.textContent="Thanks for sharing."; }
    else{await navigator.clipboard.writeText(location.href);shareStatus.textContent="Link copied — send it on WhatsApp or social media."; }
  }catch(e){if(e.name!=="AbortError")shareStatus.textContent="Copy the page link from your browser and share it."; }
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{}));