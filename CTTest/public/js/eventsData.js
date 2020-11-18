console.log("============> events here on will be logged")
console.log("============> using the api to send message to the middleware node server")


const eventAPI = async() => {

    var headers = {
        // 'X-CleverTap-Account-Id': 'ACCOUNT_ID',
        // 'X-CleverTap-Passcode': 'PASSCODE',
        'Content-Type': 'application/json'
    };

    var dataString = { event_name: "App Launched" };
    var bodyString = JSON.stringify(dataString);


    try {
        const response = await fetch('http://localhost:3030/route/events', {
            method: 'POST',
            headers: headers,
            body: bodyString

        })
        const finalresponse = await response.json();

        console.log(JSON.stringify(finalresponse));
    } catch (e) {
        console.log("error " + e);
    }

}