const questions = [
  {
    question: "In One Piece who is the user of the Goro Goro no mi? ",
    answers: [
      { text: "A) White-Beard", correct: false },
      { text: "B) Sengoku ", correct: false },
      { text: "C) Enel", correct: true },
      { text: "D) Doflamingo", correct: false },
    ],
  },
  {
    question:
      "Which character in Attack on Titan possesses the power of the Founding Titan?",
    answers: [
      { text: "A) Historia Reiss ", correct: false },
      { text: "B) Zeke Yeager ", correct: false },
      { text: "C) Levi Ackerman ", correct: false },
      { text: "D) Eren Yeager", correct: true },
    ],
  },
  {
    question:
      "In Bungo Stray Dogs, what is the ability of the character Atsushi Nakajima? ",
    answers: [
      { text: "A) Rashomon", correct: false },
      { text: "B) Decay ", correct: false },
      { text: "C) Beast Beneath the Moonlight ", correct: true },
      { text: "D) All For One", correct: false },
    ],
  },
  {
    question:
      "What is the name of the state military in Fullmetal Alchemist: Brotherhood that Edward and Alphonse Elric belong to? ",
    answers: [
      { text: "A) Central Army ", correct: false },
      { text: "B) Amestrian State Military ", correct: true },
      { text: "Ishvalan Resistance", correct: false },
      { text: "D) Briggs Battalion", correct: false },
    ],
  },
  {
    question:
      "Who is the legendary warrior known as The Troll of Jom in Vinland Saga? ",
    answers: [
      { text: "A) Askeladd", correct: false },
      { text: "B) Knut ", correct: false },
      { text: "C) Ragnar ", correct: false },
      { text: "D) Thorkell", correct: true },
    ],
  },
  {
    question:
      "Which character is known as the Pirate Hunter and wields a three-sword style? ",
    answers: [
      { text: "A) Zoro ", correct: true },
      { text: "B) Sanji ", correct: false },
      { text: "C) Nami ", correct: false },
      { text: "D) Usopp", correct: false },
    ],
  },
  {
    question:
      "In Sword Art Online, what is the name of the virtual reality MMORPG that traps players inside the game? ",
    answers: [
      { text: "A) Gun Gale Online (GGO) ", correct: false },
      { text: "B) ALO (Alfheim Online", correct: false },
      { text: "C) SAO (Sword Art Online) ", correct: true },
      { text: "D) Underworld", correct: false },
    ],
  },
  {
    question:
      "Which character in Samurai Champloo is a vagabond swordsman with a distinctive style? ",
    answers: [
      { text: "A) Fuu Kasumi ", correct: false },
      { text: "B) Mugen ", correct: true },
      { text: "C) Jin ", correct: false },
      { text: "D) Shinsuke Takasugi", correct: false },
    ],
  },
  {
    question:
      "In That Time I Got Reincarnated as a Slime, what is the name of the protagonist after his reincarnation in the fantasy world? ",
    answers: [
      { text: "A) Satoru Mikami ", correct: false },
      { text: "B) Ranga ", correct: false },
      { text: "C) Shizue Izawa ", correct: false },
      { text: "D) Rimuru Tempest", correct: true },
    ],
  },
  {
    question:
      "Which anime follows the story of an unemployed 34-year-old who reincarnates in a fantasy world as a young boy with incredible magical abilities",
    answers: [
      { text: "A) Overlord ", correct: false },
      { text: "B) Jobless Reincarnation ", correct: true },
      { text: "C) No Game No Life ", correct: false },
      { text: "D) Re:Zero - Starting Life in Another World", correct: false },
    ],
  },
  {
    question:
      "In JoJo's Bizarre Adventure, what is the name of the powerful and ancient Aztec stone mask that creates vampires? ",
    answers: [
      { text: "A) Red Stone of Aja ", correct: false },
      { text: "B) Green Baby ", correct: false },
      { text: "C) Stone of Resurrection ", correct: false },
      { text: "D) Stone Mask", correct: true },
    ],
  },
  {
    question: "Who is the captain of the Heart Pirates? ",
    answers: [
      { text: "A) Trafalgar D. Water Law ", correct: true },
      { text: "B) Eustass 'Captain' Kid ", correct: false },
      { text: "C) BASIL HAWKINS ", correct: false },
      { text: "D) X-Drake", correct: false },
    ],
  },
  {
    question:
      "Which anime follows the story of Yuji Itadori, who swallows a cursed object and becomes the vessel of a powerful curse? ",
    answers: [
      { text: "A) Demon Slayer ", correct: false },
      { text: "B) Jujutsu Kaisen ", correct: true },
      { text: "C) Tokyo Ghoul ", correct: false },
      { text: "D) Black Clover", correct: false },
    ],
  },
  {
    question:
      "What is the name of Zoro's sword that is cursed to always be seeking a fight? ",
    answers: [
      { text: "A) Sandai Kitetsu", correct: false },
      { text: "B) Wado Ichimonji ", correct: false },
      { text: "C) Yubashiri ", correct: false },
      { text: "D) Shusui", correct: true },
    ],
  },
  {
    question:
      "Who is the former fleet admiral of the Marines and a strong supporter of justice?",
    answers: [
      { text: "A) Kizaru", correct: false },
      { text: "B) Sengoku", correct: true },
      { text: "C) Smoker ", correct: false },
      { text: "D) Akainu", correct: false },
    ],
  },
  {
    question:
      "What is the name of Natsu Dragneel's flying, cat companion in Fairy Tail? ",
    answers: [
      { text: "A) Plue ", correct: false },
      { text: "B) Carla", correct: false },
      { text: "C)  Happy ", correct: true },
      { text: "D) Lily", correct: false },
    ],
  },
  {
    question:
      "Which anime features a floating castle called Aincrad where players must clear the game's 100 levels to escape? ",
    answers: [
      { text: "A) Sword Art Online ", correct: true },
      { text: "B) Log Horizon ", correct: false },
      { text: "C) Accel World ", correct: false },
      { text: "D) Grimgar: Ashes and Illusions", correct: false },
    ],
  },
  {
    question:
      "In Samurai Champloo, which character seeks the samurai who smells of sunflowers? ",
    answers: [
      { text: "A) Jin ", correct: false },
      { text: "B) Fuu Kasumi ", correct: true },
      { text: "C) Mugen ", correct: false },
      { text: "D) Shinsuke Takasugi", correct: false },
    ],
  },
  {
    question:
      "Which Devil Fruit grants the ability to create and control fire? ",
    answers: [
      { text: "A) Gomu Gomu no Mi ", correct: false },
      { text: "B) Yami Yami no Mi ", correct: false },
      { text: "C) Hie Hie no Mi ", correct: false },
      { text: "D)  Mera Mera no Mi", correct: true },
    ],
  },
  {
    question:
      "Who is the Emperor of the Sea known for his love of sweets and candy? ",
    answers: [
      { text: "A) Kaido ", correct: false },
      { text: "B) Big Mom", correct: true },
      { text: "C) Blackbeard ", correct: false },
      { text: "D) Shanks", correct: false },
    ],
  },
  {
    question:
      "Which character in That Time I Got Reincarnated as a Slime has the ability to transform into a powerful dragon? ",
    answers: [
      { text: "A) Shion ", correct: false },
      { text: "B) Benimaru ", correct: false },
      { text: "C) Veldora Tempest ", correct: true },
      { text: "D) Milim Nava", correct: false },
    ],
  },
  {
    question:
      "Which character in Domestic Girlfriend is the protagonist's teacher with whom he has a secret relationship? ",
    answers: [
      { text: "A)  Hina Tachibana ", correct: true },
      { text: "B) Rui Tachibana ", correct: false },
      { text: "C) Momo Kashiwabara ", correct: false },
      { text: "D) Tokiko Tachibana", correct: false },
    ],
  },
  {
    question:
      "What is the name of the island where Luffy and his crew were separated for two years?",
    answers: [
      { text: "A) Loguetown ", correct: false },
      { text: "B) Sabaody Archipelago ", correct: true },
      { text: "C) Punk Hazard ", correct: false },
      { text: "D) Amazon Lily", correct: false },
    ],
  },
  {
    question:
      "In JoJo's Bizarre Adventure, what power does the Stand Star Platinum possess?",
    answers: [
      { text: "A) Stop Time ", correct: true },
      { text: "B) Mind Reading ", correct: false },
      { text: "C) Fire Manipulation ", correct: false },
      { text: "D) Gravity Manipulation", correct: false },
    ],
  },
  {
    question: "Who is the leader of the CP-0 organization? ",
    answers: [
      { text: "A) Hattori  ", correct: false },
      { text: "B) Spandam ", correct: false },
      { text: "C) Rob Lucci", correct: true },
      { text: "D) Stussy", correct: false },
    ],
  },
  {
    question:
      "In Jobless Reincarnation, what is the name of the powerful magician who becomes Rudeus master? ",
    answers: [
      { text: "A) Eris Greyrat ", correct: false },
      { text: "B) Paul Greyrat ", correct: false },
      { text: "C) Orsted  ", correct: false },
      { text: "D) Roxy Migurdia", correct: true },
    ],
  },
  {
    question: "Which Straw Hat Pirate is a skilled archaeologist? ",
    answers: [
      { text: "A) Franky ", correct: false },
      { text: "B) Robin ", correct: true },
      { text: "C) Chopper ", correct: false },
      { text: "D) Brook", correct: false },
    ],
  },
  {
    question:
      "In Fire Force, what is the objective of the Special Fire Force Company 8?",
    answers: [
      { text: "A) Investigate spontaneous human combustions ", correct: true },
      { text: "B) Exterminate Infernals ", correct: false },
      { text: "C) Locate the Evangelist ", correct: false },
      { text: "D) Capture rogue pyrokinetics", correct: false },
    ],
  },
  {
    question:
      "In Fairy Tail, what is the name of Natsu's ultimate form that grants him immense power? ",
    answers: [
      { text: "A) Lightning Flame Dragon Mode  ", correct: false },
      { text: "B) Dragon Force ", correct: false },
      { text: "C) Fire Dragon King Mode", correct: false },
      { text: "D) Fire Dragon God Mode", correct: true },
    ],
  },
  {
    question: "Who is the creator of the One Piece manga and anime series?",
    answers: [
      { text: "A) Hayao Miyazaki", correct: false },
      { text: "B) Akira Toriyama", correct: false },
      { text: "C) Hiromu Arakawa", correct: false },
      { text: "D) Eiichiro Oda", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const remark = document.getElementById("remark");
const remark2 = document.getElementById("remark2");

let currentQustionIndex = 0;
let score = 0;

function startQuiz() {
  currentQustionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQustion = questions[currentQustionIndex];
  let questionNo = currentQustionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQustion.question;
  question;

  currentQustion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  remark.style.display = "none";
  remark2.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showSore() {
  resetState();
  if (score < 10) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    remark.innerHTML = "🙁";
    remark.style.display = "block";
    remark2.innerHTML = "Uncultured👎";
    remark2.style.display = "block";
  } else if (score >= 10 && score < 20) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    remark.innerHTML = "😐";
    remark.style.display = "block";
    remark2.innerHTML = "You Aint That Bad🤷‍♂️";
    remark2.style.display = "block";
  } else if (score >= 20 && score < 29) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    remark.innerHTML = "🙃";
    remark.style.display = "block";
    remark2.innerHTML = "Almost There 🤏";
    remark2.style.display = "block";
  } else {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    remark.innerHTML = "WEEB!!!!";
    remark.style.fontSize = "50px";
    remark.style.color = "greenyellow";
    remark2.innerHTML = "あなたは文化人です 🤝";
    remark2.style.display = "block";
  }

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQustionIndex++;
  if (currentQustionIndex < questions.length) {
    showQuestion();
  } else {
    showSore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQustionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
