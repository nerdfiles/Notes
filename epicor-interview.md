# Epicor Software Corporation.

## 1. Are you currently employed?

No, not since December 2017.

## 2. If a very talented Software Engineer on your team kept questioning your decisions, what would you do?

I would first try to analyze the content of their critique and make sure that I am evaluating it correctly but I would assume that they are practicing a principle of charity about my decision with the underlying commitment to the idea that we are all part of the same team set on the goal to build a best product for the customer or user. Sometimes the customer can be ourselves, as developers are also stakeholders in the system's life. We like to say "trust your peer's vision", but at the same time I would need to understand the idea from which they raise their questions: if it's a technical or philosophical idea that they speak from. Usually if it is technical there is a correct answer; that is, if my decision is based on a technical understanding, I can reasonably assume their disagreement concerns a technical conflict which I may have not deduced given the complex/complicated nature of the system that is being built. We have to remind ourselves that these systems start from assumptions, definitions and common terms often found in a domain expert's understanding that we interpret in order to express it in a technical and technological environment. If the disagreement is philosophical, e.g., about architectural styles or the purpose of the system relative to an iteration (in a sprint), I would try to determine if we can establish a rough consensus about how to test our theories so that we can get to the matter of iterating code first so that we can experiment and measure whether or not our philosophical disagreement is borne out by metric understanding. 

## 3. How would you address the individual?

As formally as possible but with a striving for empathy. Our baseline developer experience between each other should start from mutual respect. I like to try to strike a balance or find a middle-ground where possible after I have, with luck, adequately evaluated the question, and try to enhance the question to draw out my own understanding of how the critique or question might be objectively right. It's very important to understand questions in terms of time constraints as well, if we're on a critical path feature. We can also use confirmation from other team members, as mentioned before with rough consensus, to ensure that both our question and decision are meeting on common ground so as to confirm that we are not talking passed each other.

## 4. What techniques would you choose to motivate disengaged employees?

Sometimes employees, creatives, collaborators, explorers feel pressure from external causes and other times internal causes. If it's external, you want to not be dismissive but recognize it and listen. Sometimes people want to become authors of their experience rather than merely passively experience external causes. Give them a voice by starting out with simple questions to figure out their orientation in what they are experiencing. Other times the issue can be internally caused, perhaps by tech debt, infrastructural constraints, lack of opportunity in various senses. I cannot say it's a technique so much as it is a means of discovering what someone wants to realize in their daily or long-term goals. Tools can be used to enable this discover, like for creating opportunities to get feedback without overwhelming (kanban boards, github issues, etc). Goal-setting is important, and there are many tools by which goals can be expressed and a space of opportunity to express them can be mutually reinforcing of more enriching behavior. I would avoid perks because those can become alienating if the work itself is increasingly less rewarding.

I don't like to think of coding exactly as a gaming, but giving developers the opportunity to atomically describe the system as they go can be pretty fun, to become not only coders but narrators of the user stories they are implementing.

## 5. What advice would you give to a new team member?

No matter the language they use: read the Zen of Python. $ python -m 'this'

I learned in a workshop years ago: be a BOOSTER. Be balanced, be observed, be objective (comparative of competing ideas or systems or frameworks, etc), be specific, be timely, always be enhancing, be relevant. Understanding problems, proposing adequate solutions as much as you can conceive, communicate with quality and orderly while avoiding ambiguity, live between flexibility and creativity in self and with how you engage others, always be exploring with other teams and understanding their constraints, needs, wants, goals, and learn when to take a break to let your mind more actively process a solution instead of thinking at your terminal. 

And try not to break the build. Put as many testing layers as you believe appropriate to eyes seeing it in order to prevent bugs reaching production. If you're not going to test, document religiously so others won't be lost in the fray.

## 6. What’s the best way to onboard a new hire?

Give them small tasks or bug fixes to help them get acquainted with the codebase or project. There should be documentation and systems that they need to explore so that they can learn the immediate history of what everyone else has been doing, whether it's in JIRA or Slack logs. We always want to try to get them their credentials as soon as possible so they don't churn while trying to navigate and explore repositories or documentation endpoints.

## 7. How would you negotiate a bigger budget for your team?

