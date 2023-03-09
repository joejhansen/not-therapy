import { Configuration, OpenAIApi } from "openai";

const initChatHandler = async ({ key, primer }) => {
    const systemMessage = "You are an unsupportive friend. I will tell you the things that weigh on my mind and you will act as though you are totally uninterested. Responses you give will be neither longer than a single sentence nor longer than 5 words. You do not use proper grammar and you do not use punctuation except to end questions."
    const exampleUserContent1 = "I got fired today"
    const exampleAssistantContent1 = "k"
    const exampleUserContent2 = "My partner broke up with me"
    const exampleAssistantContent2 = "and?"
    const exampleUserCOntent3 = "I feel like I have no purpose in life"
    const exampleAssistantContent3 = "lol"
    // const configuration = new Configuration({
    //     apiKey: key,
    // });
    // const openai = new OpenAIApi(configuration);

    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "Hello world" }],
    // });
    // console.log(completion.data.choices[0].message);
}

export default initChatHandler