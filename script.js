/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const AMBER = "#F5A623", CYAN = "#4CD3C2", CORAL = "#FF6B5E", VIOLET = "#8B7CF6";
const ACCENTS = [AMBER, CYAN, CORAL, VIOLET];

/* ============================================================
   ICONS (minimal inline SVG set, mirroring lucide icons used)
   ============================================================ */
function icon(name, size, color) {
  size = size || 16; color = color || "currentColor";
  const paths = {
    home: '<path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/><path d="M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3"/>',
    calendarCheck: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/>',
    map: '<polygon points="1,6 8,3 16,6 23,3 23,18 16,21 8,18 1,21"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/>',
    folder: '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="19" x2="12" y2="22"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 17.5v-13z"/><path d="M20 22H6.5A2.5 2.5 0 014 19.5"/>',
    sticky: '<path d="M3 3h13l5 5v13H3z"/><path d="M16 3v5h5"/>',
    trending: '<polyline points="3,17 9,11 13,15 21,7"/><polyline points="14,7 21,7 21,14"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>',
    file: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',
    flame: '<path d="M12 2s-6 6-6 11a6 6 0 0012 0c0-2-1-3-1-3s-1 3-3 3c-2 0-2-2-2-3s1-2 1-4c0-1-1-4-1-4z"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M17 5h3a2 2 0 01-2 4M7 5H4a2 2 0 002 4"/>',
    brain: '<path d="M9.5 2a2.5 2.5 0 00-2.5 2.5v.6A3 3 0 004 8v1a3 3 0 00-1 5.8V16a3 3 0 003 3h.5a2.5 2.5 0 005 0V4.5A2.5 2.5 0 009.5 2z"/><path d="M14.5 2A2.5 2.5 0 0117 4.5v.6A3 3 0 0120 8v1a3 3 0 011 5.8V16a3 3 0 01-3 3h-.5a2.5 2.5 0 01-5 0V4.5A2.5 2.5 0 0114.5 2z"/>',
    rotate: '<polyline points="1,4 1,10 7,10"/><path d="M3.5 15a9 9 0 1 0 2-9.5L1 10"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    award: '<circle cx="12" cy="8" r="6"/><polyline points="8.2,13.7 7,22 12,19 17,22 15.8,13.7"/>',
    coins: '<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6" fill="none"/>',
    zap: '<polygon points="13,2 3,14 11,14 9,22 21,10 13,10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>',
    chevronRight: '<polyline points="9,6 15,12 9,18"/>',
    check: '<polyline points="20,6 9,17 4,12"/>',
    circle: '<circle cx="12" cy="12" r="9"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    trash: '<polyline points="3,6 5,6 21,6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>',
    sparkles: '<path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/><path d="M5 17l.7 2.3L8 20l-2.3.7L5 23l-.7-2.3L2 20l2.3-.7z"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 013-8c2-2 6-3 9-3-1 3-2 7-3 9a22 22 0 01-8 3z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    listChecks: '<path d="M3 6h1M3 12h1M3 18h1"/><polyline points="7,6 8,7 10,4"/><polyline points="7,12 8,13 10,10"/><line x1="13" y1="6" x2="21" y2="6"/><line x1="13" y1="12" x2="21" y2="12"/><line x1="13" y1="18" x2="21" y2="18"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,6 12,13 22,6"/>',
    quote: '<path d="M7 8a3 3 0 00-3 3v2a3 3 0 003 3h1v-3H6v-2a1 1 0 011-1h1V8H7z"/><path d="M16 8a3 3 0 00-3 3v2a3 3 0 003 3h1v-3h-2v-2a1 1 0 011-1h1V8h-1z"/>',
    grad: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 000 7M15.5 8.5a5 5 0 010 7M5 5a9 9 0 000 14M19 5a9 9 0 010 14"/>'
  };
  const p = paths[name] || '';
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
}

/* ============================================================
   DATA
   ============================================================ */
const PHASES = [
  { id: 1, name: "Advanced Excel", skill: "Excel", start: 1, end: 20,
    topics: ["Formulas & Functions", "Pivot Tables", "Data Validation", "VLOOKUP & XLOOKUP", "Charts & Dashboards", "Macros & VBA Basics", "What-If Analysis"],
    res: { theory: "Microsoft Learn — Excel", video: "Leila Gharani / ExcelIsFun", doc: "Excel Easy", practice: "ExcelIsFun Practice Files" } },
  { id: 2, name: "SQL", skill: "SQL", start: 21, end: 45,
    topics: ["SELECT & Filtering", "Joins", "Aggregations & GROUP BY", "Subqueries", "Window Functions", "Query Optimization", "CTEs & Views"],
    res: { theory: "SQLBolt", video: "Alex The Analyst", doc: "Mode SQL Tutorial", practice: "HackerRank / PostgreSQL Exercises" } },
  { id: 3, name: "Python", skill: "Python", start: 46, end: 75,
    topics: ["Python Basics", "Data Structures", "Pandas Fundamentals", "NumPy", "Data Cleaning", "Data Visualization", "Working with APIs", "Automation Scripts"],
    res: { theory: "Harvard CS50 Python", video: "Corey Schafer / Programming with Mosh", doc: "Python Official Docs", practice: "Kaggle Learn" } },
  { id: 4, name: "Statistics", skill: "Statistics", start: 76, end: 95,
    topics: ["Descriptive Statistics", "Probability Basics", "Distributions", "Hypothesis Testing", "Correlation & Regression", "A/B Testing", "Confidence Intervals"],
    res: { theory: "Khan Academy", video: "StatQuest", doc: "Khan Academy Stats", practice: "StatQuest Practice Quizzes" } },
  { id: 5, name: "Power BI", skill: "Power BI", start: 96, end: 120,
    topics: ["Power Query", "Data Modeling in Power BI", "DAX Basics", "DAX Advanced", "Visualizations", "Dashboards & Reports", "Power BI Service"],
    res: { theory: "Microsoft Learn", video: "Guy in a Cube", doc: "Microsoft Documentation", practice: "Guy in a Cube Practice Files" } },
  { id: 6, name: "Git & GitHub", skill: "Git", start: 121, end: 130,
    topics: ["Git Basics", "Branching & Merging", "GitHub Workflow", "Pull Requests", "Portfolio on GitHub"],
    res: { theory: "GitHub Docs", video: "freeCodeCamp Git Course", doc: "Git Documentation", practice: "Build a GitHub Portfolio Repo" } },
  { id: 7, name: "Tableau", skill: "Tableau", start: 131, end: 145,
    topics: ["Tableau Basics", "Calculated Fields", "Dashboards", "Storytelling with Data", "Tableau Public Publishing"],
    res: { theory: "Tableau Public", video: "Tableau Free Training Videos", doc: "Tableau Help Docs", practice: "Tableau Public Gallery" } },
  { id: 8, name: "ETL", skill: "ETL", start: 146, end: 157,
    topics: ["ETL Concepts", "Data Extraction", "Data Transformation", "Data Loading", "ETL Tools Overview"],
    res: { theory: "Microsoft Learn", video: "ETL Basics Playlist", doc: "Official Tool Docs", practice: "Build a Mini ETL Pipeline" } },
  { id: 9, name: "Data Warehouse", skill: "DWH", start: 158, end: 167,
    topics: ["DWH Concepts", "Star vs Snowflake Schema", "Fact & Dimension Tables", "OLAP vs OLTP"],
    res: { theory: "Microsoft Learn", video: "DWH Basics Playlist", doc: "Vendor Documentation", practice: "Design a Warehouse Schema" } },
  { id: 10, name: "Data Modeling", skill: "Data Modeling", start: 168, end: 177,
    topics: ["Modeling Concepts", "Normalization", "Table Relationships", "Star Schema Design"],
    res: { theory: "Microsoft Learn", video: "Data Modeling Playlist", doc: "Reference Docs", practice: "Design a Schema From Scratch" } },
  { id: 11, name: "Databricks", skill: "Databricks", start: 178, end: 189,
    topics: ["Databricks Basics", "Notebooks", "Spark Fundamentals", "Delta Lake Basics"],
    res: { theory: "Databricks Academy", video: "Databricks YouTube Channel", doc: "Databricks Docs", practice: "Community Edition Labs" } },
  { id: 12, name: "Machine Learning Basics", skill: "ML", start: 190, end: 204,
    topics: ["ML Concepts", "Supervised Learning", "Regression Models", "Classification Models", "Model Evaluation"],
    res: { theory: "Google ML Crash Course", video: "Kaggle Learn", doc: "scikit-learn Docs", practice: "Kaggle Micro-Courses" } },
  { id: 13, name: "Business Analyst", skill: "BA", start: 205, end: 219,
    topics: ["BA Fundamentals", "Requirement Gathering", "Process Mapping", "Agile & Scrum", "Stakeholder Management"],
    res: { theory: "Microsoft Learn", video: "Atlassian Agile Coach", doc: "Scrum Guide", practice: "BA Case Studies" } },
  { id: 14, name: "Resume", skill: "Resume", start: 220, end: 224,
    topics: ["Resume Structure", "ATS Optimization", "Project Descriptions", "Resume Review"],
    res: { theory: "Free Resume Guides", video: "Resume Tips Playlist", doc: "ATS Checklist", practice: "Draft & Refine Resume" } },
  { id: 15, name: "LinkedIn", skill: "LinkedIn", start: 225, end: 227,
    topics: ["Profile Optimization", "Headline & Summary", "Networking & Content"],
    res: { theory: "LinkedIn Help", video: "LinkedIn Tips Playlist", doc: "LinkedIn Best Practices", practice: "Full Profile Audit" } },
  { id: 16, name: "Interview Preparation", skill: "Interview", start: 228, end: 235,
    topics: ["Technical Mock Interviews", "HR Questions", "Case Studies", "Behavioral Questions"],
    res: { theory: "Interview Prep Guides", video: "Mock Interview Playlist", doc: "Company Research Notes", practice: "Timed Mock Interviews" } },
  { id: 17, name: "Job Search", skill: "Job Search", start: 236, end: 240,
    topics: ["Job Portals & Search", "Application Strategy", "Referrals", "Follow-ups"],
    res: { theory: "Job Portal Guides", video: "Job Search Strategy Playlist", doc: "Application Tracker Guide", practice: "Apply to 5 Roles Daily" } },
];
const TOTAL_DAYS = 240;

