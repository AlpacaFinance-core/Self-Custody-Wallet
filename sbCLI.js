const readline = require('readline');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const BACKEND_URL = process.env.BACKEND_URL || 'https://shoebill-cli.onrender.com';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function startSpinner(text) {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  process.stdout.write('\x1B[?25l'); 
  const interval = setInterval(() => {
    process.stdout.write(`\r${frames[i]} ${text}`);
    i = (i + 1) % frames.length;
  }, 80);

  return {
    stop: (finalText) => {
      clearInterval(interval);
      
      process.stdout.write('\r\x1B[K');
      if (finalText) process.stdout.write(finalText + '\n');
      process.stdout.write('\x1B[?25h');
    },
  };
}

async function askChoice(prompt, options) {
  console.log(prompt);
  options.forEach((opt, i) => {
    console.log(`  ${i + 1}) ${opt}`);
  });

  while (true) {
    const raw = await ask('Enter choice number: ');
    const n = Number(raw);
    if (Number.isInteger(n) && n >= 1 && n <= options.length) {
      return options[n - 1];
    }
    console.log(`⚠️  Please enter a number between 1 and ${options.length}.`);
  }
}

async function askTextQuestion(prompt) {
  console.log(prompt);
  return ask('> ');
}

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BACKEND_URL);
    const payload = body ? JSON.stringify(body) : null;
    const client = url.protocol === 'https:' ? https : http;

    const req = client.request(
      {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        method,
        headers: payload
          ? {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload),
            }
          : {},
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = data ? JSON.parse(data) : {};
            if (res.statusCode >= 200 && res.statusCode < 300) resolve(parsed);
            else reject(new Error(parsed.error || `HTTP ${res.statusCode}`));
          } catch (e) {
            reject(e);
          }
        });
      }
    );

    req.on('error', (err) => {
      if (err.code === 'ECONNREFUSED') {
        reject(new Error(`Cannot reach backend at ${BACKEND_URL}. Is backend.js running?`));
      } else {
        reject(err);
      }
    });

    if (payload) req.write(payload);
    req.end();
  });
}

(async () => {
  try {
    
    const connectSpinner = startSpinner(`Connecting to Shoebill at ${BACKEND_URL}...`);
    let questions;
    try {
      const result = await request('GET', '/questions');
      questions = result.questions;
      connectSpinner.stop('🔌 Connected.');
    } catch (err) {
      connectSpinner.stop();
      throw err;
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      console.error('❌ Backend returned no questions.');
      process.exit(1);
    }

    console.log(`Welcome to Shoebill CLI Client. Press Ctrl+C to cancel.\n`);

    const answers = [];
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const prompt = `\x1B[1mQ${i + 1}. ${q.prompt}\x1B[0m`;

      let answer;
      if (q.type === 'choice' && Array.isArray(q.options)) {
        answer = await askChoice(prompt, q.options);
      } else {
        answer = await askTextQuestion(prompt);
      }

      answers.push({ question: q.prompt, answer });

  
      if (i < questions.length - 1) {
        const spinner = startSpinner('Validating...');
        await sleep(1900);
        spinner.stop('Please continue.');
        console.log('');
      }
    }

    rl.close();

    
    console.log('');
    const submitSpinner = startSpinner('/indexing...');
    try {
      await request('POST', '/submit', { answers });
      submitSpinner.stop('❌ Failed! Verify your entry and try again');
    } catch (err) {
      submitSpinner.stop('❌ Submission failed.');
      throw err;
    }
  } catch (err) {
    console.error('Error:', err.message);
    rl.close();
    process.stdout.write('\x1B[?25h'); 
    process.exit(1);
  }
})();


process.on('SIGINT', () => {
  process.stdout.write('\x1B[?25h\n');
  process.exit(0);
});