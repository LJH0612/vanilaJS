const quotes = [
    {
        quote: "올바로 작동하지 않는다고 걱정하지 마라. 모든 게 잘 되었다면, 내가 할 일이 없어진다.",
        author: "Mosher’s Law of Software Engineering",
    },
    {
        quote: "코드 수를 기준으로 프로그램의 진도를 측정하는 것은 비행기 제작 진도를 무게로 측정하는 것과 같다.",
        author: "Bill Gates",
    },
    {
        quote: "“코딩”이란 사회직업에서 “도굴”보다는 위이면서, “관리”의 바로 밑 어디엔가 위치하는 직업이다.",
        author: "Gerald Weinberg, 컴퓨터 과학자, 소프트웨어 개발관련 인류학 및 심리학 교수",
    },
    {
        quote: "항상 이런 생각으로 개발에 임하라. “내 소스를 유지보수하게 될 개발자는 내가 어디 살고 있는지 알고 싶어하는 과격한 사이코패스일 것이다.”",
        author: "Martin Golding",
    },
    {
        quote: "먼저 문제를 풀고 그 다음에 개발을 하라.",
        author: "John Johnson, 미국의 유명한 소프트웨어 강사",
    },
    {
        quote: "“낙관론”은 프로그래머라는 직업 관점에서 위험물이다. “피드백”이 해결책이다.",
        author: "Kent Beck, Extreme 프로그래밍 방법론의 창시자",
    },
    {
        quote: "아무리 구조가 잘 되어 있더라도, 프로그래머가 나쁜 프로그램을 만드는 걸 막아주는 프로그래밍 언어는 없다.",
        author: "Larry Flon, 구조적 프로그래밍에 대한 연구 저자",
    },
    {
        quote: "컴퓨터 언어를 설계하는 건 공원을 산책하는 것과 같다. “쥬라기 공원!!!”",
        author: "Larry Wall, Perl 언어의 창시자",
    },
    {
        quote: "무료 소프트웨어를 두려워하는 사람들은 자신들의 제품이 그것보다 못하기 때문이다.",
        author: "David Emery, 오픈소스 개발자",
    },
    {
        quote: "소프트웨어는 섹스와 같아서 공짜가 더 좋다.",
        author: "Linus Torvalds, 리눅스 토발즈",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;