const PROJECTS = [
  { name: "Finance Dashboard", skill: "Excel", unlock: 20, desc: "Track income, expenses and forecasts in an interactive Excel workbook." },
  { name: "Blinkit Dashboard", skill: "SQL", unlock: 45, desc: "Analyze quick-commerce order data with layered SQL queries." },
  { name: "Inventory Dashboard", skill: "SQL", unlock: 45, desc: "Track stock levels and reorder points with SQL." },
  { name: "Netflix Analysis", skill: "Python", unlock: 75, desc: "Explore and visualize a content catalog using Pandas & Matplotlib." },
  { name: "Loan Analytics", skill: "Statistics", unlock: 95, desc: "Analyze loan default risk using statistical methods." },
  { name: "Sales Dashboard", skill: "Power BI", unlock: 120, desc: "Build an interactive sales KPI dashboard with filters." },
  { name: "HR Dashboard", skill: "Power BI", unlock: 120, desc: "Analyze headcount, attrition and hiring-funnel metrics." },
  { name: "Retail Dashboard", skill: "Power BI", unlock: 120, desc: "Cover inventory and revenue performance for a retail chain." },
  { name: "Amazon Dashboard", skill: "Tableau", unlock: 145, desc: "Visualize e-commerce sales trends by category in Tableau." },
  { name: "Healthcare Dashboard", skill: "Tableau", unlock: 145, desc: "Visualize patient flow and hospital operations data." },
  { name: "Supply Chain Dashboard", skill: "ETL", unlock: 157, desc: "Model an end-to-end supply-chain data pipeline." },
  { name: "Manufacturing Analytics", skill: "Databricks", unlock: 189, desc: "Process manufacturing sensor data at scale." },
  { name: "Customer Churn", skill: "ML", unlock: 204, desc: "Predict customer churn with a classification model." },
  { name: "Final Capstone", skill: "BA", unlock: 219, desc: "An end-to-end capstone combining every skill on the roadmap." },
];

const QUOTES = [
  { q: "Discipline is choosing between what you want now and what you want most.", meaning: "Short-term comfort competes with long-term goals every single day.", apply: "Skip the extra scroll session tonight and finish today's checklist instead.", life: "Small trade-offs compound into a completely different life.", career: "Recruiters notice consistency far more than occasional bursts of effort." },
  { q: "A skill practiced badly for 240 days beats a skill imagined perfectly for zero.", meaning: "Imperfect action beats perfect inaction.", apply: "Attempt today's SQL practice set even if you expect mistakes.", life: "Momentum matters more than polish when you're starting out.", career: "Interviewers can tell who has actually built things, not just watched tutorials." },
  { q: "Your dashboard should be boring to build and exciting to use.", meaning: "Good process work is unglamorous; the payoff is what shines.", apply: "Grind through the data-cleaning step before the fun visualization step.", life: "Unseen preparation is what makes visible success look easy.", career: "Hiring managers reward analysts who respect the boring parts of data work." },
  { q: "Every rejected application is a data point, not a verdict.", meaning: "One outcome is signal, not the whole story.", apply: "Log today's rejection in the tracker and note one thing to adjust.", life: "Treat setbacks as inputs to iterate on, not conclusions about your worth.", career: "The job search itself is a funnel — optimize it like one." },
  { q: "Fluency in English is a multiplier, not a side quest.", meaning: "Communication skill amplifies every technical skill you build.", apply: "Say today's SQL concept out loud in one clear English sentence.", life: "Clear speakers are trusted faster, in interviews and in life.", career: "Business analysts are hired as much for clarity as for correctness." },
  { q: "You don't need motivation once the checklist becomes the routine.", meaning: "Systems outlast feelings.", apply: "Open today's plan before you decide whether you feel like studying.", life: "Habits remove the daily negotiation with yourself.", career: "Consistent output over 240 days is what separates offers from almosts." },
  { q: "A missed day is a detour, not a dead end.", meaning: "Recovery matters more than the miss itself.", apply: "Use the recovery plan instead of trying to silently catch up alone.", life: "Resilience is a practiced skill, not a personality trait.", career: "Employers value people who recover from setbacks methodically." },
  { q: "Readiness is a percentage, not a feeling.", meaning: "Track progress with numbers so doubt has less room to speak.", apply: "Check today's readiness score before deciding you're 'not ready yet.'", life: "Measurable progress quiets the loudest inner critic.", career: "You can defend a 78% readiness score in an interview far better than a vague feeling." },
  { q: "Revision is where forgetting goes to die.", meaning: "Spaced repetition beats one-time learning.", apply: "Spend ten minutes today re-reading a topic from a week ago.", life: "What you don't revisit, you quietly lose.", career: "Interviewers ask about fundamentals from months ago — keep them alive." },
  { q: "A project in your GitHub is worth ten claims on your resume.", meaning: "Proof beats assertion.", apply: "Push today's practice file to your portfolio repo, even if it's small.", life: "Show, don't tell, applies far beyond writing.", career: "Recruiters skim resumes but click on GitHub links." },
  { q: "Twelve lakhs is a number; the habits that reach it are the real goal.", meaning: "The target is a proxy for the identity you're building.", apply: "Ask what today's habits say about the analyst you're becoming.", life: "Chase the process and the outcome tends to follow.", career: "Interviewers hire the habits, not the number on your target salary." },
  { q: "The mock interview you dread is the real interview you'll ace.", meaning: "Rehearsal converts fear into familiarity.", apply: "Record yourself answering today's five mock questions out loud.", life: "Practiced discomfort in private prevents panic in public.", career: "Fluent, rehearsed answers read as confidence to a panel." },
  { q: "Data cleaning is 80% of the job and 100% of the reputation.", meaning: "Unseen rigor builds trust in your visible output.", apply: "Double-check today's dataset before building anything on top of it.", life: "Reliability is built in the parts no one applauds.", career: "Analysts known for clean data get handed the interesting projects." },
  { q: "You are one dashboard away from your next portfolio piece.", meaning: "Progress is closer than it feels.", apply: "Ship today's mini project even if it isn't perfect.", life: "'Good enough and shipped' beats 'perfect and shelved.'", career: "A finished, imperfect project outproves an unfinished, ideal one." },
  { q: "Vocabulary is the toolkit for the arguments you'll make in meetings.", meaning: "Precise words make for persuasive analysts.", apply: "Use one of today's ten new words in a real sentence.", life: "The words you own shape the thoughts you can have.", career: "Stakeholders trust analysts who explain findings simply and precisely." },
  { q: "Streaks aren't about perfection, they're about not quitting twice in a row.", meaning: "One miss is human; two is a pattern.", apply: "If you missed yesterday, protect today no matter how small the effort.", life: "Recovery speed matters more than the fall.", career: "Consistency signals reliability — the trait every manager wants." },
  { q: "Every phase you finish is a permission slip for the next one.", meaning: "Foundations unlock harder material.", apply: "Don't skip ahead — trust the order of the roadmap.", life: "Sequence matters; skipping steps usually means repeating them later.", career: "Employers value depth in fundamentals over shallow breadth." },
  { q: "The interview room rewards the version of you that showed up on day 40.", meaning: "Today's effort compounds into future confidence.", apply: "Study today as if the interview is tomorrow.", life: "Future-you is built entirely out of today's decisions.", career: "Preparation this thorough is what makes offers feel inevitable, not lucky." },
  { q: "A career changes one applied concept at a time.", meaning: "Application beats accumulation.", apply: "Use today's concept in the assignment, not just in your notes.", life: "Knowledge that isn't applied quietly evaporates.", career: "Interviewers probe for applied understanding, not memorized definitions." },
  { q: "The plan removes the question 'what now?' so you can just begin.", meaning: "Decision fatigue is the enemy of daily consistency.", apply: "Open today's tab and start the first task without deliberating.", life: "Remove decisions wherever you can — willpower is a limited resource.", career: "Analysts who ship consistently outperform analysts who deliberate endlessly." },
];

