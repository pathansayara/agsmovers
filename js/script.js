document.addEventListener("DOMContentLoaded",() =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById (id),
        current=start,
        range = end - start,
        increament = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=> {
            current += increament;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);  
      }
      counter("count1", 0 , 1287, 3000);
      counter("count2", 100 , 10600, 2500);
      counter("count3", 0 , 2000, 3000);
      counter("count4", 0 , 49, 3000);
})