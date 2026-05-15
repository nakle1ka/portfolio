export const chessEngineReadme = `
## Features
- ⚡ **Bitboards** — efficient position representation using 64-bit integers.
- 🧠 **Minimax with Alpha-Beta Pruning** — optimal search tree traversal.
- 🎯 **Evaluation Function** — accounts for piece placement on the board.
- 🖥️ **Console Interface** — classic move input and output.

## Architecture
\`\`\`txt
app/
└── main.cpp
internal/
├── AI/            # Best move calculation and position evaluation
├── attacks/       # Bitboard-based attack generation
├── board/         # Board state and piece bitboards
├── chess_visual/  # Console position visualization
├── rays/          # Sliding rays for bishops, rooks, and queens
└── shared/        # Shared types and constants
Makefile
\`\`\`

## Build and Run
\`\`\`bash
make run_app

# Or compile manually
g++ 
app/main.cpp \\
internal/rays/rays.cpp \\
internal/board/board.cpp \\
internal/attacks/attacks.cpp \\
internal/chess_visual/chess_visual.cpp \\
internal/AI/AI.cpp \\
-I internal/AI \\
-I internal/board \\
-I internal/rays \\
-I internal/attacks \\
-I internal/chess_visual \\
-o app.exe \\
-Wall -Wextra

./app.exe
\`\`\`
`;

export const tramplinReadme = `
## 🚀 Tramplin — Career Ecosystem for Students and IT Companies

**Competition:** International Olympiad "IT-Planet 2026"  
**Track:** Applied Programming if...else  
**Stage:** Second (Final)

The project has been implemented in accordance with the technical specification and includes original solutions justified in the presentation.

---

## 📌 About the Project

**"Tramplin"** is an interactive career platform that brings together students and graduates (job seekers), employers (companies and individual entrepreneurs), as well as university career centers and moderators (curators). The platform allows not only searching for jobs and internships but also building a career from scratch: finding mentors, participating in events, and receiving recommendations through professional networking.

---

## 🎯 Implemented Functionality

### 🌍 Home Page
- A map with markers for vacancies, internships, mentoring programs, and events.
- List view (feed) with filtering.
- Filters: skills (tags), salary range, work format.
- Authorization and registration.
- Favorites (saved in the browser for unauthenticated users).
- Special marker color for companies and vacancies added to favorites.

### 👤 Roles and Personal Accounts

#### 🔹 Job Seeker
- Personal details: full name, university, current year or graduation year.
- Resume and portfolio: skills, projects, links to repositories.
- Application history with current statuses.
- Favorite vacancies and events.
- List of professional contacts (friends) with the ability to see each other's career interests.
- Privacy settings: ability to hide or open resume and applications.
- Ability to recommend contacts for vacancies.

#### 🔹 Employer
- Company card: name, description, field of activity, website, social media, office photo or video presentation.
- Form for creating new opportunities: vacancies, internships, events.
- List of active, closed, and planned opportunities with editing capabilities.
- Viewing job seeker applications with statuses: "accepted," "rejected," "in reserve."
- Search and filtering within own vacancies and applications.

#### 🔹 Curator (Moderator)
- Preset administrator with full rights.
- Administrator can create other curators.
- Moderation of opportunity cards and user personal accounts.
- Company verification.

### 🃏 Opportunity Card

Each card contains:
- Position or event title.
- Brief description, candidate requirements, media content.
- Employer or organizing company.
- Type: internship, vacancy (intern / Junior+), mentoring program, career event.
- Work format: office, hybrid, remote.
- Location: office address or city for remote work.
- Publication date and vacancy expiration date / event date.
- Employer contacts and information resources.
- Tags: required technologies (Python, Java, SQL, etc.), level (Junior, Middle), employment type (full-time, part-time, project-based).

**Additional feature:** Hovering over a map marker displays a modular card with the title, company, salary, key skills, and a "Details" button.

---

## 🧠 Original Solutions

Since the technical specification left several areas for independent development, the development team proposed the following mechanisms:
- **Content Moderation** — a two-level system: pre-moderation of new opportunity cards and post-moderation based on user complaints. Automatic text spam and toxicity detection.

- **Tag System** — employers and curators can add new tags.

- **Privacy and Networking** — two levels of privacy for a job seeker's profile: closed and accessible to all authorized users.

- **Modular Card on the Map** — a tooltip appears when hovering over a marker, showing the most important information: title, company, salary (or grant), and three key tags.
`;

export const financeReadme = `
## Finance — Personal Income and Expense Diary

This is one of my first fully-featured web projects. The app helps you manage personal finances: record income and expenses, manage transaction cards, and track statistics in your profile.

## Key Features

### 👤 Users
- Create a new account
- Login and logout
- Change password
- Upload and change avatar
- Delete account

### 💳 Income/Expense Cards
- Add a new card (amount, category, title)
- Delete a card
- All cards are linked to the user

### 📊 Profile Statistics
- Total income and total expenses
- Percentage breakdown by category
- Income-to-expense ratio

### 🎨 Interface
- Toggle between light and dark themes
- Responsive design

## Technologies

The project uses:

- **Frontend**: HTML, CSS, JavaScript + React
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT
`;

export const ArbitraryPrecisionArithmeticReadme = `
**Application Lifecycle:** \`Input (CLI) -> Controller -> Validator -> UseCase (Solver) -> Presenter -> Output (CLI)\`

## Features

- 🔢 **Arbitrary-Precision Arithmetic** — handling numbers with arbitrary precision.
- ✅ **Input Validation** — verifying the correctness of input data.
- 🧪 **Unit Tests** — test coverage for core functionality.

## Build and Run

### Requirements

- A compiler with C++11 support or higher (g++, clang++)

### Build and Run Commands

\`\`\`bash
make run_app                # Run the application
make run_solver_tests       # Test core solver logic
make run_long_decimal_tests # Test arbitrary-precision arithmetic
make run_validator_tests    # Test input validation
\`\`\`
`;