const VOCAB_POOL = [
  ["Leverage", "/ˈlev.ər.ɪdʒ/", "to use something to maximum advantage", "We can leverage last quarter's data to justify the new budget."],
  ["Stakeholder", "/ˈsteɪk.hoʊl.dər/", "a person with an interest in a project's outcome", "The stakeholder asked for a summary before the board meeting."],
  ["Actionable", "/ˈæk.ʃən.ə.bəl/", "able to be acted on immediately", "The report needed to end with actionable recommendations."],
  ["Bandwidth", "/ˈbænd.wɪtθ/", "the capacity to take on more work", "I don't have the bandwidth to join another project this sprint."],
  ["Granular", "/ˈɡræn.jə.lər/", "detailed at a fine level", "Break the metric down to a more granular, weekly view."],
  ["Synergy", "/ˈsɪn.ər.dʒi/", "combined effect greater than parts alone", "The synergy between marketing and sales boosted conversions."],
  ["Deliverable", "/dɪˈlɪv.ər.ə.bəl/", "a tangible output of a project", "The final deliverable is due by Friday afternoon."],
  ["Bottleneck", "/ˈbɒt.əl.nek/", "a point that slows down a process", "Manual data entry was the bottleneck in the pipeline."],
  ["Iterate", "/ˈɪt.ə.reɪt/", "to repeat a process to improve it", "We iterated on the dashboard design three times before launch."],
  ["Scalable", "/ˈskeɪ.lə.bəl/", "able to grow without breaking down", "The ETL job needed a more scalable architecture."],
  ["Onboarding", "/ˈɒnˌbɔːd.ɪŋ/", "the process of integrating a new hire", "Her onboarding included two weeks of shadowing the analytics team."],
  ["Escalate", "/ˈes.kə.leɪt/", "to raise an issue to a higher authority", "Escalate the data discrepancy to the team lead today."],
  ["Alignment", "/əˈlaɪn.mənt/", "agreement between people or plans", "We need alignment across teams before the launch."],
  ["Turnaround", "/ˈtɜːn.ə.raʊnd/", "time taken to complete and return work", "The turnaround for the report was under 24 hours."],
  ["Benchmark", "/ˈbentʃ.mɑːrk/", "a standard used for comparison", "Compare this quarter's churn rate to the industry benchmark."],
  ["Robust", "/roʊˈbʌst/", "strong and unlikely to fail", "We need a robust pipeline that handles missing data gracefully."],
  ["Redundant", "/rɪˈdʌn.dənt/", "no longer needed; duplicated", "Remove the redundant columns before loading the table."],
  ["Proactive", "/proʊˈæk.tɪv/", "acting in advance of a future situation", "Being proactive about data quality avoids issues downstream." ],
  ["Consolidate", "/kənˈsɒl.ɪ.deɪt/", "to combine into a single, coherent whole", "Consolidate all regional reports into one master sheet."],
  ["Discrepancy", "/dɪˈskrep.ən.si/", "a difference between things that should match", "There's a discrepancy between the two revenue figures."],
  ["Mitigate", "/ˈmɪt.ɪ.ɡeɪt/", "to make a problem less severe", "Add validation rules to mitigate future data-entry errors."],
  ["Cross-functional", "/krɒs ˈfʌŋk.ʃən.əl/", "involving several departments", "It was a cross-functional effort between BI and product."],
  ["Prioritize", "/praɪˈɒr.ɪ.taɪz/", "to treat something as more important", "Prioritize the assignment before the mini project today."],
  ["Insight", "/ˈɪn.saɪt/", "a useful understanding drawn from data", "The chart revealed an insight no one expected."],
  ["Framework", "/ˈfreɪm.wɜːrk/", "a structured approach to a problem", "Use the STAR framework to answer behavioral questions."],
  ["Throughput", "/ˈθruːpʊt/", "the amount of work completed in a period", "Automating the report doubled the team's throughput."],
  ["Anomaly", "/əˈnɒm.ə.li/", "something that deviates from the norm", "The spike in refunds was flagged as an anomaly."],
  ["Rationale", "/ˌræʃ.ənˈɑːl/", "the reasoning behind a decision", "Document the rationale for excluding outliers."],
  ["Feasible", "/ˈfiː.zə.bəl/", "possible to do within constraints", "A one-week turnaround isn't feasible without more resources."],
  ["Traction", "/ˈtræk.ʃən/", "progress or growing acceptance", "The new dashboard is gaining traction with leadership."],
];

const QUESTION_BANK = {
  Excel: ["What's the difference between VLOOKUP and XLOOKUP?", "How would you remove duplicate rows in a dataset?", "Explain how a pivot table summarizes data.", "When would you use INDEX-MATCH over VLOOKUP?"],
  SQL: ["What's the difference between WHERE and HAVING?", "Explain INNER JOIN vs LEFT JOIN with an example.", "How does a window function differ from GROUP BY?", "Write a query to find the second-highest salary."],
  Python: ["What's the difference between a list and a tuple?", "How do you handle missing values in a Pandas DataFrame?", "Explain list comprehension with an example.", "How would you merge two DataFrames?"],
  Statistics: ["Explain Type I vs Type II error.", "What does a p-value actually tell you?", "When would you use a t-test vs a chi-square test?", "What's the difference between correlation and causation?"],
  "Power BI": ["What's the difference between a measure and a calculated column?", "Explain star schema in the context of Power BI.", "What does the CALCULATE function do in DAX?", "How do you handle row-level security in Power BI?"],
  Git: ["What's the difference between git merge and git rebase?", "How do you resolve a merge conflict?", "What is a pull request and why does it matter?", "Explain git branching strategy on a team project."],
  Tableau: ["What's the difference between a dimension and a measure?", "Explain a calculated field you've built.", "How do you optimize a slow Tableau dashboard?", "What's the difference between joins and blends in Tableau?"],
  ETL: ["Walk me through the stages of an ETL pipeline.", "How do you handle a failed load step?", "What's the difference between ETL and ELT?", "How would you validate data after a transformation?"],
  DWH: ["Explain star schema vs snowflake schema.", "What's the difference between OLAP and OLTP?", "Why do fact tables typically have foreign keys to dimension tables?", "What is a slowly changing dimension?"],
  "Data Modeling": ["What is normalization and why does it matter?", "Explain a one-to-many relationship with an example.", "When would you denormalize a schema?", "What's the difference between a primary key and a foreign key?"],
  Databricks: ["What is a Spark DataFrame and how does it differ from Pandas?", "Explain what Delta Lake adds on top of a data lake.", "What's the benefit of using notebooks for data pipelines?", "How does Spark achieve distributed processing?"],
  ML: ["Explain the difference between supervised and unsupervised learning.", "What is overfitting and how do you prevent it?", "How would you evaluate a classification model?", "Explain precision vs recall with an example."],
  BA: ["How do you gather requirements from a non-technical stakeholder?", "Walk me through a process map you've created.", "How do you handle conflicting stakeholder priorities?", "What's your experience with Agile ceremonies?"],
  GENERIC: ["Tell me about a project you're proud of.", "Describe a time you handled conflicting priorities.", "Why do you want to work as a data/business analyst?", "How do you stay organized across multiple tasks?", "Tell me about a time you found an error in your own analysis."],
};

/* ============================================================
   HELPERS (same logic as the React version)
   ============================================================ */
function clampDay(d) { return Math.max(1, Math.min(TOTAL_DAYS, d)); }
function getPhase(day) {
  day = clampDay(day);
  return PHASES.find((p) => day >= p.start && day <= p.end) || PHASES[PHASES.length - 1];
}
function getTopic(day, phase) {
  const idx = (day - phase.start) % phase.topics.length;
  return phase.topics[idx];
}
function isMiniProjectDay(day, phase) {
  return (day - phase.start) % 5 === 4;
}
function generateChecklist(day) {
  const phase = getPhase(day);
  const topic = getTopic(day, phase);
  const diffCycle = ["Easy", "Medium", "Hard"];
  const difficulty = diffCycle[day % 3];
  const tasks = [
    { id: "theory", cat: "Theory", title: `Study: ${topic}`, est: "45 min", priority: "High", resource: phase.res.theory,
      steps: [
        `Open the resource "${phase.res.theory}" and read the section that covers "${topic}".`,
        `Write down the core definition of "${topic}" in your own words.`,
        `List 3 real-world situations where "${topic}" is used in a ${phase.skill} job.`,
        `Note down any term you don't understand and look it up before moving on.`
      ],
      goal: `Understand the concept of "${topic}" well enough to explain it to someone else in 2–3 sentences.`,
      tip: `Don't just read passively — pause after each paragraph and try to restate the idea in your own words.` },
    { id: "video", cat: "Video", title: `Watch a lesson on ${topic}`, est: "30 min", priority: "Medium", resource: phase.res.video,
      steps: [
        `Search for "${topic} ${phase.skill} tutorial" on "${phase.res.video}".`,
        `Watch at normal speed first, then re-watch the tricky parts at 0.75x.`,
        `Pause every 5 minutes and write down one key takeaway.`,
        `Try to reproduce the example shown in the video on your own machine.`
      ],
      goal: `See "${topic}" applied in a real example, not just in theory.`,
      tip: `Watching without practicing is a common trap — always try the example yourself right after.` },
    { id: "doc", cat: "Documentation", title: `Read official docs on ${topic}`, est: "20 min", priority: "Medium", resource: phase.res.doc,
      steps: [
        `Open "${phase.res.doc}" and find the page related to "${topic}".`,
        `Read the syntax, parameters, or rules exactly as documented.`,
        `Compare this with what you learned from the video/theory step — note any differences.`,
        `Bookmark this page for quick reference during the assignment.`
      ],
      goal: `Get the precise, technically correct definition — docs are the source of truth.`,
      tip: `Official docs are dry but accurate. Skim first, then go deep only on the parts you're unsure about.` },
    { id: "practice", cat: "Practice", title: `Hands-on practice: ${topic}`, est: "60 min", priority: "High", resource: phase.res.practice,
      steps: [
        `Open "${phase.res.practice}" and pick 3–5 exercises related to "${topic}".`,
        `Attempt each exercise without looking at the solution first.`,
        `If stuck for more than 10 minutes, check a hint — not the full solution.`,
        `After solving, compare your approach with the sample solution and note what you'd do differently.`
      ],
      goal: `Build muscle memory for "${topic}" by solving problems hands-on.`,
      tip: `Struggling a bit before checking the answer is exactly how the skill sticks.` },
    { id: "assignment", cat: "Assignment", title: `Assignment — apply ${topic}`, est: "40 min", priority: "High", resource: "Self-graded",
      steps: [
        `Pick a small, self-contained problem that uses "${topic}" (from today's phase: ${phase.name}).`,
        `Solve it from scratch without referring back to the theory notes.`,
        `Self-grade it: did you get the right output? Was your approach efficient?`,
        `Write one sentence on what you'd improve if you did it again.`
      ],
      goal: `Prove to yourself that you can apply "${topic}" independently, not just recognize it.`,
      tip: `This is the step that actually counts in interviews — applied knowledge, not memorized facts.` },
    { id: "interview", cat: "Interview Questions", title: `Answer 3 interview questions on ${phase.skill}`, est: "20 min", priority: "Medium", resource: "Question Bank",
      steps: [
        `Go to the "Mock Interview" tab and pick 3 questions tagged "${phase.skill}".`,
        `Answer each one out loud, as if a real interviewer is listening.`,
        `Time yourself — aim for a clear answer within 60–90 seconds per question.`,
        `Write down the key points of your answer so you can revise them later.`
      ],
      goal: `Get comfortable explaining "${phase.skill}" concepts under light pressure.`,
      tip: `Speaking out loud (not just thinking the answer) is what makes real interviews feel less scary.` },
    { id: "english", cat: "English", title: "Speaking, grammar & pronunciation practice", est: "25 min", priority: "Medium", resource: "Daily English Set",
      steps: [
        `Open the "Vocabulary" tab and review today's 10 words.`,
        `Say each word out loud 3 times, focusing on the pronunciation guide.`,
        `Use 3 of today's words in full sentences related to your ${phase.skill} work.`,
        `Record yourself speaking for 1 minute about today's topic and listen back.`
      ],
      goal: `Build clear, confident spoken English for interviews and meetings.`,
      tip: `Recording your own voice feels awkward but is one of the fastest ways to fix pronunciation habits.` },
    { id: "revision", cat: "Revision", title: "Spaced-repetition revision", est: "15 min", priority: "Medium", resource: "Auto-generated",
      steps: [
        `Check the "Spaced-repetition revision" list on the Today tab.`,
        `For each topic listed, try to recall the definition from memory before re-reading it.`,
        `Re-read only the parts you couldn't recall.`,
        `Update your notes if you find a better way to explain the concept now.`
      ],
      goal: `Keep older topics fresh so you don't quietly forget them.`,
      tip: `Recall-first, read-second is more effective than just re-reading your notes.` },
    { id: "notes", cat: "Notes", title: `Write revision notes on ${topic}`, est: "15 min", priority: "Low", resource: "Notes tab",
      steps: [
        `Open the "Notes" tab.`,
        `Write a short summary of "${topic}" in 4–6 bullet points.`,
        `Include one example and one common mistake to avoid.`,
        `Keep it short — these notes are for quick revision later, not a full essay.`
      ],
      goal: `Create a fast, personal reference you can re-read in under 2 minutes.`,
      tip: `Future-you will thank present-you for keeping these notes short and scannable.` },
  ];
  if (isMiniProjectDay(day, phase)) {
    tasks.splice(5, 0, { id: "miniproject", cat: "Mini Project", title: `Mini project checkpoint: ${phase.name}`, est: "50 min", priority: "High", resource: "Build & save to GitHub",
      steps: [
        `Open the "Projects" tab and find a project matching the "${phase.skill}" skill.`,
        `Work on the next checkpoint of that project — don't try to finish it all in one sitting.`,
        `Save your progress and push it to your GitHub portfolio repo.`,
        `Write a one-line commit message describing what you added today.`
      ],
      goal: `Turn today's learning into a visible, working piece of your portfolio.`,
      tip: `Small, regular commits look better to recruiters than one giant commit at the end.` });
  }
  return { phase, topic, difficulty, tasks };
}
function getQuote(day) { return QUOTES[(day - 1) % QUOTES.length]; }
function getVocabForDay(day) {
  const startIdx = ((day - 1) * 3) % VOCAB_POOL.length;
  const words = [];
  for (let i = 0; i < 10; i++) words.push(VOCAB_POOL[(startIdx + i) % VOCAB_POOL.length]);
  return words;
}
function getRevisionTopics(day) {
  const offsets = [3, 7, 21];
  const seen = new Set();
  const out = [];
  offsets.forEach((off) => {
    const d = day - off;
    if (d >= 1) {
      const p = getPhase(d);
      const t = getTopic(d, p);
      const key = p.name + t;
      if (!seen.has(key)) { seen.add(key); out.push({ day: d, phase: p.name, topic: t, offset: off }); }
    }
  });
  return out;
}
function getReadiness(day) {
  const seen = new Set();
  return PHASES.filter((p) => { if (seen.has(p.skill)) return false; seen.add(p.skill); return true; })
    .map((p) => {
      let pct;
      if (day > p.end) pct = 100;
      else if (day < p.start) pct = 0;
      else pct = Math.round(((day - p.start + 1) / (p.end - p.start + 1)) * 100);
      return { skill: p.skill, pct };
    });
}
function getMockQuestions(day) {
  const phase = getPhase(day);
  const bank = QUESTION_BANK[phase.skill] || QUESTION_BANK.GENERIC;
  const qs = [];
  for (let i = 0; i < 4; i++) qs.push({ id: `${phase.skill}-${i}`, text: bank[(day + i) % bank.length], skill: phase.skill });
  const gb = QUESTION_BANK.GENERIC;
  qs.push({ id: `GEN-${day}`, text: gb[day % gb.length], skill: "HR / Behavioral" });
  return qs;
}
function weeklyHoursData(day) {
  const weeks = [];
  const currentWeek = Math.ceil(day / 7);
  for (let w = Math.max(1, currentWeek - 7); w <= currentWeek; w++) {
    const base = 8 + ((w * 7) % 6) + (w === currentWeek ? 1.5 : 0);
    weeks.push({ week: `W${w}`, hours: Math.round(base * 10) / 10 });
  }
  return weeks;
}
function esc(s) {
  const d = document.createElement('div'); d.innerText = s == null ? '' : String(s); return d.innerHTML;
}

