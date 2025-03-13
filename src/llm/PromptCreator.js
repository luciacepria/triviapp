export const BASE_PROMPT = `
    As a trivia question generator, provide me with 3 questions following the format below that will be parsed into the application.
    Keep the questions concise and simple, but not too easy.
    Do not generate any header nor footer, just the questions in the format below. 
    Start with the { directly and end with }.
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

