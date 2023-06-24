

let tablink1 = document.getElementById("skl");
let tablink2 = document.getElementById("edu");
let tabcontent = document.getElementsByClassName("tab-contents")[0];
let tabcontent_1 = document.getElementsByClassName("tab-contents")[1];

const funk = () =>{
    tablink2.classList.remove("active-link");
    tabcontent_1.classList.remove("active-tab");
    tablink1.classList.add("active-link");
    tabcontent.classList.add("active-tab");
}
const funk_2 = () =>{
    tablink1.classList.remove("active-link");
    tabcontent.classList.remove("active-tab");
    tablink2.classList.add("active-link");
    tabcontent_1.classList.add("active-tab");
}

tablink1.addEventListener("click", funk);
tablink2.addEventListener("click", funk_2);

let bar = document.getElementById("bar");
let sidemenu = document.getElementById("sidemenu");
let cancl = document.getElementById("crss")

bar.addEventListener("click", () =>{
    sidemenu.classList.add("showsidebar");
})
cancl.addEventListener("click", ()=>{
    sidemenu.classList.remove("showsidebar");
})
document.addEventListener("mouseup", (e)=>{
    if(!sidemenu.contains(e.target)){
        sidemenu.classList.remove("showsidebar");
    }
})
// ...........contact-Form...........

const scriptURL = 'https://script.google.com/macros/s/AKfycbx-sN-OecED7NF5klNM0bGnr4AqtDQk0ydTYxpdgzvmsiSwU5kYK-vK4KZG9MiXfjUqhA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(()=>{
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
