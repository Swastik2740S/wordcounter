const userText=document.getElementById("userText");
const btn = document.querySelectorAll(".btn");
const noOfChar  = document.getElementById("noOfChar");
const noOfWords = document.getElementById("noOfWords");
const noOfSent = document.getElementById("noOfSent");
const readingTime = document.getElementById("readingTime");
const whiteSpaces = document.getElementById("whiteSpaces");
let paragraphs = document.getElementById("paragraph");

btn.forEach(element => {
    element.addEventListener('click',(e)=>{

        if(e.target.textContent==="Clear All"){
            userText.value=""
        }
        
        else if(e.target.textContent === "Copy"){
            userText.select();  
            document.execCommand("Copy")

        }
        
        else if(e.target.textContent == "Upper Case"){
            userText.style.textTransform="uppercase";
        }else if(e.target.textContent == "Lower Case"){
            userText.style.textTransform="lowercase";
        }else{
            let textArr = userText.value.split(" ");
            console.log(textArr);
            textArr=textArr.filter((elem)=> {e
                if (elem !==""){
                    return elem
                }

            })
            userText.value = textArr.join(" ")
                
            }
    })
    
});
userText.addEventListener("keyup",() =>{
    textDetails()
})
function textDetails(){
    let textArr = userText.value.split(" ");
    whiteSpaces.textContent = textArr.length-1;
    textArr = textArr.filter((elem) =>{
    if(elem !== ""){
        return elem
    }
    })
    noOfChar.textContent = userText.value.length;
    noOfWords.textContent = textArr.length;

    let sent=userText.value.split(/[.|!|?]+/g);
    noOfSent.textContent=sent.length-1;

    let para = userText.value.split(/\n/);
    paragraphs.textContent=para.length;

    let totalsec = 60/275*userText.value.length;
    let min =Math.floor(totalsec /60);
    let sec = Math.floor(totalsec%60);
    min = min<10?`0${min}` : min;
    sec = sec<10?`0${min}` : sec;
    readingTime.textContent = `${min} min ${sec} sec`

}



