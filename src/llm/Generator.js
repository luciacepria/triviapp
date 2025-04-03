export const API_URL = "http://localhost:11434/api/" 

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export async function generate(prompt, model, url = API_URL) {
    if (!prompt || !model || !url || !isValidURL(url)) 
        return null
    const response = await fetch(url + "generate", {
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
    if (response.ok) {
        const data = await response.json()
        const questionsObject = await JSON.parse(data.response)
        const questions = questionsObject.questions
        if (questions == undefined)
            return null
        return questions 
    }
    return null
}

export async function getModels(url = API_URL) {
    const response = await fetch(url + "tags")
    if (response.ok) {
        const data = await response.json()
        const models = data.models.map(({ name }) => name)
        return models
    } else
        return []
}