/* ============================================================
   APPLICATION STATE (in-memory only, mirrors React useState)
   ============================================================ */
const state = {
  theme: "dark",
  tab: "dashboard",
  mobileMore: false,
  day: 1,
  maxDayReached: 1,       // furthest day the learner has actually unlocked
  completed: {},          // { [day]: { [taskId]: true } }
  xp: 0,
  coins: 0,
  streak: 0,
  longestStreak: 0,
  confetti: false,
  taskDetail: null,       // { day, taskId } — controls the task detail modal
  notesText: "",
  jobs: [
    { id: 1, company: "Zynta Retail", role: "Business Analyst", applied: "2 Jul", status: "Interview" },
    { id: 2, company: "Nimbus Analytics", role: "Data Analyst", applied: "28 Jun", status: "Applied" },
  ],
  mentorLog: [
    { role: "ai", text: "Mission Mentor online. Ask me \"Aaj mujhe kya padhna chahiye?\" any time and I'll pull it straight from today's plan." },
  ],
  mentorInput: "",
  missedBanner: false,
  recoveryTasks: [],
  interviewAnswers: {},
  interviewRecorded: {},
};

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "today", label: "Today", icon: "calendarCheck" },
  { id: "roadmap", label: "Roadmap", icon: "map" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "mentor", label: "AI Mentor", icon: "brain" },
  { id: "interview", label: "Mock Interview", icon: "mic" },
  { id: "progress", label: "Progress", icon: "trending" },
  { id: "vocab", label: "Vocabulary", icon: "book" },
  { id: "notes", label: "Notes", icon: "sticky" },
  { id: "jobs", label: "Job Tracker", icon: "briefcase" },
  { id: "resume", label: "Resume", icon: "file" },
  { id: "settings", label: "Settings", icon: "settings" },
];
const mobilePrimary = NAV.slice(0, 4);
const mobileRest = NAV.slice(4);

/* ============================================================
   RENDER: ROOT SHELL
   ============================================================ */
function render() {
  document.documentElement.className = state.theme === "dark" ? "theme-dark" : "theme-light";
  const app = document.getElementById("app");

  const checklist = generateChecklist(state.day);
  const quote = getQuote(state.day);
  const vocab = getVocabForDay(state.day);
  const readiness = getReadiness(state.day);
  const overallPct = Math.round((state.day / TOTAL_DAYS) * 100);
  const doneMap = state.completed[state.day] || {};
  const doneCount = checklist.tasks.filter((t) => doneMap[t.id]).length;
  const dayPct = Math.round((doneCount / checklist.tasks.length) * 100);

  app.innerHTML = `
    ${renderSidebar()}
    <div id="main">
      ${renderTopbar()}
      <div id="content">
        ${state.missedBanner ? renderMissedBanner() : ""}
        <div class="tab-view ${state.tab === 'dashboard' ? 'active' : ''}" data-tab="dashboard"></div>
        <div class="tab-view ${state.tab === 'today' ? 'active' : ''}" data-tab="today"></div>
        <div class="tab-view ${state.tab === 'roadmap' ? 'active' : ''}" data-tab="roadmap"></div>
        <div class="tab-view ${state.tab === 'projects' ? 'active' : ''}" data-tab="projects"></div>
        <div class="tab-view ${state.tab === 'mentor' ? 'active' : ''}" data-tab="mentor"></div>
        <div class="tab-view ${state.tab === 'interview' ? 'active' : ''}" data-tab="interview"></div>
        <div class="tab-view ${state.tab === 'progress' ? 'active' : ''}" data-tab="progress"></div>
        <div class="tab-view ${state.tab === 'vocab' ? 'active' : ''}" data-tab="vocab"></div>
        <div class="tab-view ${state.tab === 'notes' ? 'active' : ''}" data-tab="notes"></div>
        <div class="tab-view ${state.tab === 'jobs' ? 'active' : ''}" data-tab="jobs"></div>
        <div class="tab-view ${state.tab === 'resume' ? 'active' : ''}" data-tab="resume"></div>
        <div class="tab-view ${state.tab === 'settings' ? 'active' : ''}" data-tab="settings"></div>
      </div>
    </div>
    ${renderMobileNav()}
    ${renderMoreSheet()}
    ${state.taskDetail ? renderTaskDetailModal() : ""}
  `;

  // fill the active tab content (only render what's visible, cheap re-render each time)
  const target = app.querySelector(`.tab-view[data-tab="${state.tab}"]`);
  target.innerHTML = renderTabContent(state.tab, { checklist, quote, vocab, readiness, overallPct, doneMap, doneCount, dayPct });

  attachHandlers();
}

/* ============================================================
   TASK DETAIL MODAL
   ============================================================ */