We want to make sure that the belief that we need a bigger budget stems from objective criteria concerning time constraints, feature effort, estimation based on scope, and expectations of quality (like we need accessibility/a11y, e.g. that we didn't factor in requirements gathering). We don't want what we're asking for to be based on criteria we cannot measure, and we want to recognize all stakeholders as potentially possessing insight to inform our request. We may want to ask to set aside some time to present findings and research that can be put together with little effort.

## 8. Have you ever identified a potential problem and proactively implemented a software solution?

Yes. At D&B/Hoover's I identified that our build process depended on the NPM registry (node package manager) for a mobile app project that I lead and co-developed. So I implemented https://github.com/mixu/npm_lazy with our build master to prevent our build from breaking in case the NPM registry was down. For LoveStamp I anticipated that James Duchenne and Adam Richard, ultimately, would want to deploy the product to web and iOS/Android, so I built it from one codebase using Cordova, but I was able to at the same time integrate the backend dashboard from within the same app. One codebase, multiple platforms was my solution, seeing fragmentation as too costly in the long-run.

## 9. What do you feel is important to make sure the work gets done efficiently? 

Use the right tools, and organize goal-setting around user stories, frequent check-ups and conversations (as frequent as necessary, but give developers ample time to get into flow), and confirmation (adequate testing, whether test-driven development (TDD), behavior-driven development (BDD), automated acceptance testing (AAT).)

Use git, ideally, and provide a code of conduct for working together and submitting pull requests.

## 10. Walk me through your portfolio. Which pieces are you most proud of, and why?

UTXO and LoveStamp, come to mind.

UTXO stands for unspent transaction output. It's a cryptocurrency term. My client, UTXO the company, sold freshly minted Bitcoin for a markup. I developed a Django CMS based web application with bespoke AngularJS code, using Twilio for SMS authentication, Firebase and Python for database and backend services. I enabled them to manage their own site content with a suite of Django features all running on DigitalOcean.

LoveStamp involved enabling users to win cryptocurrency just for getting their phone stamped with a 3D-printed plastic stamp that we provided to participating businesses. The codebase was significantly complex and involved fail-over validation of the geometric properties of the stamps. If our validation of the stamp (less than ~99.95 accuracy) failed, I hit the SnowShoeStamp API in order to validate it. I used what's called a Graham scan algorithm to validate the pentagon printed within the face of the stamp. There were many other interesting parts to the app, particularly around Leaflet maps, coloring the intensity circles that represented participation behavior, categorizing it, and interfacing with social media channels using Firebase Authentication.

## 11. Tell me about yourself and your last/current job/class ? 

I'm mostly a Spinozist philosopher who enjoys way too many genres of music. But my favorite is ultimately free jazz: Sun Ran, Anthony Braxton, but standards too like Buddy Rich, Ceceil Taylor, the Monk, etc.

The last class I took was in Machine Learning with Python. Before that, Kubernetes. Back in university, it was Philosophy of Social Science with Professor Josh Weisberg.

## 12. What type of software have you worked with?

PHP in the early days (mostly WordPress and Slim Framework), Python after that, and now Node.js. I've worked with Django, Django REST Framework, Django CMS. I've worked with Node.js Express. I write in vim and my environment is OS X locally, but I've taught myself Docker (and as mentioned before, just took a class on Kubernetes). I've worked with various libraries in the Python and Node.js ecosystems. I've worked with Stripe API, Google API, Firebase, and many others. I use https://github.com/jaime-olivares/yuml-diagram/wiki to generate visual diagrams. And I often try to visualize my database models with Graphviz. 

I also use JsDoc and static code analysis on my CSS and JS, anywhere I can. I prefer Organic CSS with atomic block-element-modifier (BEM) and Tachyons (for utility classes). I'm familiar with TypeScript but I understand that program correctness involves more than just types, interfaces, and classes. As far as "architectural styles" goes, I consider myself a ReSTafarian. I love the idea of ReST because it speaks to Tim Berners-Lee's vision of a semantic web.

I often use schema.org to inform how I model my objects and their actions. Ultimately, I am not one to confuse (create-read-update-delete) CRUD for ReST.

I'm also familiar with WebSockets.

## 13. How much will you request per hour if you are hired?

$45-$47/hr.

## 14 DUTIES will include : Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle. Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. Prepares and installs solutions by determining and designing system specifications, standards, and programming.


Can you handle all of these duties effectively?

Absolutely. With the right tools and the right team, I think I can be serviceable to your project and product goals for a mutually beneficial relationship. Observability and monitoring of systems, continuous integration, deployment and delivery will be imperative. I've worked with Jenkins and I use git to bring coherence to dynamic projects with many moving parts.





