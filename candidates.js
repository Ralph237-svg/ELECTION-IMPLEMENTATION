/*=====================================
      SHANAHAN UNIVERSITY
      SUG CANDIDATE DATABASE
======================================*/

const candidates = [

/*=====================================
        PRESIDENT
======================================*/

{
    id: "candidate001",

    name: "John Okafor",

    position: "President",

    faculty: "Faculty of Computing",

    department: "Computer Science",

    level: "300 Level",

    image: "SHANAHAN-ROUND-LOGO.png",

    campaignPoster: "images/posters/john-poster.jpg",

    slogan: "Leadership Through Service",

    biography:
    "John Okafor is a passionate student leader committed to transparency, accountability and student welfare. His goal is to build a stronger and more united student community.",

    manifesto: [

        "Improve student welfare services.",

        "Introduce a digital complaint and feedback system.",

        "Increase transparency in SUG activities.",

        "Support academic excellence and innovation.",

        "Strengthen communication between students and management."

    ],

    achievements: [

        "Former Class Representative.",

        "Faculty Tech Club President.",

        "Organized Community Development Outreach."

    ],

    email: "john@sug.edu.ng",

    phone: "+2348000000001",

    manifestoFile: "SELECT ELEMENTS.docx",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

{
    id: "candidate002",

    name: "Grace Eze",

    position: "President",

    faculty: "Faculty of Management Sciences",

    department: "Accounting",

    level: "300 Level",

    image: "sug logo.webp",

    campaignPoster: "images/posters/grace-poster.jpg",

    slogan: "Together We Can Do More",

    biography:
    "Grace Eze believes in inclusive leadership, financial accountability and improving opportunities for every student on campus.",

    manifesto: [

        "Create student empowerment programmes.",

        "Improve hostel welfare.",

        "Promote transparency.",

        "Support entrepreneurship.",

        "Strengthen student participation."

    ],

    achievements: [

        "Department President.",

        "Best Student Leader Award.",

        "Volunteer Coordinator."

    ],

    email: "grace@sug.edu.ng",

    phone: "+2348000000002",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

{
    id: "candidate003",

    name: "Michael Obi",

    position: "President",

    faculty: "Faculty of Social Sciences",

    department: "Political Science",

    level: "300 Level",

    image: "images/candidates/michael-obi.jpg",

    campaignPoster: "images/posters/michael-poster.jpg",

    slogan: "Your Voice, Our Future",

    biography:
    "Michael Obi is committed to effective representation, student unity and improving campus life through practical leadership.",

    manifesto: [

        "Improve student representation.",

        "Support sports and talent development.",

        "Enhance security awareness.",

        "Organize leadership workshops.",

        "Promote student unity."

    ],

    achievements: [

        "Faculty Senator.",

        "Debating Society President.",

        "Community Volunteer."

    ],

    email: "michael@sug.edu.ng",

    phone: "+2348000000003",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
        VICE PRESIDENT
======================================*/

{
    id: "candidate004",

    name: "Daniel Nwosu",

    position: "Vice President",

    faculty: "Faculty of Engineering",

    department: "Mechanical Engineering",

    level: "300 Level",

    image: "images/candidates/daniel-nwosu.jpg",

    campaignPoster: "images/posters/daniel-poster.jpg",

    slogan: "Together Towards Progress",

    biography:
    "Daniel Nwosu is passionate about teamwork, innovation, and ensuring every student's opinion is represented.",

    manifesto: [

        "Support academic excellence.",

        "Promote student unity.",

        "Improve communication.",

        "Encourage innovation.",

        "Support student clubs."

    ],

    achievements: [

        "Faculty Representative.",

        "Engineering Society Secretary.",

        "Leadership Award Winner."

    ],

    email: "daniel@sug.edu.ng",

    phone: "+2348000000004",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

{
    id: "candidate005",

    name: "Mercy Chukwu",

    position: "Vice President",

    faculty: "Faculty of Arts",

    department: "English Language",

    level: "300 Level",

    image: "images/candidates/mercy-chukwu.jpg",

    campaignPoster: "images/posters/mercy-poster.jpg",

    slogan: "Building a Better Tomorrow",

    biography:
    "Mercy believes every student deserves equal opportunities and quality representation.",

    manifesto: [

        "Increase student participation.",

        "Support campus development.",

        "Improve welfare.",

        "Strengthen leadership.",

        "Encourage volunteerism."

    ],

    achievements: [

        "Faculty President.",

        "Literary Society Chairperson.",

        "Volunteer Leader."

    ],

    email: "mercy@sug.edu.ng",

    phone: "+2348000000005",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
      GENERAL SECRETARY
======================================*/

{
    id: "candidate006",

    name: "Samuel Eze",

    position: "General Secretary",

    faculty: "Faculty of Science",

    department: "Microbiology",

    level: "300 Level",

    image: "images/candidates/samuel-eze.jpg",

    campaignPoster: "images/posters/samuel-poster.jpg",

    slogan: "Accurate Records, Better Leadership",

    biography:
    "Samuel is committed to accountability, proper documentation and transparent communication.",

    manifesto: [

        "Improve documentation.",

        "Digitize SUG records.",

        "Promote transparency.",

        "Support effective communication.",

        "Strengthen student engagement."

    ],

    achievements: [

        "Department Secretary.",

        "Science Association Executive.",

        "Leadership Seminar Organizer."

    ],

    email: "samuel@sug.edu.ng",

    phone: "+2348000000006",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
ASSISTANT GENERAL SECRETARY
======================================*/

{
    id: "candidate007",

    name: "Esther Okeke",

    position: "Assistant General Secretary",

    faculty: "Faculty of Education",

    department: "Educational Management",

    level: "300 Level",

    image: "images/candidates/esther-okeke.jpg",

    campaignPoster: "images/posters/esther-poster.jpg",

    slogan: "Service Through Commitment",

    biography:
    "Esther is dedicated to supporting efficient administration and ensuring smooth communication within the SUG.",

    manifesto: [

        "Assist in accurate record keeping.",

        "Improve communication.",

        "Support student activities.",

        "Encourage teamwork.",

        "Promote accountability."

    ],

    achievements: [

        "Department Assistant Secretary.",

        "Student Volunteer Coordinator.",

        "Leadership Excellence Award."

    ],

    email: "esther@sug.edu.ng",

    phone: "+2348000000007",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},


/*=====================================
            TREASURER
======================================*/

{
    id: "candidate008",

    name: "Chinedu Okeke",

    position: "Treasurer",

    faculty: "Faculty of Management Sciences",

    department: "Banking & Finance",

    level: "300 Level",

    image: "images/candidates/chinedu-okeke.jpg",

    campaignPoster: "images/posters/chinedu-poster.jpg",

    slogan: "Accountability First",

    biography:
    "Chinedu believes every student deserves transparent financial management and accountability in SUG finances.",

    manifesto: [

        "Publish financial reports.",

        "Improve accountability.",

        "Ensure transparent budgeting.",

        "Support student projects.",

        "Promote responsible spending."

    ],

    achievements: [

        "Department Financial Secretary.",

        "Faculty Treasurer.",

        "Best Financial Manager Award."

    ],

    email: "chinedu@sug.edu.ng",

    phone: "+2348000000008",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
      DIRECTOR OF SPORTS
======================================*/

{
    id: "candidate009",

    name: "David Musa",

    position: "Director of Sports",

    faculty: "Faculty of Science",

    department: "Human Kinetics",

    level: "300 Level",

    image: "images/candidates/david-musa.jpg",

    campaignPoster: "images/posters/david-poster.jpg",

    slogan: "Fitness, Unity & Victory",

    biography:
    "David is committed to developing sports and discovering talented athletes within the university.",

    manifesto: [

        "Organize inter-faculty competitions.",

        "Support athletes.",

        "Upgrade sporting facilities.",

        "Encourage participation.",

        "Promote healthy living."

    ],

    achievements: [

        "University Football Captain.",

        "Sports Festival Coordinator.",

        "State Gold Medalist."

    ],

    email: "david@sug.edu.ng",

    phone: "+2348000000009",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
      DIRECTOR OF SOCIALS
======================================*/

{
    id: "candidate010",

    name: "Blessing Obi",

    position: "Director of Socials",

    faculty: "Faculty of Arts",

    department: "Theatre Arts",

    level: "300 Level",

    image: "images/candidates/blessing-obi.jpg",

    campaignPoster: "images/posters/blessing-poster.jpg",

    slogan: "Creating Memorable Campus Life",

    biography:
    "Blessing believes campus life should be exciting, engaging and inclusive for every student.",

    manifesto: [

        "Organize quality events.",

        "Support student talents.",

        "Promote campus entertainment.",

        "Improve social activities.",

        "Increase student participation."

    ],

    achievements: [

        "Drama Club President.",

        "Event Coordinator.",

        "Talent Show Organizer."

    ],

    email: "blessing@sug.edu.ng",

    phone: "+2348000000010",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
      WELFARE DIRECTOR
======================================*/

{
    id: "candidate011",

    name: "Peace Eze",

    position: "Welfare Director",

    faculty: "Faculty of Education",

    department: "Guidance & Counselling",

    level: "300 Level",

    image: "images/candidates/peace-eze.jpg",

    campaignPoster: "images/posters/peace-poster.jpg",

    slogan: "Students First",

    biography:
    "Peace is passionate about improving student welfare and ensuring every student feels supported.",

    manifesto: [

        "Improve hostel welfare.",

        "Support student health.",

        "Promote mental wellness.",

        "Create emergency support programmes.",

        "Strengthen student care."

    ],

    achievements: [

        "Faculty Welfare Officer.",

        "Volunteer Leader.",

        "Community Service Award."

    ],

    email: "peace@sug.edu.ng",

    phone: "+2348000000011",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
},

/*=====================================
      PUBLIC RELATIONS OFFICER
======================================*/

{
    id: "candidate012",

    name: "Sophia Nnamdi",

    position: "Public Relations Officer",

    faculty: "Faculty of Communication",

    department: "Mass Communication",

    level: "300 Level",

    image: "images/candidates/sophia-nnamdi.jpg",

    campaignPoster: "images/posters/sophia-poster.jpg",

    slogan: "Connecting Every Student",

    biography:
    "Sophia is committed to improving communication between the SUG and the student body through openness and timely information.",

    manifesto: [

        "Improve information flow.",

        "Increase social media engagement.",

        "Promote transparency.",

        "Strengthen student feedback.",

        "Build stronger campus communication."

    ],

    achievements: [

        "Faculty PRO.",

        "Media Team Leader.",

        "Public Speaking Champion."

    ],

    email: "sophia@sug.edu.ng",

    phone: "+2348000000012",

    facebook: "#",

    instagram: "#",

    whatsapp: "#",

    status: "Approved",

    votes: 0
}

];
