let questions = []
let categories = ["Geography", "Entertainment", "History", "Art and literature", "Science and Nature", "Sports and Leisure"]
let gameDificulty = "Masy"

export function setQuestions(dicc){
    questions = [...questions, ...dicc];
}

export function setCategories(cat){
    categories = cat;
}

export function setGameDificulty(gameDifId){
    if(gameDifId == 1){
        gameDificulty = "Easy"
    }else if(gameDifId == 2){
        gameDificulty = "Medium"
    }else{
        gameDificulty = "Hard"
    }
}

export function getBasePrompt() {

    return(
        `
    As a trivia question generator, provide me with 3 questions following the format below that will be parsed into the application.
    Generate the quesitons regadin this categoiry or categories ${categories}
    Do not generate any of this questions or any variations of them  ${questions.map(q => `"${q.question}"`).join(", ")}
    Generate the questions according to this game dificulty ${gameDificulty}, but still keeping them concise and generating 3 and only 3
    Do not generate any header nor footer, just the questions in the format below. 
    Start with the { directly and end with }, do not generate '''JSON''' at any cost, always start with { and end with }.
    Do not generate them inside a code block, just plain text.
    {
        "questions" : [
            {
                "question" : "Question text",
                "answer" : "Answer text"
            },
            {
                "question" : "Question text",
                "answer" : "Answer text"
            },
            {
                "question" : "Question text",
                "answer" : "Answer text"
            }
        ]
    }
`
    );
}

