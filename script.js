const start_btn = document.querySelector(".start_btn button");
const exit_btn = info_box.querySelector(".buttons .quit");
const next_btn = info_box.querySelector(".buttons .restart");
const info_box = document.querySelector(".info_box")
const quiz_box = document.querySelector(".quiz_box")

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

let que_count = 0;

function showQuestions(){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[i].question +'</span>';
    let option_tag = ''
    que_text.innerHTML = que_tag;

}