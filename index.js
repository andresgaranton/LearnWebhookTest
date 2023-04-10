//Javascript index.js for https trigger in function apps in Azure that waits for the wiki home page for the github repo, LearnWebhoojTest, in andresgaranton to be updated

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    if (req.body.pages[0].title){
        context.res = {
            body: "Page is " + req.body.pages[0].title + ", Action is " + req.body.pages[0].action + ", Event Type is " + req.headers['x-github-event']
        };
     }
     else {
        context.res = {
            status: 400,
            body: ("Invalid payload for Wiki event")
        };
    }
}
