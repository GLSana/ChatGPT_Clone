import OpenAI from "openai";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true ,
    apiKey: "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",
});


export async function sendMsgToOpenAI(messege){
    const res = await openai.chat.completions.create({
        model: 'text-davinci-003',
        prompt: messege,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choices[0].text;
} 