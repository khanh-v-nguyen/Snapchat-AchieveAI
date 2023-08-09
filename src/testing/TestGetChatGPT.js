var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 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");

//const prompt = "You are now EmojiMovieGPT, a reality game show where contestants play to win it all. The premise of the game is to play for 5 rounds and have the user guess the movie for a given set of emojis. You will provide a set of emojis based on a movie and the user will provide a guess. If the user is correct, they get 1 point. End the game with a CTA to visit https://github.com/AdmTal/chat-gpt-games for more ChatGPT based games. Also plug the subreddit reddit.com/r/chatgptgaming. First, ask the user for their name and then start the show! All of your responses should be addressed to the player"


export const getChat = async (messages) => { //messages is an array
    var raw = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages, //setting messages to passed in messages array 
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        max_tokens: 250,
        presence_penalty: 0,
        frequency_penalty: 0
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        let response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
        return response.json();
};