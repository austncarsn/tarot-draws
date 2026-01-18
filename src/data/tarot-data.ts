import { TarotCard } from '../data/tarot-data';

export interface TarotCard {
  id: string;
  name: string;
  number: string;
  arcana: 'Major' | 'Minor';
  suit?: 'Cups' | 'Wands' | 'Swords' | 'Pentacles';
  keywords: string[];
  description: string;
  reversedDescription: string;
  illustration: string; // Color/Theme hex or class
  imageUrl?: string;
}

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 'major-0',
    name: 'The Fool',
    number: '0',
    arcana: 'Major',
    keywords: ['New Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'],
    description: 'The Fool represents the beginning of a journey, full of optimism and freedom from the constraints of the world.',
    reversedDescription: 'Recklessness, risk-taking, and a lack of consideration for consequences.',
    illustration: '#d4af37'
  },
  {
    id: 'major-1',
    name: 'The Magician',
    number: 'I',
    arcana: 'Major',
    keywords: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'],
    description: 'The Magician is the bridge between the world of the spirit and the world of humanity.',
    reversedDescription: 'Manipulation, poor planning, untapped talents.',
    illustration: '#d4af37'
  },
  {
    id: 'major-2',
    name: 'The High Priestess',
    number: 'II',
    arcana: 'Major',
    keywords: ['Intuition', 'Sacred Knowledge', 'Divine Feminine', 'The Subconscious'],
    description: 'The High Priestess signifies a time for looking inward and trusting your intuition.',
    reversedDescription: 'Secrets, disconnected from intuition, withdrawal and silence.',
    illustration: '#d4af37'
  },
  {
    id: 'cups-1',
    name: 'Ace of Cups',
    number: 'Ace',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Love', 'New Feelings', 'Spirituality', 'Intuition'],
    description: 'The Ace of Cups represents the beginning of love, happiness, and compassion.',
    reversedDescription: 'Self-love, repressed emotions, blocked creativity.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-2',
    name: 'Two of Cups',
    number: 'II',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Unified Love', 'Partnership', 'Mutual Attraction', 'Connection'],
    description: 'The Two of Cups signifies a meaningful and harmonious relationship, often a romantic one.',
    reversedDescription: 'Self-love, disharmony, break-ups, severed connections.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-3',
    name: 'Three of Cups',
    number: 'III',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Celebration', 'Friendship', 'Creativity', 'Community'],
    description: 'The Three of Cups is a card of celebration, friendship, and joyful gatherings.',
    reversedDescription: 'Overindulgence, gossip, isolation, misalignment.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-4',
    name: 'Four of Cups',
    number: 'IV',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Meditation', 'Contemplation', 'Apathy', 'Disconnection'],
    description: 'The Four of Cups represents a period of introspection and feeling uninspired by the world around you.',
    reversedDescription: 'Retreat, withdrawal, checking in with yourself.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-5',
    name: 'Five of Cups',
    number: 'V',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Regret', 'Failure', 'Disappointment', 'Pessimism'],
    description: 'The Five of Cups focuses on what has been lost, though hope remains in the background.',
    reversedDescription: 'Personal loss, self-forgiveness, moving on.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-6',
    name: 'Six of Cups',
    number: 'VI',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Revisiting the Past', 'Childhood Memories', 'Innocence', 'Joy'],
    description: 'The Six of Cups is a sweet reminder of childhood innocence and happy memories from the past.',
    reversedDescription: 'Living in the past, forgiveness, lack of realism.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-7',
    name: 'Seven of Cups',
    number: 'VII',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Opportunities', 'Choices', 'Wishful Thinking', 'Illusion'],
    description: 'The Seven of Cups represents having many options, some of which may be illusory or distracting.',
    reversedDescription: 'Alignment, personal values, overwhelmed by choices.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-8',
    name: 'Eight of Cups',
    number: 'VIII',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Disappointment', 'Abandonment', 'Withdrawal', 'Escapism'],
    description: 'The Eight of Cups signifies leaving behind something that no longer serves you to seek deeper meaning.',
    reversedDescription: 'Trying one last time, indecision, fear of change.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-9',
    name: 'Nine of Cups',
    number: 'IX',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Contentment', 'Satisfaction', 'Gratitude', 'Wish Come True'],
    description: 'The Nine of Cups is often called the "wish card," representing emotional fulfillment and abundance.',
    reversedDescription: 'Inner happiness, materialism, dissatisfaction.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-10',
    name: 'Ten of Cups',
    number: 'X',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Divine Love', 'Blissful Relationships', 'Harmony', 'Alignment'],
    description: 'The Ten of Cups represents ultimate emotional fulfillment and a sense of true belonging.',
    reversedDescription: 'Disconnected from family, misaligned values, struggling relationships.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-11',
    name: 'Page of Cups',
    number: 'Page',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Creative Opportunities', 'Intuitive Messages', 'Curiosity', 'Possibility'],
    description: 'The Page of Cups represents a message of creativity or a new emotional beginning.',
    reversedDescription: 'New ideas, doubting intuition, creative blocks.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-12',
    name: 'Knight of Cups',
    number: 'Knight',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Creativity', 'Romance', 'Charm', 'Imagination', 'Beauty'],
    description: 'The Knight of Cups is a romantic adventurer who follows his heart.',
    reversedDescription: 'Overactive imagination, unrealistic, jealous.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-13',
    name: 'Queen of Cups',
    number: 'Queen',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Compassionate', 'Caring', 'Emotionally Stable', 'Intuitive', 'In Flow'],
    description: 'The Queen of Cups is a master of her emotional realm, offering deep empathy and intuition.',
    reversedDescription: 'Self-care, self-love, co-dependency.',
    illustration: '#4a90d9'
  },
  {
    id: 'cups-14',
    name: 'King of Cups',
    number: 'King',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Compassionate', 'Control', 'Balance', 'Emotional Mastery'],
    description: 'The King of Cups remains calm and centered even in the midst of emotional storms.',
    reversedDescription: 'Self-compassion, inner feelings, moodiness, emotionally manipulative.',
    illustration: '#4a90d9'
  },
  {
    id: 'wands-1',
    name: 'Ace of Wands',
    number: 'Ace',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Inspiration', 'New Opportunities', 'Growth', 'Potential'],
    description: 'The Ace of Wands is a card of spiritual and creative beginnings.',
    reversedDescription: 'An emerging idea, lack of direction, distractions.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-2',
    name: 'Two of Wands',
    number: 'II',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Future Planning', 'Progress', 'Decisions', 'Discovery'],
    description: 'The Two of Wands represents a stage of planning and looking toward future growth and expansion.',
    reversedDescription: 'Fear of the unknown, lack of planning, staying in your comfort zone.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-3',
    name: 'Three of Wands',
    number: 'III',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Expansion', 'Foresight', 'Overseas Opportunities'],
    description: 'The Three of Wands signifies a time when your plans are in motion and you are waiting for the results of your efforts.',
    reversedDescription: 'Playing it safe, lack of foresight, delays, obstacles to expansion.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-4',
    name: 'Four of Wands',
    number: 'IV',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Celebration', 'Joy', 'Harmony', 'Relaxation', 'Homecoming'],
    description: 'The Four of Wands is a card of celebration, stability, and joyful homecomings.',
    reversedDescription: 'Lack of support, transience, home conflict.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-5',
    name: 'Five of Wands',
    number: 'V',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Competition', 'Conflict', 'Rivalry', 'Disagreements'],
    description: 'The Five of Wands represents a time of competition, struggle, and testing your skills against others.',
    reversedDescription: 'Avoiding conflict, respecting differences, harmony.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-6',
    name: 'Six of Wands',
    number: 'VI',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Success', 'Public Recognition', 'Victory', 'Progress'],
    description: 'The Six of Wands signifies public recognition for your achievements and a clear victory.',
    reversedDescription: 'Fall from grace, egotism, lack of recognition.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-7',
    name: 'Seven of Wands',
    number: 'VII',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Challenge', 'Competition', 'Protection', 'Perseverance'],
    description: 'The Seven of Wands represents the need to defend your position and maintain your ground against opposition.',
    reversedDescription: 'Giving up, overwhelmed, lack of confidence.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-8',
    name: 'Eight of Wands',
    number: 'VIII',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Speed', 'Action', 'Air Travel', 'Movement', 'Swift Change'],
    description: 'The Eight of Wands signifies rapid movement, swift changes, and news or events coming to a quick conclusion.',
    reversedDescription: 'Slow progress, delays, resisting change.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-9',
    name: 'Nine of Wands',
    number: 'IX',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Resilience', 'Courage', 'Persistence', 'Test of Faith'],
    description: 'The Nine of Wands represents the resilience and determination needed to keep going after a long struggle.',
    reversedDescription: 'Exhaustion, fatigue, defensiveness.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-10',
    name: 'Ten of Wands',
    number: 'X',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Burden', 'Extra Responsibility', 'Hard Work', 'Completion'],
    description: 'The Ten of Wands signifies carrying a heavy burden or taking on too much responsibility as you near completion.',
    reversedDescription: 'Doing it all, carrying the burden, collapse.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-11',
    name: 'Page of Wands',
    number: 'Page',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Inspiration', 'Ideas', 'Discovery', 'Limitless Potential'],
    description: 'The Page of Wands represents a new creative idea or the start of an exciting journey of discovery.',
    reversedDescription: 'Lack of direction, procrastination, creative blocks.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-12',
    name: 'Knight of Wands',
    number: 'Knight',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Energy', 'Passion', 'Inspired Action', 'Adventure', 'Impulsiveness'],
    description: 'The Knight of Wands is a bold and impulsive adventurer who follows his passion with great energy.',
    reversedDescription: 'Haste, scattered energy, delays, frustration.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-13',
    name: 'Queen of Wands',
    number: 'Queen',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Courage', 'Confidence', 'Independence', 'Social Butterfly', 'Determination'],
    description: 'The Queen of Wands is a confident and independent leader who inspires others with her determination.',
    reversedDescription: 'Self-confidence, inner fire, re-establishing independence.',
    illustration: '#e07b39'
  },
  {
    id: 'wands-14',
    name: 'King of Wands',
    number: 'King',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Natural-born Leader', 'Visionary', 'Entrepreneur', 'Honour'],
    description: 'The King of Wands is a visionary leader who uses his passion and energy to build great things.',
    reversedDescription: 'Impulsiveness, haste, ruthless, high expectations.',
    illustration: '#e07b39'
  },
  {
    id: 'swords-1',
    name: 'Ace of Swords',
    number: 'Ace',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Breakthroughs', 'New Ideas', 'Mental Clarity', 'Success'],
    description: 'The Ace of Swords represents a period of great insight and mental clarity.',
    reversedDescription: 'Inner clarity, re-thinking an idea, clouded judgment.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-2',
    name: 'Two of Swords',
    number: 'II',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Difficult Decisions', 'Weighing Options', 'Avoidance', 'Stalemate'],
    description: 'The Two of Swords represents a difficult choice and the need for balance and objectivity.',
    reversedDescription: 'Indecision, confusion, information overload.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-3',
    name: 'Three of Swords',
    number: 'III',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Heartbreak', 'Emotional Pain', 'Sorrow', 'Grief', 'Hurt'],
    description: 'The Three of Swords is a card of emotional pain and the need to process grief.',
    reversedDescription: 'Recovery, forgiveness, moving on from pain.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-4',
    name: 'Four of Swords',
    number: 'IV',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Rest', 'Relaxation', 'Meditation', 'Contemplation', 'Recuperation'],
    description: 'The Four of Swords signifies a time of rest and recovery after a period of stress.',
    reversedDescription: 'Exhaustion, burnout, restlessness.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-5',
    name: 'Five of Swords',
    number: 'V',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Conflict', 'Disagreements', 'Competition', 'Defeat', 'Winning at any cost'],
    description: 'The Five of Swords represents conflict and the hollow feeling of a victory won through disharmony.',
    reversedDescription: 'Reconciliation, making amends, past resentment.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-6',
    name: 'Six of Swords',
    number: 'VI',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Transition', 'Change', 'Rite of Passage', 'Releasing Baggage'],
    description: 'The Six of Swords signifies a transition toward calmer waters and a more peaceful state of mind.',
    reversedDescription: 'Personal transition, resistance to change, unfinished business.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-7',
    name: 'Seven of Swords',
    number: 'VII',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Betrayal', 'Deception', 'Getting Away with Something', 'Stealth'],
    description: 'The Seven of Swords represents strategy and deception, often used to avoid direct confrontation.',
    reversedDescription: 'Imposter syndrome, self-deceit, coming clean.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-8',
    name: 'Eight of Swords',
    number: 'VIII',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Negative Thoughts', 'Self-Imposed Restriction', 'Imprisonment', 'Victim Mentality'],
    description: 'The Eight of Swords represents feeling trapped by your own thoughts or external circumstances.',
    reversedDescription: 'Self-belief, releasing negative thoughts, open to new perspectives.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-9',
    name: 'Nine of Swords',
    number: 'IX',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Anxiety', 'Worry', 'Fear', 'Depression', 'Nightmares'],
    description: 'The Nine of Swords represents the mental anguish caused by excessive worry and fear.',
    reversedDescription: 'Inner turmoil, deep-seated fears, secrets, releasing worry.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-10',
    name: 'Ten of Swords',
    number: 'X',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Painful Endings', 'Deep Wounds', 'Betrayal', 'Loss', 'Crisis'],
    description: 'The Ten of Swords signifies a difficult ending but also the promise of a new dawn.',
    reversedDescription: 'Recovery, regeneration, resisting an inevitable end.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-11',
    name: 'Page of Swords',
    number: 'Page',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['New Ideas', 'Curiosity', 'Thirst for Knowledge', 'New Ways of Communicating'],
    description: 'The Page of Swords represents a curious and energetic mind ready to explore new ideas.',
    reversedDescription: 'Self-expression, all talk and no action, haphazard action.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-12',
    name: 'Knight of Swords',
    number: 'Knight',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Ambitious', 'Action-oriented', 'Driven to Succeed', 'Fast-thinking'],
    description: 'The Knight of Swords is an ambitious and direct communicator who moves quickly toward his goals.',
    reversedDescription: 'Restless, unfocused, impulsive, burn out.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-13',
    name: 'Queen of Swords',
    number: 'Queen',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Independent', 'Unbiased Judgement', 'Clear Boundaries', 'Direct Communication'],
    description: 'The Queen of Swords offers clear and unbiased judgement, valuing truth above all else.',
    reversedDescription: 'Overly-emotional, influenced by others, cold-hearted.',
    illustration: '#8b9dc3'
  },
  {
    id: 'swords-14',
    name: 'King of Swords',
    number: 'King',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Mental Clarity', 'Intellectual Power', 'Authority', 'Truth'],
    description: 'The King of Swords represents intellectual authority and the pursuit of truth and justice.',
    reversedDescription: 'Quiet power, inner truth, misuse of power, manipulative.',
    illustration: '#8b9dc3'
  },
  {
    id: 'pentacles-1',
    name: 'Ace of Pentacles',
    number: 'Ace',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Abundance', 'Manifestation', 'Financial Opportunity', 'Prosperity'],
    description: 'The Ace of Pentacles signifies a new financial or career opportunity.',
    reversedDescription: 'Lost opportunity, lack of planning and foresight.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-2',
    name: 'Two of Pentacles',
    number: 'II',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Balance', 'Adaptability', 'Time Management', 'Prioritisation'],
    description: 'The Two of Pentacles represents the need to balance multiple areas of life with grace and flexibility.',
    reversedDescription: 'Over-committed, disorganized, struggling to keep up.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-3',
    name: 'Three of Pentacles',
    number: 'III',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Teamwork', 'Collaboration', 'Learning', 'Implementation'],
    description: 'The Three of Pentacles signifies the success that comes from working together and sharing knowledge.',
    reversedDescription: 'Disharmony, misalignment, working alone, lack of skill.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-4',
    name: 'Four of Pentacles',
    number: 'IV',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Conservation', 'Frugality', 'Security', 'Control'],
    description: 'The Four of Pentacles represents a desire for financial security and stability, sometimes leading to possessiveness.',
    reversedDescription: 'Over-spending, greed, letting go, generosity.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-5',
    name: 'Five of Pentacles',
    number: 'V',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Financial Loss', 'Poverty', 'Lack of Resources', 'Isolation'],
    description: 'The Five of Pentacles focuses on material hardship and the feeling of being left out in the cold.',
    reversedDescription: 'Recovery from financial loss, spiritual poverty, improved health.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-6',
    name: 'Six of Pentacles',
    number: 'VI',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Generosity', 'Charity', 'Giving', 'Receiving', 'Sharing Wealth'],
    description: 'The Six of Pentacles represents a healthy balance of giving and receiving abundance.',
    reversedDescription: 'Self-care, debt, stinginess, power dynamics in giving.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-7',
    name: 'Seven of Pentacles',
    number: 'VII',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Long-term View', 'Sustainable Results', 'Perseverance', 'Investment'],
    description: 'The Seven of Pentacles signifies a time of assessing your progress and waiting for your hard work to pay off.',
    reversedDescription: 'Lack of long-term vision, limited success, distraction.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-8',
    name: 'Eight of Pentacles',
    number: 'VIII',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Apprenticeship', 'Repetitive Tasks', 'Mastery', 'Skill Development'],
    description: 'The Eight of Pentacles represents the diligence and focus required to master a craft or skill.',
    reversedDescription: 'Self-perfection, perfectionism, misdirected activity.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-9',
    name: 'Nine of Pentacles',
    number: 'IX',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Abundance', 'Luxury', 'Self-sufficiency', 'Financial Independence'],
    description: 'The Nine of Pentacles signifies enjoying the fruits of your labor and achieving a state of luxury and independence.',
    reversedDescription: 'Self-worth, over-investment in work, hustling.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-10',
    name: 'Ten of Pentacles',
    number: 'X',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Wealth', 'Inheritance', 'Family', 'Establishment', 'Tradition'],
    description: 'The Ten of Pentacles represents long-term financial security and the legacy of a stable family or business.',
    reversedDescription: 'Financial failure, loss of heritage, family conflict.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-11',
    name: 'Page of Pentacles',
    number: 'Page',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Manifestation', 'Financial Opportunity', 'Skill Development', 'Desire'],
    description: 'The Page of Pentacles represents a new opportunity for financial or material growth.',
    reversedDescription: 'Lack of progress, procrastination, learn from failure.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-12',
    name: 'Knight of Pentacles',
    number: 'Knight',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Hard Work', 'Productivity', 'Routine', 'Conservatism'],
    description: 'The Knight of Pentacles is a reliable and methodical worker who achieves success through persistence.',
    reversedDescription: 'Self-discipline, boredom, feeling stuck, perfectionism.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-13',
    name: 'Queen of Pentacles',
    number: 'Queen',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Nurturing', 'Practicality', 'Providing', 'Financial Security'],
    description: 'The Queen of Pentacles is a master of the material realm, offering both practical care and financial stability.',
    reversedDescription: 'Work-life balance, self-care, smothering, insecurity.',
    illustration: '#6b8e23'
  },
  {
    id: 'pentacles-14',
    name: 'King of Pentacles',
    number: 'King',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Abundance', 'Prosperity', 'Security', 'Ambition', 'Safe Hands'],
    description: 'The King of Pentacles represents the pinnacle of material success and financial authority.',
    reversedDescription: 'Greed, indulgence, sensual, obsessed with status.',
    illustration: '#6b8e23'
  },
  {
    id: 'major-3',
    name: 'The Empress',
    number: 'III',
    arcana: 'Major',
    keywords: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
    description: 'The Empress represents a strong connection with our femininity and the creative process.',
    reversedDescription: 'Creative block, dependence on others.',
    illustration: '#d4af37'
  },
  {
    id: 'major-4',
    name: 'The Emperor',
    number: 'IV',
    arcana: 'Major',
    keywords: ['Authority', 'Establishment', 'Structure', 'A Father Figure'],
    description: 'The Emperor represents structure, stability, and protection.',
    reversedDescription: 'Tyranny, rigidity, coldness.',
    illustration: '#d4af37'
  },
  {
    id: 'major-5',
    name: 'The Hierophant',
    number: 'V',
    arcana: 'Major',
    keywords: ['Spiritual Wisdom', 'Religious Beliefs', 'Conformity', 'Tradition'],
    description: 'The Hierophant represents traditional values and religious beliefs.',
    reversedDescription: 'Personal beliefs, freedom, challenging the status quo.',
    illustration: '#d4af37'
  },
  {
    id: 'major-6',
    name: 'The Lovers',
    number: 'VI',
    arcana: 'Major',
    keywords: ['Love', 'Harmony', 'Relationships', 'Values Alignment', 'Choices'],
    description: 'The Lovers represent a conscious connection and meaningful relationships.',
    reversedDescription: 'Self-love, disharmony, imbalance, misalignment of values.',
    illustration: '#d4af37'
  },
  {
    id: 'major-7',
    name: 'The Chariot',
    number: 'VII',
    arcana: 'Major',
    keywords: ['Control', 'Willpower', 'Success', 'Action', 'Determination'],
    description: 'The Chariot signifies a time of struggle followed by a clear victory.',
    reversedDescription: 'Self-discipline, opposition, lack of direction.',
    illustration: '#d4af37'
  },
  {
    id: 'major-8',
    name: 'Strength',
    number: 'VIII',
    arcana: 'Major',
    keywords: ['Strength', 'Courage', 'Persuasion', 'Influence', 'Compassion'],
    description: 'Strength represents the power of the human spirit to overcome any obstacle.',
    reversedDescription: 'Self-doubt, weakness, insecurity.',
    illustration: '#d4af37'
  },
  {
    id: 'major-9',
    name: 'The Hermit',
    number: 'IX',
    arcana: 'Major',
    keywords: ['Soul-searching', 'Introspection', 'Being Alone', 'Inner Guidance'],
    description: 'The Hermit signifies a time of stepping back from the world to seek inner truth.',
    reversedDescription: 'Isolation, loneliness, withdrawal.',
    illustration: '#d4af37'
  },
  {
    id: 'major-10',
    name: 'Wheel of Fortune',
    number: 'X',
    arcana: 'Major',
    keywords: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny', 'A Turning Point'],
    description: 'The Wheel of Fortune reminds us that life is constantly changing and that good luck is on its way.',
    reversedDescription: 'Bad luck, resistance to change, breaking cycles.',
    illustration: '#d4af37'
  },
  {
    id: 'major-11',
    name: 'Justice',
    number: 'XI',
    arcana: 'Major',
    keywords: ['Justice', 'Fairness', 'Truth', 'Cause and Effect', 'Law'],
    description: 'Justice represents fairness, truth, and the law of cause and effect.',
    reversedDescription: 'Unfairness, lack of accountability, dishonesty.',
    illustration: '#d4af37'
  },
  {
    id: 'major-12',
    name: 'The Hanged Man',
    number: 'XII',
    arcana: 'Major',
    keywords: ['Pause', 'Surrender', 'Letting Go', 'New Perspectives'],
    description: 'The Hanged Man signifies a time of suspension and waiting, or a need to see things from a new perspective.',
    reversedDescription: 'Delays, resistance, stalling, indecision.',
    illustration: '#d4af37'
  },
  {
    id: 'major-13',
    name: 'Death',
    number: 'XIII',
    arcana: 'Major',
    keywords: ['Endings', 'Change', 'Transformation', 'Transition'],
    description: 'Death represents a significant ending or transformation, paving the way for something new.',
    reversedDescription: 'Resistance to change, personal transformation, inner purging.',
    illustration: '#d4af37'
  },
  {
    id: 'major-14',
    name: 'Temperance',
    number: 'XIV',
    arcana: 'Major',
    keywords: ['Balance', 'Moderation', 'Patience', 'Purpose'],
    description: 'Temperance signifies balance, moderation, and patience.',
    reversedDescription: 'Imbalance, excess, self-healing, re-alignment.',
    illustration: '#d4af37'
  },
  {
    id: 'major-15',
    name: 'The Devil',
    number: 'XV',
    arcana: 'Major',
    keywords: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction', 'Sexuality'],
    description: 'The Devil represents the darker side of our nature and the things that bind us.',
    reversedDescription: 'Releasing limiting beliefs, exploring dark thoughts, detachment.',
    illustration: '#d4af37'
  },
  {
    id: 'major-16',
    name: 'The Tower',
    number: 'XVI',
    arcana: 'Major',
    keywords: ['Sudden Change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
    description: 'The Tower signifies a sudden and dramatic change that shakes the foundation of your life.',
    reversedDescription: 'Personal transformation, fear of change, averting disaster.',
    illustration: '#d4af37'
  },
  {
    id: 'major-17',
    name: 'The Star',
    number: 'XVII',
    arcana: 'Major',
    keywords: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
    description: 'The Star brings hope, renewed power, and strength to carry on.',
    reversedDescription: 'Lack of faith, despair, self-trust, disconnection.',
    illustration: '#d4af37'
  },
  {
    id: 'major-18',
    name: 'The Moon',
    number: 'XVIII',
    arcana: 'Major',
    keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
    description: 'The Moon represents illusions, fears, and the realm of the subconscious.',
    reversedDescription: 'Release of fear, repressed emotion, inner confusion.',
    illustration: '#d4af37'
  },
  {
    id: 'major-19',
    name: 'The Sun',
    number: 'XIX',
    arcana: 'Major',
    keywords: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'],
    description: 'The Sun is a card of joy, success, and positivity.',
    reversedDescription: 'Inner child, feeling down, overly optimistic.',
    illustration: '#d4af37'
  },
  {
    id: 'major-20',
    name: 'Judgement',
    number: 'XX',
    arcana: 'Major',
    keywords: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'],
    description: 'Judgement signifies a time of reflection and self-evaluation.',
    reversedDescription: 'Self-doubt, inner critic, ignoring the call.',
    illustration: '#d4af37'
  },
  {
    id: 'major-21',
    name: 'The World',
    number: 'XXI',
    arcana: 'Major',
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Travel'],
    description: 'The World represents completion, achievement, and fulfillment.',
    reversedDescription: 'Seeking personal closure, short-cuts, delays.',
    illustration: '#d4af37'
  }
];
