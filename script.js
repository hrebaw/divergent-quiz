// Faction data
const factions = {
    dauntless: {
        name: 'Dauntless',
        symbol: '🔥',
        color: '#c1272d',
        description: 'The Dauntless value bravery, strength, and the willingness to face one\'s fears. You are a natural leader with the courage to stand against injustice and the physical prowess to back it up.',
        traits: {
            value: 'Courage & Strength',
            role: 'Protectors & Leaders',
            strength: 'Fearless determination',
            challenge: 'Controlling aggression'
        }
    },
    erudite: {
        name: 'Erudite',
        symbol: '📚',
        color: '#003d7a',
        description: 'The Erudite prioritize knowledge, logic, and intellectual advancement. You seek truth through understanding and believe knowledge is the path to a better society.',
        traits: {
            value: 'Knowledge & Intelligence',
            role: 'Scholars & Researchers',
            strength: 'Analytical thinking',
            challenge: 'Arrogance and apathy'
        }
    },
    amity: {
        name: 'Amity',
        symbol: '🌾',
        color: '#f3a712',
        description: 'The Amity are devoted to peace, harmony, and understanding. You are compassionate, mediating conflicts and creating spaces where people feel safe and valued.',
        traits: {
            value: 'Peace & Kindness',
            role: 'Healers & Peacemakers',
            strength: 'Empathy and cooperation',
            challenge: 'Avoiding confrontation'
        }
    },
    candor: {
        name: 'Candor',
        symbol: '⚔️',
        color: '#ffffff',
        description: 'The Candor are devoted to honesty and integrity. You speak truth even when difficult, value directness in communication, and believe transparency is essential for trust.',
        traits: {
            value: 'Honesty & Directness',
            role: 'Judges & Truth-Tellers',
            strength: 'Unwavering honesty',
            challenge: 'Tactlessness'
        }
    },
    abnegation: {
        name: 'Abnegation',
        symbol: '🕊️',
        color: '#3a3a3a',
        description: 'The Abnegation believe in the power of selflessness. You prioritize the needs of others before your own, seeking to serve and finding purpose in humility and sacrifice.',
        traits: {
            value: 'Selflessness & Humility',
            role: 'Servants & Caregivers',
            strength: 'Self-discipline',
            challenge: 'Self-denial and suppression'
        }
    }
};

