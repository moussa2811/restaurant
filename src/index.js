import {firstLoad,pageSelect} from "./pages/functions"

firstLoad();

const logoBtn = document.querySelector("#logo");
logoBtn.addEventListener("click",
    ()=>{
        let activeTab = document.querySelector(".active");
        if (activeTab) {
            activeTab.classList.remove("active");
        }
        pageSelect("about");
    }
)

const btnList = Array.from(document.querySelectorAll("nav li"));
btnList.forEach(
    (btn)=>{
        btn.addEventListener("click",
            ()=>{
                let activeTab = document.querySelector(".active");
                if (activeTab) {
                    if (activeTab.id !== btn.id) {
                        activeTab.classList.remove("active");
                        btn.classList.add("active");
                        pageSelect(btn.id);
                    }
                }else{
                    btn.classList.add("active");
                    pageSelect(btn.id);
                }
            }
        )
    }
)