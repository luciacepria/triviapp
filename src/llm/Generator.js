const API_URL = "http://localhost:11434/api/" 

export async function generate(prompt, model) {
    if (!prompt || !model) 
        return null
    const response = await fetch(API_URL + "generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            prompt: prompt,
            stream: false,
            model: model
         }),
    })
    const data = await response.json()
    const questionsObject = await JSON.parse(data.response)
    const questions = questionsObject.questions
    console.log(questions)
    if (questions == undefined)
        return null
    return questions
}

