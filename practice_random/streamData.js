async function makeGetRequest() {
    // request and response
    // 1. all at once
    // 2. chunk chunk

    // doing chunk by chunk

    let text = "";
    const fetchStream = async function () {
        text = "";
        // this api also has to be streamed
        let response = await fetch("url");
        const decoder = new TextDecoder("utf-8");
        console.log(response.body);
        // steam always comes in response.body
        for await (const value of response.body) {
            const chunk = decoder.decode(value);
            text += chunk;
            console.log("text>>>>>", text);
        }
    }

    fetchStream();
}