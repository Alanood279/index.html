// قم بتغيير دالة getAIResponse إلى:
async function getAIResponse(message, history) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: history.map(msg => ({
                role: msg.role === 'ai' ? 'assistant' : 'user',
                content: msg.content
            })),
            temperature: 0.7
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}
