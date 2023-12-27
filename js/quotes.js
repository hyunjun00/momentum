const quotes=[
    {
        quote: "눈 마주치면 내 일이 된다.",
        author: "직장인",
    },
    {
        quote: "할 줄 안다고 하면 내 일이 된다.",
        author: "직장인",
    },
    {
        quote: "아이디어 내면 내 일이 된다.",
        author: "직장인",
    },
    {
        quote: "일을 너무 잘하면 내 일이 된다.",
        author: "직장인",
    },
    {
        quote: "야근하다보면 내일이 된다.",
        author: "직장인",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "내일이란 오늘의 다른 이름일 뿐이다.",
        author: "윌리엄 포크너",
    },
    {
        quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "오늘이란 신어야 할 신발과 같은 것이다.",
        author: "스티브 올렌",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;