function renderTaskDetailModal() {
  const { day, taskId } = state.taskDetail;
  const checklist = generateChecklist(day);
  const task = checklist.tasks.find(t => t.id === taskId);
  if (!task) return "";
  const doneMap = state.completed[day] || {};
  const done = !!doneMap[task.id];
  const catColor = { Theory: AMBER, Video: CYAN, Documentation: VIOLET, Practice: AMBER, Assignment: CORAL, "Mini Project": VIOLET, "Interview Questions": CYAN, English: AMBER, Revision: CYAN, Notes: VIOLET };
  const color = catColor[task.cat] || AMBER;

  return `
  <div id="taskDetailOverlay" class="modal-overlay">
    <div class="modal-box" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="flex items-center gap-2">
          ${pill(task.cat, color, true)}
          <span class="text-xs fog">Day ${day} · ${esc(checklist.phase.name)}</span>
        </div>
        <button id="closeTaskDetailBtn" class="modal-close-btn">${icon('x', 18)}</button>
      </div>

      <div class="modal-body">
        <div class="font-display text-lg font-bold paper mb-1">${esc(task.title)}</div>
        <div class="task-meta mb-3">
          <span>⏱ Estimated time: ${task.est}</span>
          <span>Priority: ${task.priority}</span>
          <span>Resource: ${esc(task.resource)}</span>
        </div>

        <div class="detail-section">
          <div class="detail-label" style="color:${color}">Goal</div>
          <div class="text-sm paper-dim">${esc(task.goal)}</div>
        </div>

        <div class="detail-section">
          <div class="detail-label" style="color:${color}">Step-by-step</div>
          <ol class="detail-steps">
            ${task.steps.map(s => `<li>${esc(s)}</li>`).join('')}
          </ol>
        </div>

        <div class="detail-section">
          <div class="detail-label" style="color:${color}">Tip</div>
          <div class="text-sm paper-dim">${esc(task.tip)}</div>
        </div>
      </div>

      <div class="modal-footer">
        ${day < state.maxDayReached
          ? `<div class="text-xs fog" style="text-align:center;">This is a past day — read-only history.</div>`
          : `<button id="toggleFromModalBtn" class="btn-primary" style="background:${done ? 'var(--panel2)' : CYAN}; color:${done ? 'var(--paper-dim)' : '#0B1120'};">
              ${done ? "Mark as not done" : "Mark this task as done"}
            </button>`}
      </div>
    </div>
  </div>`;
}

function renderSidebar() {
  return `
  <aside id="sidebar">
    <div class="brand">
      <div class="brand-icon">${icon('rocket', 18, '#0B1120')}</div>
      <div>
        <div class="brand-title font-display">MISSION-12LPA</div>
        <div class="brand-sub">Analyst Study Planner</div>
      </div>
    </div>
    <nav id="nav">
      ${NAV.map(n => `
        <button class="nav-btn ${state.tab === n.id ? 'active' : ''}" data-nav="${n.id}">
          ${icon(n.icon, 16, state.tab === n.id ? AMBER : 'var(--paper-dim)')} ${n.label}
        </button>
      `).join('')}
    </nav>
    <button id="sidebarThemeToggle" class="theme-toggle-btn">
      ${state.theme === 'dark' ? icon('sun', 15) : icon('moon', 15)} ${state.theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  </aside>`;
}

function renderTopbar() {
  const label = NAV.find(n => n.id === state.tab)?.label || "";
  return `
  <div id="topbar">
    <div class="topbar-brand">
      ${icon('rocket', 18, AMBER)}
      <span class="font-display font-bold text-sm">MISSION-12LPA</span>
    </div>
    <div class="topbar-title font-display">${label}</div>
    <div class="topbar-right">
      <span class="pill" style="background: ${AMBER}1A; color:${AMBER};">${icon('flame',12,AMBER)} ${state.streak}d</span>
      <span class="pill" style="background: ${CYAN}1A; color:${CYAN};">${icon('zap',12,CYAN)} ${state.xp} XP</span>
      <span class="pill" style="background: ${VIOLET}1A; color:${VIOLET};">${icon('coins',12,VIOLET)} ${state.coins}</span>
      <button id="topbarThemeToggle" class="theme-toggle-mobile">${state.theme === 'dark' ? icon('sun', 15) : icon('moon', 15)}</button>
    </div>
  </div>`;
}

function renderMissedBanner() {
  return `
  <div class="panel mb-4" style="border-color:${CORAL};">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-start gap-3">
        <div style="margin-top:2px;">${icon('alert', 20, CORAL)}</div>
        <div>
          <div class="font-display text-sm font-bold">Missed-day recovery plan ready</div>
          <div class="mt-1 text-sm paper-dim">You skipped ${state.recoveryTasks.length} day(s). Here's a condensed catch-up so you don't have to redo the full checklist for each:</div>
          <ul class="mt-2" style="list-style:none;padding:0;display:flex;flex-direction:column;gap:4px;">
            ${state.recoveryTasks.map(r => `
              <li class="flex items-center gap-2 text-sm paper">
                ${icon('rotate', 13, CORAL)} Day ${r.day} — ${esc(r.phase)}: <span class="fog">${esc(r.topic)} (condensed to key points only)</span>
              </li>`).join('')}
          </ul>
        </div>
      </div>
      <button id="startRecoveryBtn" class="hero-btn" style="background:${CORAL};color:#0B1120;border:none;font-weight:600;">Start recovery</button>
    </div>
  </div>`;
}

function renderMobileNav() {
  return `
  <div id="mobilenav">
    ${mobilePrimary.map(n => `
      <button class="mnav-btn ${state.tab === n.id ? 'active' : ''}" data-nav="${n.id}">
        ${icon(n.icon, 18, state.tab === n.id ? AMBER : 'var(--fog)')} ${n.label}
      </button>`).join('')}
    <button id="moreBtn" class="mnav-btn">${icon('menu', 18, 'var(--fog)')} More</button>
  </div>`;
}

function renderMoreSheet() {
  return `
  <div id="moresheet" class="${state.mobileMore ? 'open' : ''}">
    <div class="sheet-inner" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between mb-3">
        <span class="font-display text-sm font-bold">More</span>
        <button id="closeMoreBtn" style="background:none;border:none;color:var(--paper);">${icon('x', 18)}</button>
      </div>
      <div class="sheet-grid">
        ${mobileRest.map(n => `
          <button class="sheet-btn ${state.tab === n.id ? 'active' : ''}" data-nav="${n.id}" data-close-sheet="1">
            ${icon(n.icon, 18, state.tab === n.id ? AMBER : 'var(--paper-dim)')} ${n.label}
          </button>`).join('')}
      </div>
    </div>
  </div>`;
}

/* ============================================================
   TAB CONTENT RENDERERS
   ============================================================ */
function renderTabContent(tab, ctx) {
  switch (tab) {
    case "dashboard": return renderDashboard(ctx);
    case "today": return renderToday(ctx);
    case "roadmap": return renderRoadmap(ctx);
    case "projects": return renderProjects();
    case "mentor": return renderMentor();
    case "interview": return renderInterview();
    case "progress": return renderProgress();
    case "vocab": return renderVocab(ctx);
    case "notes": return renderNotes();
    case "jobs": return renderJobs();
    case "resume": return renderResume();
    case "settings": return renderSettings();
    default: return "";
  }
}

function trajectoryHTML() {
  const day = state.day;
  let row = '<div class="trajectory-row">';
  PHASES.forEach((p, i) => {
    const done = day > p.end;
    const active = day >= p.start && day <= p.end;
    const color = ACCENTS[i % ACCENTS.length];
    row += `
      <button class="traj-node" data-jump="${p.start}">
        <div class="traj-circle" style="
          border-color:${done || active ? color : 'var(--border)'};
          background:${done ? color : active ? color + '33' : 'var(--panel2)'};
          color:${done ? '#0B1120' : active ? color : 'var(--fog)'};
        ">${active ? icon('rocket', 13, done ? '#0B1120' : color) : p.id}</div>
        <span class="traj-label" style="color:${active ? color : 'var(--fog)'}">${esc(p.name)}</span>
      </button>`;
    if (i < PHASES.length - 1) {
      row += `<div class="traj-line" style="background:${day > p.end ? color : 'var(--border)'}"></div>`;
    }
  });
  row += '</div>';
  return `<div class="trajectory-wrap">${row}</div>`;
}

function statBlock(iconName, label, value, color) {
  return `
  <div class="stat-block">
    <div class="stat-icon" style="background:${color}22;">${icon(iconName, 17, color)}</div>
    <div style="min-width:0;">
      <div class="stat-label">${label}</div>
      <div class="stat-value">${value}</div>
    </div>
  </div>`;
}
function progressBar(pct, color, h) {
  h = h || 8;
  return `<div class="progress-track" style="height:${h}px;"><div class="progress-fill" style="width:${pct}%;background:${color};"></div></div>`;
}
function pill(text, color, subtle) {
  return `<span class="pill" style="background:${subtle ? color + '1A' : color}; color:${subtle ? color : '#0B1120'};">${text}</span>`;
}

