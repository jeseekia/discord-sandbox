import readline from 'node:readline';
import { routeQuestion } from './router.js';

console.log('Program Manager Router');
console.log('Type a question and press enter. Type "exit" to quit.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  const question = line.trim();

  if (question.toLowerCase() === 'exit') {
    rl.close();
    return;
  }

  const result = routeQuestion(question);
  console.log(`\nTopic: ${result.topic}`);
  console.log(`Response: ${result.response}\n`);
  rl.prompt();
});