// Quiz questions - designed to score affinity with each faction
const questions = [
    {
        text: 'When faced with danger, you tend to:',
        answers: [
            { text: 'Run toward it to confront it head-on', faction: 'dauntless' },
            { text: 'Analyze the threat and develop a strategy', faction: 'erudite' },
            { text: 'Try to find a peaceful solution', faction: 'amity' },
            { text: 'Speak honestly about the risks', faction: 'candor' },
            { text: 'Put others\' safety before your own', faction: 'abnegation' }
        ]
    },
    {
        text: 'Your ideal career would involve:',
        answers: [
            { text: 'Protecting others or leading in action', faction: 'dauntless' },
            { text: 'Research, learning, and discovery', faction: 'erudite' },
            { text: 'Helping and healing others', faction: 'amity' },
            { text: 'Law, justice, or truth-seeking', faction: 'candor' },
            { text: 'Service and community support', faction: 'abnegation' }
        ]
    },
    {
        text: 'When someone lies to you, you:',
        answers: [
            { text: 'Confront them directly', faction: 'dauntless' },
            { text: 'Investigate to understand why they lied', faction: 'erudite' },
            { text: 'Try to understand their perspective with compassion', faction: 'amity' },
            { text: 'Demand they tell you the truth', faction: 'candor' },
            { text: 'Forgive them quietly and move on', faction: 'abnegation' }
        ]
    },
    {
        text: 'What motivates you most?',
        answers: [
            { text: 'The thrill of pushing past your limits', faction: 'dauntless' },
            { text: 'Understanding how things work', faction: 'erudite' },
            { text: 'Making people happy', faction: 'amity' },
            { text: 'Being true to yourself and others', faction: 'candor' },
            { text: 'Helping those in need', faction: 'abnegation' }
        ]
    },
    {
        text: 'In a group conflict, you usually:',
        answers: [
            { text: 'Take charge and make a decisive call', faction: 'dauntless' },
            { text: 'Present facts and logical arguments', faction: 'erudite' },
            { text: 'Mediate and find common ground', faction: 'amity' },
            { text: 'Voice your honest opinion directly', faction: 'candor' },
            { text: 'Listen more than you speak', faction: 'abnegation' }
        ]
    },
    {
        text: 'What do you value most in others?',
        answers: [
            { text: 'Strength and confidence', faction: 'dauntless' },
            { text: 'Intelligence and curiosity', faction: 'erudite' },
            { text: 'Kindness and warmth', faction: 'amity' },
            { text: 'Honesty and reliability', faction: 'candor' },
            { text: 'Humility and selflessness', faction: 'abnegation' }
        ]
    },
    {
        text: 'Your greatest fear is:',
        answers: [
            { text: 'Being weak or powerless', faction: 'dauntless' },
            { text: 'Not understanding something important', faction: 'erudite' },
            { text: 'Conflict and suffering', faction: 'amity' },
            { text: 'Being deceived or lied to', faction: 'candor' },
            { text: 'Failing those who depend on you', faction: 'abnegation' }
        ]
    },
    {
        text: 'When learning something new, you prefer to:',
        answers: [
            { text: 'Jump in and learn by doing', faction: 'dauntless' },
            { text: 'Study and understand deeply first', faction: 'erudite' },
            { text: 'Learn collaboratively with others', faction: 'amity' },
            { text: 'Ask direct questions for clarity', faction: 'candor' },
            { text: 'Observe and follow someone\'s guidance', faction: 'abnegation' }
        ]
    },
    {
        text: 'What bothers you most about society?',
        answers: [
            { text: 'Weakness and lack of action', faction: 'dauntless' },
            { text: 'Ignorance and misinformation', faction: 'erudite' },
            { text: 'War and suffering', faction: 'amity' },
            { text: 'Deception and corruption', faction: 'candor' },
            { text: 'Selfishness and greed', faction: 'abnegation' }
        ]
    },
    {
        text: 'Your response to criticism is usually to:',
        answers: [
            { text: 'Use it as motivation to prove yourself', faction: 'dauntless' },
            { text: 'Analyze it logically and improve', faction: 'erudite' },
            { text: 'Assume good intentions and adjust', faction: 'amity' },
            { text: 'Ask for specifics and honest feedback', faction: 'candor' },
            { text: 'Accept it humbly and work harder', faction: 'abnegation' }
        ]
    },
    {
        text: 'In your spare time, you most enjoy:',
        answers: [
            { text: 'Physical activities or sports', faction: 'dauntless' },
            { text: 'Reading, learning, or researching', faction: 'erudite' },
            { text: 'Spending time with friends and family', faction: 'amity' },
            { text: 'Having deep, honest conversations', faction: 'candor' },
            { text: 'Volunteering or helping others', faction: 'abnegation' }
        ]
    },
    {
        text: 'When making a major decision, you:',
        answers: [
            { text: 'Trust your gut and act boldly', faction: 'dauntless' },
            { text: 'Research all options thoroughly', faction: 'erudite' },
            { text: 'Consider how it affects others', faction: 'amity' },
            { text: 'Be transparent about your reasoning', faction: 'candor' },
            { text: 'Ask others for guidance first', faction: 'abnegation' }
        ]
    },
    {
        text: 'What role do you naturally fall into?',
        answers: [
            { text: 'Leader or motivator', faction: 'dauntless' },
            { text: 'Expert or advisor', faction: 'erudite' },
            { text: 'Peacemaker or supporter', faction: 'amity' },
            { text: 'Questioner or truth-seeker', faction: 'candor' },
            { text: 'Helper or listener', faction: 'abnegation' }
        ]
    },
    {
        text: 'Your ideal community would be:',
        answers: [
            { text: 'Strong, disciplined, and ready for anything', faction: 'dauntless' },
            { text: 'Knowledgeable, innovative, and progressive', faction: 'erudite' },
            { text: 'Peaceful, harmonious, and united', faction: 'amity' },
            { text: 'Honest, just, and transparent', faction: 'candor' },
            { text: 'Selfless, humble, and caring', faction: 'abnegation' }
        ]
    },
    {
        text: 'What\'s your relationship with rules?',
        answers: [
            { text: 'Break them if they\'re unjust', faction: 'dauntless' },
            { text: 'Understand why they exist first', faction: 'erudite' },
            { text: 'Follow them for harmony', faction: 'amity' },
            { text: 'Question and discuss them openly', faction: 'candor' },
            { text: 'Respect and uphold them', faction: 'abnegation' }
        ]
    },
    {
        text: 'When you achieve something, you:',
        answers: [
            { text: 'Feel proud and want recognition', faction: 'dauntless' },
            { text: 'Feel satisfied with the knowledge gained', faction: 'erudite' },
            { text: 'Share the success with your team', faction: 'amity' },
            { text: 'Stay humble and honest about it', faction: 'candor' },
            { text: 'Give credit to those who helped', faction: 'abnegation' }
        ]
    },
    {
        text: 'Your greatest strength is:',
        answers: [
            { text: 'Physical courage and determination', faction: 'dauntless' },
            { text: 'Mental acuity and wisdom', faction: 'erudite' },
            { text: 'Emotional intelligence and empathy', faction: 'amity' },
            { text: 'Integrity and truthfulness', faction: 'candor' },
            { text: 'Self-discipline and restraint', faction: 'abnegation' }
        ]
    },
    {
        text: 'How do you handle failure?',
        answers: [
            { text: 'Come back stronger and try again', faction: 'dauntless' },
            { text: 'Learn from it and adjust your approach', faction: 'erudite' },
            { text: 'Seek support from your community', faction: 'amity' },
            { text: 'Be honest about what went wrong', faction: 'candor' },
            { text: 'Accept it as a lesson in humility', faction: 'abnegation' }
        ]
    },
    {
        text: 'What type of environment makes you thrive?',
        answers: [
            { text: 'Fast-paced, challenging, and action-oriented', faction: 'dauntless' },
            { text: 'Intellectual, stimulating, and knowledge-focused', faction: 'erudite' },
            { text: 'Warm, supportive, and community-oriented', faction: 'amity' },
            { text: 'Open, honest, and transparent', faction: 'candor' },
            { text: 'Quiet, humble, and service-focused', faction: 'abnegation' }
        ]
    }
];

