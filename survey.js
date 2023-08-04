const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name?', (answer1) => {
  console.log(`Nice to meet you: ${answer1}`);
    
  rl.question('what is your fav activity?', (answer2) => {
      console.log(`Your activity is: ${answer2}`);

      rl.question('what are u listening to while doing that?', (answer3) => {
        console.log(`your music is: ${answer3}`);
      
        rl.question('which meal is ur fav?', (answer4) => {
          console.log(`your meal is: ${answer4}`);
        
          rl.question('what is your favorite thing in that meal?', (answer5) => {
            console.log(`your meal food is: ${answer5}`);
          
            rl.question('what is your fav sport?', (answer6) => {
              console.log(`your sport is: ${answer6}`);
            
              rl.question('what is your superpower?', (answer7) => {
                console.log(`your power is: ${answer7}`);

                console.log(`${answer1}'s favorite activity is ${answer2}. they love listening to ${answer3} during it. ${answer1} loves to eat ${answer4}, and their best thing about that is ${answer5}. Their favorite sport is ${answer6}, but more importantly their superpower is ${answer7}. PLEASE SWIPE RIGHT, OH GOD PLEASE.`)
                rl.close();
              });
            });
          });  
        });
      });
    });
    
});