function renderDashboard(ctx) {
  const { checklist, quote, vocab, readiness, overallPct, doneCount, dayPct } = ctx;
  const level = Math.floor(state.xp / 500) + 1;
  return `
  <div style="display:flex;flex-direction:column;gap:20px;">
    <div class="panel hero-panel">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div class="font-mono text-xs" style="color:${CYAN};">MISSION CONTROL // TARGET ₹12 LPA</div>
          <div class="font-display mt-1 text-2xl font-bold">Day ${state.day} <span class="fog">of ${TOTAL_DAYS}</span></div>
          <div class="mt-1 text-sm paper-dim">Phase ${checklist.phase.id}/17 — ${esc(checklist.phase.name)} · Today's focus: <span style="color:${AMBER}">${esc(checklist.topic)}</span></div>
        </div>
        <div class="flex gap-2">
          <button class="hero-btn" data-day-delta="-1" ${state.day <= 1 ? 'disabled' : ''}>◀ Review prev day</button>
          ${state.day < state.maxDayReached ? `<button class="hero-btn" data-return-today="1" style="border-color:${AMBER};color:${AMBER};">Return to Day ${state.maxDayReached} ▶</button>` : ''}
        </div>
      </div>
      <div class="mt-4">${trajectoryHTML()}</div>
      <div class="mt-3 flex items-center gap-3">
        ${progressBar(overallPct, AMBER)}
        <span class="font-mono text-xs fog" style="flex-shrink:0;">${overallPct}% to launch</span>
      </div>
    </div>

    <div class="grid grid-2 sm-grid-3 lg-grid-6">
      ${statBlock('flame', 'Streak', state.streak + 'd', CORAL)}
      ${statBlock('trophy', 'Longest streak', state.longestStreak + 'd', AMBER)}
      ${statBlock('zap', 'XP / Level', state.xp + ' · L' + level, CYAN)}
      ${statBlock('coins', 'Coins', state.coins, VIOLET)}
      ${statBlock('listChecks', "Today's tasks", doneCount + '/' + checklist.tasks.length, CYAN)}
      ${statBlock('target', "Today's progress", dayPct + '%', AMBER)}
    </div>

    <div class="grid dash-two-col">
      <div class="panel dash-quote-panel">
        <div class="flex items-center gap-2 mb-2">${icon('quote',15,AMBER)}<span class="font-display text-sm font-bold">Today's quote</span></div>
        <div class="text-lg font-medium paper">"${esc(quote.q)}"</div>
        <div class="mt-3 grid sm-grid-2 text-sm paper-dim" style="gap:8px;">
          <div><span style="color:${CYAN}">Meaning: </span>${esc(quote.meaning)}</div>
          <div><span style="color:${CYAN}">Apply today: </span>${esc(quote.apply)}</div>
          <div><span style="color:${CYAN}">Life lesson: </span>${esc(quote.life)}</div>
          <div><span style="color:${CYAN}">Career lesson: </span>${esc(quote.career)}</div>
        </div>
      </div>
      <div class="panel">
        <div class="flex items-center gap-2 mb-2">${icon('brain',15,VIOLET)}<span class="font-display text-sm font-bold">AI Mentor</span></div>
        <div class="text-sm paper-dim">"Aaj mujhe kya padhna chahiye?"</div>
        <button id="mentorQuickBtn" class="btn-primary mt-3" style="background:${VIOLET};color:#0B1120;display:flex;align-items:center;justify-content:center;gap:8px;">
          ${icon('sparkles',14,'#0B1120')} Get instant answer
        </button>
        <button id="simulateMissedBtn" class="btn-secondary mt-2" style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;">
          ${icon('rotate',13)} Simulate missed 3 days
        </button>
      </div>
    </div>

    <div class="panel">
      <div class="flex items-center gap-2 mb-3">${icon('barChart',15,CYAN)}<span class="font-display text-sm font-bold">Readiness score by skill</span></div>
      <div class="grid sm-grid-2 lg-grid-3">
        ${readiness.map((r, i) => `
          <div>
            <div class="flex justify-between text-xs mb-1"><span class="paper-dim">${r.skill}</span><span class="font-mono" style="color:${ACCENTS[i % ACCENTS.length]}">${r.pct}%</span></div>
            ${progressBar(r.pct, ACCENTS[i % ACCENTS.length])}
          </div>`).join('')}
      </div>
    </div>

    <div class="grid lg-grid-2">
      <div class="panel">
        <div class="flex items-center gap-2 mb-2">${icon('book',15,AMBER)}<span class="font-display text-sm font-bold">Vocabulary preview</span></div>
        <div class="flex flex-wrap gap-2">
          ${vocab.slice(0,6).map(v => pill(esc(v[0]), AMBER, true)).join('')}
        </div>
      </div>
      <div class="panel">
        <div class="flex items-center gap-2 mb-2">${icon('radio',15,CORAL)}<span class="font-display text-sm font-bold">Upcoming topics</span></div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;" class="text-sm paper-dim">
          ${[1,2,3].map(off => {
            const d = clampDay(state.day + off); const p = getPhase(d);
            return `<li class="flex justify-between"><span>Day ${d} · ${esc(p.name)}</span><span class="fog">${esc(getTopic(d,p))}</span></li>`;
          }).join('')}
        </ul>
      </div>
    </div>
  </div>`;
}

