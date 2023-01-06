$(function(){
    console.log("[!] Developed with ❤️ by Serity & Yash!");

    const _token = localStorage.getItem("$Award_token");
    if (_token) {
        try {
            let wss = new WebSocket(`wss://api-custom-giveaways.ml/v1/gateway?u=1&t=${_token}`);

            setInterval(() => {
                if (wss.readyState == WebSocket.CLOSED) {
                    wss = new WebSocket(`wss://api-custom-giveaways.ml/v1/gateway?u=1&t=${_token}`);
                };
            }, 5000);

            wss.onmessage = msg => {
                const data = JSON.parse(msg.data);
                if (data.type == "ERROR") console.log(`[!] Gateway Error: ${data.message}`);
                if (data.type == "CONNECT") console.log(`[!] Connected to gateway!`);
            };
        } catch {
            console.log("[!] Failed connecting to gateway.");
        };
    };
});