// State
let currentQuestion = 0;
let scores = {
    dauntless: 0,
    erudite: 0,
    amity: 0,
    candor: 0,
    abnegation: 0
};

// Elements
const landingPage = document.getElementById('landingPage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');
const beginBtn = document.getElementById('beginBtn');
const retakeBtn = document.getElementById('retakeBtn');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');

// Event listeners
beginBtn.addEventListener('click', startQuiz);
retakeBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    currentQuestion = 0;
    scores = {
        dauntless: 0,
        erudite: 0,
        amity: 0,
        candor: 0,
        abnegation: 0
    };
    showPage('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestion];
    questionText.textContent = question.text;
    optionsContainer.innerHTML = '';

    question.answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => selectAnswer(answer.faction));
        optionsContainer.appendChild(btn);
    });

    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function selectAnswer(faction) {
    scores[faction]++;
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    const result = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const faction = factions[result];
    
    document.getElementById('factionName').textContent = faction.name;
    document.getElementById('factionSymbol').textContent = faction.symbol;
    document.getElementById('factionDescription').textContent = faction.description;
    
    const traitsHtml = Object.entries(faction.traits).map(([key, value]) => `
        <div class="trait">
            <div class="trait-title">${key}</div>
            <div class="trait-content">${value}</div>
        </div>
    `).join('');
    
    document.getElementById('factionTraits').innerHTML = traitsHtml;
    
    // Apply faction color theme
    document.documentElement.style.setProperty('--accent-gold', faction.color);
    
    showPage('results');
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (page === 'quiz') {
        quizPage.classList.add('active');
    } else if (page === 'results') {
        resultsPage.classList.add('active');
    } else {
        landingPage.classList.add('active');
    }
}

function resetQuiz() {
    document.documentElement.style.setProperty('--accent-gold', '#d4a574');
    showPage('landing');
}