function renderToday(ctx) {
  const { checklist, doneMap } = ctx;
  const catColor = { Theory: AMBER, Video: CYAN, Documentation: VIOLET, Practice: AMBER, Assignment: CORAL, "Mini Project": VIOLET, "Interview Questions": CYAN, English: AMBER, Revision: CYAN, Notes: VIOLET };
  const revisionTopics = getRevisionTopics(state.day);
  const allDone = checklist.tasks.every(t => doneMap[t.id]);
  const leftCount = checklist.tasks.length - Object.values(doneMap).filter(Boolean).length;

  return `
  <div style="display:flex;flex-direction:column;gap:20px;">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <div class="font-display text-xl font-bold">Day ${state.day} checklist</div>
        <div class="text-sm paper-dim">${esc(checklist.phase.name)} · ${esc(checklist.topic)} · Difficulty: ${checklist.difficulty}</div>
      </div>
      <div class="flex gap-2">
        <button class="hero-btn" data-day-delta="-1" ${state.day <= 1 ? 'disabled' : ''}>◀ Review</button>
        ${state.day < state.maxDayReached ? `<button class="hero-btn" data-return-today="1" style="border-color:${AMBER};color:${AMBER};">Back to Day ${state.maxDayReached} ▶</button>` : ''}
      </div>
    </div>

    ${state.day < state.maxDayReached
      ? `<div class="text-xs" style="color:${AMBER}">You're reviewing an earlier day. Progress here is locked — this is read-only history.</div>`
      : `<div class="text-xs fog">Tap a task's title to see full step-by-step details. Tap the circle to mark it done. Finish every task and Day ${state.day + 1 <= TOTAL_DAYS ? state.day + 1 : state.day} unlocks automatically.</div>`}

    <div style="display:flex;flex-direction:column;gap:10px;">
      ${checklist.tasks.map(t => {
        const done = !!doneMap[t.id];
        return `
        <div class="panel task-panel" style="border-color:${done ? CYAN : 'var(--border)'}; opacity:${done ? 0.75 : 1};">
          <button class="task-toggle" data-toggle-task="${t.id}" aria-label="Mark ${esc(t.title)} as done">
            ${done ? icon('check', 20, CYAN) : icon('circle', 20, 'var(--fog)')}
          </button>
          <button class="task-body" data-open-task="${t.id}">
            <div class="flex flex-wrap items-center gap-2">
              ${pill(t.cat, catColor[t.cat] || AMBER, true)}
              <span class="font-medium paper" style="text-decoration:${done ? 'line-through' : 'none'};">${esc(t.title)}</span>
            </div>
            <div class="task-meta">
              <span>⏱ ${t.est}</span><span>Priority: ${t.priority}</span><span>Resource: ${esc(t.resource)}</span>
            </div>
          </button>
          <div class="task-chevron">${icon('chevronRight', 16, 'var(--fog)')}</div>
        </div>`;
      }).join('')}
    </div>

    ${revisionTopics.length > 0 ? `
    <div class="panel" style="border-color:${CYAN};">
      <div class="flex items-center gap-2 mb-2">${icon('rotate',15,CYAN)}<span class="font-display text-sm font-bold">Spaced-repetition revision</span></div>
      <div style="display:flex;flex-direction:column;gap:6px;" class="text-sm">
        ${revisionTopics.map(r => `
          <div class="flex justify-between paper-dim">
            <span>${esc(r.topic)} <span class="fog">(${esc(r.phase)})</span></span>
            <span class="font-mono text-xs" style="color:${CYAN}">from Day ${r.day} · ${r.offset}d ago</span>
          </div>`).join('')}
      </div>
    </div>` : ''}

    <div class="panel" style="border-color:${allDone ? CYAN : 'var(--border)'}; text-align:center;">
      ${state.confetti ? `<span id="confetti-el">🎉✨🎊</span>` : ''}
      ${allDone
        ? `<div class="font-display font-bold" style="color:${CYAN};">All tasks complete — moving to Day ${clampDay(state.day+1)} automatically ✓</div>`
        : `<div class="text-sm paper-dim">Complete all tasks to automatically move to the next day. <span style="color:${AMBER}">${leftCount} task${leftCount === 1 ? '' : 's'} left.</span></div>`}
    </div>
  </div>`;
}

function renderRoadmap(ctx) {
  const readiness = ctx.readiness;
  return `
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="font-display text-xl font-bold">17-phase roadmap</div>
    <div class="text-sm paper-dim">Order is fixed by design — each phase builds on the last.</div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${PHASES.map((p, i) => {
        const status = state.day > p.end ? "Completed" : state.day >= p.start ? "In progress" : "Locked";
        const color = ACCENTS[i % ACCENTS.length];
        const r = readiness.find(r => r.skill === p.skill);
        const pct = r ? r.pct : 0;
        return `
        <div class="panel" style="border-color:${status === 'In progress' ? color : 'var(--border)'};">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-3">
              <div style="display:flex;height:32px;width:32px;align-items:center;justify-content:center;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;background:${color}22;color:${color};">${p.id}</div>
              <div>
                <div class="font-medium paper">${esc(p.name)}</div>
                <div class="text-xs fog">Day ${p.start}–${p.end} · ${p.topics.length} topics</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              ${pill(status, status === 'Completed' ? CYAN : status === 'In progress' ? color : 'var(--fog)', true)}
              <span class="font-mono text-xs" style="color:${color}">${pct}%</span>
              <button class="btn-secondary" data-jump="${p.start}">Jump ${icon('chevronRight',11)}</button>
            </div>
          </div>
          <div class="mt-2">${progressBar(pct, color, 5)}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderProjects() {
  return `
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="font-display text-xl font-bold">Portfolio projects</div>
    <div class="grid sm-grid-2">
      ${PROJECTS.map(pr => {
        const unlocked = state.day >= pr.unlock;
        return `
        <div class="panel" style="opacity:${unlocked ? 1 : 0.55};">
          <div class="flex items-center justify-between">
            <span class="font-medium">${esc(pr.name)}</span>
            ${pill(unlocked ? "Unlocked" : `Unlocks Day ${pr.unlock}`, unlocked ? CYAN : 'var(--fog)', true)}
          </div>
          <div class="mt-1 text-xs fog">${esc(pr.skill)}</div>
          <div class="mt-2 text-sm paper-dim">${esc(pr.desc)}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderMentor() {
  return `
  <div style="display:flex;flex-direction:column;height:70vh;">
    <div class="font-display text-xl font-bold mb-3">AI Mentor</div>
    <div class="panel mentor-log">
      ${state.mentorLog.map(m => `
        <div class="mentor-row ${m.role}">
          <div class="mentor-bubble" style="background:${m.role === 'user' ? AMBER : 'var(--panel2)'}; color:${m.role === 'user' ? '#0B1120' : 'var(--paper)'};">${esc(m.text)}</div>
        </div>`).join('')}
    </div>
    <div class="mt-3 flex gap-2">
      <input id="mentorInputEl" type="text" placeholder="Ask: what should I study today?" value="${esc(state.mentorInput)}" />
      <button id="mentorSendBtn" style="border-radius:8px;padding:0 16px;background:${VIOLET};border:none;display:flex;align-items:center;">${icon('send',16,'#0B1120')}</button>
    </div>
    <div class="mt-2 flex flex-wrap gap-2">
      ${["Aaj mujhe kya padhna chahiye?", "How ready am I in SQL?", "What should I revise?"].map(q => `
        <button class="chip-btn" data-mentor-quick="${esc(q)}">${esc(q)}</button>`).join('')}
    </div>
  </div>`;
}

function renderInterview() {
  const mockQs = getMockQuestions(state.day);
  return `
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div>
      <div class="font-display text-xl font-bold">Daily mock interview</div>
      <div class="text-sm paper-dim">5 questions for Day ${state.day}. Type your spoken answer, then mark it practiced.</div>
    </div>
    ${mockQs.map(q => {
      const key = `${state.day}-${q.id}`;
      const recorded = !!state.interviewRecorded[key];
      const answer = state.interviewAnswers[key] || "";
      return `
      <div class="panel" style="border-color:${recorded ? CYAN : 'var(--border)'};">
        <div class="mb-1">${pill(q.skill, VIOLET, true)}</div>
        <div class="font-medium paper">${esc(q.text)}</div>
        <textarea data-interview-key="${key}" rows="3" placeholder="Speak your answer out loud, then jot the key points here...">${esc(answer)}</textarea>
        <button class="mt-2" data-toggle-interview="${key}" style="display:flex;align-items:center;gap:6px;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:500;border:none;background:${recorded ? CYAN : 'var(--panel2)'};color:${recorded ? '#0B1120' : 'var(--paper-dim)'};">
          ${icon('mic',13)} ${recorded ? "Practiced ✓" : "Mark as practiced"}
        </button>
      </div>`;
    }).join('')}
  </div>`;
}

function renderProgress() {
  const readiness = getReadiness(state.day);
  const weekly = weeklyHoursData(state.day);
  const overallPct = Math.round((state.day / TOTAL_DAYS) * 100);
  const maxHours = Math.max(...weekly.map(w => w.hours), 1);
  return `
  <div style="display:flex;flex-direction:column;gap:20px;">
    <div class="font-display text-xl font-bold">Progress</div>
    <div class="grid lg-grid-2">
      <div class="panel">
        <div class="font-display text-sm font-bold mb-2">Weekly study hours</div>
        <div style="height:220px;display:flex;align-items:flex-end;gap:8px;padding-top:12px;border-bottom:1px solid var(--border);">
          ${weekly.map(w => `
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:100%;max-width:28px;border-radius:4px 4px 0 0;background:${AMBER};height:${Math.max(4,(w.hours/maxHours)*170)}px;" title="${w.hours}h"></div>
              <span class="text-xs fog">${w.week}</span>
            </div>`).join('')}
        </div>
      </div>
      <div class="panel">
        <div class="font-display text-sm font-bold mb-2">Skill readiness</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${readiness.map((r,i) => `
            <div>
              <div class="flex justify-between text-xs mb-1"><span class="paper-dim">${r.skill}</span><span class="font-mono" style="color:${ACCENTS[i % ACCENTS.length]}">${r.pct}%</span></div>
              ${progressBar(r.pct, ACCENTS[i % ACCENTS.length], 6)}
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="flex items-center justify-between mb-3">
        <span class="font-display text-sm font-bold">240-day heatmap</span>
        <span class="text-xs fog">Streak ${state.streak}d · Longest ${state.longestStreak}d · Overall ${overallPct}%</span>
      </div>
      <div class="heatmap-grid">
        ${Array.from({length: TOTAL_DAYS}, (_, i) => i + 1).map(d => `
          <div class="heatmap-cell" title="Day ${d}" style="background:${d < state.day ? AMBER : d === state.day ? CYAN : 'var(--panel2)'}; border:${d === state.day ? '1px solid ' + CYAN : 'none'};"></div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderVocab(ctx) {
  const vocab = ctx.vocab;
  return `
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="font-display text-xl font-bold">Today's 10 words — Day ${state.day}</div>
    <div class="grid sm-grid-2">
      ${vocab.map(v => `
        <div class="panel">
          <div class="flex items-baseline justify-between">
            <span class="font-display font-bold" style="color:${AMBER}">${esc(v[0])}</span>
            <span class="font-mono text-xs fog">${esc(v[1])}</span>
          </div>
          <div class="mt-1 text-sm paper-dim">${esc(v[2])}</div>
          <div class="mt-1 text-xs fog" style="font-style:italic;">"${esc(v[3])}"</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderNotes() {
  return `
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="font-display text-xl font-bold">Notes — Day ${state.day}</div>
    <div class="panel">
      <textarea id="notesTextarea" rows="16" style="resize:none;" placeholder="Write markdown notes here — auto-saved to this session...">${esc(state.notesText)}</textarea>
      <div class="mt-2 text-xs fog">Saved in this session · ${state.notesText.length} characters</div>
    </div>
  </div>`;
}

function renderJobs() {
  const statuses = ["Applied", "Interview", "Offer", "Rejected", "Follow-up"];
  const statusColor = { Applied: CYAN, Interview: AMBER, Offer: CYAN, Rejected: CORAL, "Follow-up": VIOLET };
  return `
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="flex items-center justify-between">
      <div class="font-display text-xl font-bold">Job application tracker</div>
      <button id="addJobBtn" style="display:flex;align-items:center;gap:4px;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;background:${AMBER};color:#0B1120;border:none;">${icon('plus',14,'#0B1120')} Add</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${state.jobs.map(j => `
        <div class="panel">
          <div class="grid grid-2 sm-grid-3" style="grid-template-columns: repeat(2,1fr); align-items:center;">
            <input type="text" data-job-id="${j.id}" data-job-field="company" value="${esc(j.company)}" style="background:transparent;" />
            <input type="text" data-job-id="${j.id}" data-job-field="role" value="${esc(j.role)}" style="background:transparent;" />
            <input type="text" data-job-id="${j.id}" data-job-field="applied" value="${esc(j.applied)}" style="background:transparent;" />
            <select data-job-id="${j.id}" data-job-field="status" style="background:transparent; color:${statusColor[j.status]};">
              ${statuses.map(s => `<option value="${s}" ${s === j.status ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
            <button data-remove-job="${j.id}" style="display:flex;align-items:center;justify-content:center;gap:4px;border-radius:8px;padding:4px 8px;font-size:12px;background:none;border:none;color:${CORAL};">${icon('trash',14,CORAL)} Remove</button>
          </div>
        </div>`).join('')}
      ${state.jobs.length === 0 ? `<div class="text-sm fog">No applications yet — add your first one above.</div>` : ''}
    </div>
  </div>`;
}

function renderResume() {
  const items = [
    { label: "Resume structure finalized", phaseDay: 220 },
    { label: "ATS keyword optimization done", phaseDay: 221 },
    { label: "Project descriptions written", phaseDay: 222 },
    { label: "Peer / mentor review completed", phaseDay: 224 },
    { label: "Portfolio site linked", phaseDay: 224 },
    { label: "LinkedIn profile matches resume", phaseDay: 227 },
    { label: "GitHub pinned repos curated", phaseDay: 224 },
  ];
  const atsScore = Math.min(100, Math.round((Math.max(0, state.day - 200) / 40) * 100));
  return `
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div class="font-display text-xl font-bold">Resume readiness</div>
    <div class="panel">
      <div class="flex items-center justify-between">
        <span class="text-sm paper-dim">Estimated ATS score</span>
        <span class="font-mono text-lg font-bold" style="color:${AMBER}">${atsScore}%</span>
      </div>
      <div class="mt-2">${progressBar(atsScore, AMBER)}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${items.map(it => {
        const done = state.day >= it.phaseDay;
        return `
        <div class="panel" style="opacity:${done ? 1 : 0.6};">
          <div class="flex items-center gap-3">
            ${done ? icon('check',18,CYAN) : icon('circle',18,'var(--fog)')}
            <span>${esc(it.label)}</span>
            ${!done ? `<span class="font-mono text-xs fog" style="margin-left:auto;">Day ${it.phaseDay}</span>` : ''}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderSettings() {
  return `
  <div style="max-width:420px;display:flex;flex-direction:column;gap:16px;">
    <div class="font-display text-xl font-bold">Settings</div>
    <div class="panel">
      <div class="mb-2 text-sm font-medium">Theme</div>
      <div class="flex gap-2">
        <button id="setThemeDark" class="btn-secondary" style="flex:1;border-color:${state.theme === 'dark' ? AMBER : 'var(--border)'};color:${state.theme === 'dark' ? AMBER : 'var(--paper-dim)'};">Dark</button>
        <button id="setThemeLight" class="btn-secondary" style="flex:1;border-color:${state.theme === 'light' ? AMBER : 'var(--border)'};color:${state.theme === 'light' ? AMBER : 'var(--paper-dim)'};">Light</button>
      </div>
    </div>
    <div class="panel">
      <div class="mb-2 text-sm font-medium">Jump to day</div>
      <input type="number" id="jumpDayInput" min="1" max="${TOTAL_DAYS}" value="${state.day}" />
    </div>
    <div class="panel">
      <div class="mb-1 text-sm font-medium">Daily study goal</div>
      <div class="text-xs fog">4–6 hours/day recommended · reminders and push notifications are visual placeholders in this preview.</div>
    </div>
    <div class="text-xs fog">All progress in this preview lives in memory for the current session only — nothing is saved to a server or browser storage.</div>
  </div>`;
}

/* ============================================================
   MENTOR LOGIC (identical rules to React version)
   ============================================================ */
function sendMentor(customText) {
  const text = (customText !== undefined ? customText : state.mentorInput).trim();
  if (!text) return;
  const lower = text.toLowerCase();
  const day = state.day;
  const checklist = generateChecklist(day);
  const readiness = getReadiness(day);
  const revisionTopics = getRevisionTopics(day);
  const doneMap = state.completed[day] || {};
  const doneCount = checklist.tasks.filter(t => doneMap[t.id]).length;
  const dayPct = Math.round((doneCount / checklist.tasks.length) * 100);

  let reply;
  if (lower.includes("today") || lower.includes("aaj") || lower.includes("padh")) {
    reply = `Today is Day ${day}/${TOTAL_DAYS} — Phase "${checklist.phase.name}". Focus topic: ${checklist.topic}. Start with Theory (${checklist.tasks[0].est}), then Practice, then the Assignment. You're at ${dayPct}% for today.`;
  } else {
    const match = PHASES.find(p => lower.includes(p.skill.toLowerCase()) || lower.includes(p.name.toLowerCase()));
    if (match) {
      const r = readiness.find(r => r.skill === match.skill);
      reply = `${match.name} readiness is ${r ? r.pct : 0}%. It runs Day ${match.start}–${match.end}. Free resources: ${match.res.theory}, ${match.res.video}.`;
    } else if (lower.includes("revis") || lower.includes("repeat")) {
      reply = revisionTopics.length
        ? `Revise these today: ${revisionTopics.map(r => `${r.topic} (from Day ${r.day})`).join(", ")}.`
        : "No spaced-repetition topics are due yet — keep going, they'll show up automatically.";
    } else if (lower.includes("streak") || lower.includes("missed")) {
      reply = `Current streak: ${state.streak} days (longest: ${state.longestStreak}). If you ever fall behind by 3+ days, use "Simulate Missed Days" on the dashboard and I'll condense a recovery plan.`;
    } else {
      reply = `I'm tuned for this roadmap — try asking "what should I study today", "how ready am I in SQL", or "what should I revise".`;
    }
  }
  state.mentorLog.push({ role: "user", text });
  state.mentorLog.push({ role: "ai", text: reply });
  state.mentorInput = "";
  render();
  // scroll mentor log to bottom + refocus input if mentor tab active
  requestAnimationFrame(() => {
    const log = document.querySelector('.mentor-log');
    if (log) log.scrollTop = log.scrollHeight;
  });
}

/* ============================================================
   ACTIONS (mirror React state setters)
   ============================================================ */
function toggleTask(id, dayOverride) {
  const targetDay = dayOverride || state.day;
  // Past days (already completed history) are read-only — only the day
  // currently unlocked (maxDayReached) can be edited.
  if (targetDay < state.maxDayReached) return;
  const dayMap = { ...(state.completed[targetDay] || {}) };
  const wasOn = !!dayMap[id];
  dayMap[id] = !wasOn;
  state.completed[targetDay] = dayMap;
  state.xp = Math.max(0, state.xp + (wasOn ? -10 : 10));

  // Auto-advance: if this was the day currently on screen and every task is
  // now complete, move to the next day automatically (no manual button).
  const checklist = generateChecklist(targetDay);
  const allDone = checklist.tasks.every(t => dayMap[t.id]);
  if (allDone && targetDay === state.day) {
    render(); // show the "all done" state briefly before advancing
    setTimeout(() => advanceDay(), 550);
  } else {
    render();
  }
}

function advanceDay() {
  const checklist = generateChecklist(state.day);
  const doneMap = state.completed[state.day] || {};
  const allDone = checklist.tasks.every(t => doneMap[t.id]);
  if (!allDone) return;
  if (state.day >= TOTAL_DAYS) { render(); return; }
  state.streak += 1;
  state.longestStreak = Math.max(state.longestStreak, state.streak);
  state.xp += 100;
  state.coins += 50;
  state.confetti = true;
  state.day = clampDay(state.day + 1);
  state.maxDayReached = Math.max(state.maxDayReached, state.day);
  render();
  setTimeout(() => { state.confetti = false; render(); }, 1400);
}

function simulateMissedDays() {
  const day = state.day;
  const skippedDays = [day + 1, day + 2, day + 3].filter(d => d <= TOTAL_DAYS);
  const condensed = skippedDays.map(d => { const p = getPhase(d); return { day: d, phase: p.name, topic: getTopic(d, p) }; });
  state.recoveryTasks = condensed;
  state.missedBanner = true;
  state.streak = 0;
  state.day = clampDay(day + 3);
  render();
}

/* ============================================================
   EVENT WIRING
   ============================================================ */
function attachHandlers() {
  const app = document.getElementById("app");

  // Nav buttons (sidebar, mobile bottom nav, sheet)
  app.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.tab = btn.getAttribute('data-nav');
      state.mobileMore = false;
      render();
    });
  });

  // Theme toggles
  const sbToggle = document.getElementById('sidebarThemeToggle');
  if (sbToggle) sbToggle.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; render(); });
  const tbToggle = document.getElementById('topbarThemeToggle');
  if (tbToggle) tbToggle.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; render(); });

  // More sheet
  const moreBtn = document.getElementById('moreBtn');
  if (moreBtn) moreBtn.addEventListener('click', () => { state.mobileMore = true; render(); });
  const closeMoreBtn = document.getElementById('closeMoreBtn');
  if (closeMoreBtn) closeMoreBtn.addEventListener('click', () => { state.mobileMore = false; render(); });
  const moresheet = document.getElementById('moresheet');
  if (moresheet) moresheet.addEventListener('click', (e) => { if (e.target === moresheet) { state.mobileMore = false; render(); } });

  // Missed banner
  const startRecoveryBtn = document.getElementById('startRecoveryBtn');
  if (startRecoveryBtn) startRecoveryBtn.addEventListener('click', () => { state.missedBanner = false; render(); });

  // Day navigation
  app.querySelectorAll('[data-day-delta]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.day = clampDay(state.day + parseInt(btn.getAttribute('data-day-delta'), 10));
      render();
    });
  });
  app.querySelectorAll('[data-return-today]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.day = state.maxDayReached;
      render();
    });
  });
  app.querySelectorAll('[data-jump]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.day = clampDay(parseInt(btn.getAttribute('data-jump'), 10));
      render();
    });
  });

  // Dashboard mentor quick / simulate missed
  const mentorQuickBtn = document.getElementById('mentorQuickBtn');
  if (mentorQuickBtn) mentorQuickBtn.addEventListener('click', () => {
    sendMentor("Aaj mujhe kya padhna chahiye?");
    state.tab = "mentor";
    render();
  });
  const simulateMissedBtn = document.getElementById('simulateMissedBtn');
  if (simulateMissedBtn) simulateMissedBtn.addEventListener('click', simulateMissedDays);

  // Today tab: task toggles + open task detail
  app.querySelectorAll('[data-toggle-task]').forEach(btn => {
    btn.addEventListener('click', () => toggleTask(btn.getAttribute('data-toggle-task')));
  });
  app.querySelectorAll('[data-open-task]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.taskDetail = { day: state.day, taskId: btn.getAttribute('data-open-task') };
      render();
    });
  });

  // Task detail modal
  const taskDetailOverlay = document.getElementById('taskDetailOverlay');
  if (taskDetailOverlay) {
    taskDetailOverlay.addEventListener('click', () => { state.taskDetail = null; render(); });
  }
  const closeTaskDetailBtn = document.getElementById('closeTaskDetailBtn');
  if (closeTaskDetailBtn) closeTaskDetailBtn.addEventListener('click', () => { state.taskDetail = null; render(); });
  const toggleFromModalBtn = document.getElementById('toggleFromModalBtn');
  if (toggleFromModalBtn) {
    toggleFromModalBtn.addEventListener('click', () => {
      const { day, taskId } = state.taskDetail;
      state.taskDetail = null;
      toggleTask(taskId, day);
    });
  }

  // Mentor tab
  const mentorInputEl = document.getElementById('mentorInputEl');
  if (mentorInputEl) {
    mentorInputEl.addEventListener('input', (e) => { state.mentorInput = e.target.value; });
    mentorInputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMentor(); });
    mentorInputEl.focus();
    mentorInputEl.selectionStart = mentorInputEl.value.length;
  }
  const mentorSendBtn = document.getElementById('mentorSendBtn');
  if (mentorSendBtn) mentorSendBtn.addEventListener('click', () => sendMentor());
  app.querySelectorAll('[data-mentor-quick]').forEach(btn => {
    btn.addEventListener('click', () => sendMentor(btn.getAttribute('data-mentor-quick')));
  });

  // Interview tab
  app.querySelectorAll('[data-interview-key]').forEach(ta => {
    ta.addEventListener('input', (e) => {
      state.interviewAnswers[ta.getAttribute('data-interview-key')] = e.target.value;
    });
  });
  app.querySelectorAll('[data-toggle-interview]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-toggle-interview');
      state.interviewRecorded[key] = !state.interviewRecorded[key];
      render();
    });
  });

  // Vocabulary / Notes
  const notesTextarea = document.getElementById('notesTextarea');
  if (notesTextarea) {
    notesTextarea.addEventListener('input', (e) => {
      state.notesText = e.target.value;
      const counter = notesTextarea.parentElement.querySelector('.fog');
      if (counter) counter.textContent = `Saved in this session · ${state.notesText.length} characters`;
    });
  }

  // Jobs tab
  const addJobBtn = document.getElementById('addJobBtn');
  if (addJobBtn) addJobBtn.addEventListener('click', () => {
    state.jobs.push({ id: Date.now(), company: "New company", role: "Role", applied: "Today", status: "Applied" });
    render();
  });
  app.querySelectorAll('[data-job-id]').forEach(el => {
    const id = Number(el.getAttribute('data-job-id'));
    const field = el.getAttribute('data-job-field');
    el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', (e) => {
      const job = state.jobs.find(j => j.id === id);
      if (job) job[field] = e.target.value;
      if (field === 'status') render();
    });
  });
  app.querySelectorAll('[data-remove-job]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-remove-job'));
      state.jobs = state.jobs.filter(j => j.id !== id);
      render();
    });
  });

  // Settings tab
  const setThemeDark = document.getElementById('setThemeDark');
  if (setThemeDark) setThemeDark.addEventListener('click', () => { state.theme = 'dark'; render(); });
  const setThemeLight = document.getElementById('setThemeLight');
  if (setThemeLight) setThemeLight.addEventListener('click', () => { state.theme = 'light'; render(); });
  const jumpDayInput = document.getElementById('jumpDayInput');
  if (jumpDayInput) jumpDayInput.addEventListener('input', (e) => {
    state.day = clampDay(Number(e.target.value) || 1);
    render();
  });
}

/* ============================================================
   INIT
   ============================================================ */
render();
