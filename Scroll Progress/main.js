document.addEventListener("DOMContentLoaded", ()=>{
    const progressbarinner = document.querySelector('.progress-bar-inner');
    // console.log(progressbarinner)
    window.addEventListener('scroll', ()=>{
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent = Math.round(st / (sh - h.clientHeight) * 100);
        // let roundPrecent = Math.round(percent);
        progressbarinner.style.width = percent + "%";
        progressbarinner.innerText = percent + "%";
    })
})

