import { TPortfolioCard } from "@/types/portfolioCard";
import {
    chessEngineReadme,
    tramplinReadme,
    financeReadme,
    ArbitraryPrecisionArithmeticReadme
} from "./readme";

export const portfolioList: TPortfolioCard[] = [
    {
        images: [
            {
                id: 213132,
                url: "/images/portfolio/chess_engine/minimax.jpg"
            },
        ],
        href: "https://github.com/nakle1ka/chess-engine",
        title: "Chess Engine",
        description: "A chess engine using 64-bit bitboards for ultra-fast move generation and the minimax algorithm for optimal move searching.",
        readme: chessEngineReadme
    },
    {
        images: [
            {
                id: 1,
                url: "/images/portfolio/tramplin/main.png"
            },
            {
                id: 2,
                url: "/images/portfolio/tramplin/schema.png"
            },
        ],
        href: "https://github.com/nakle1ka/Tramplin",
        title: "Tramplin",
        description: "The \"Tramplin\" platform is a centralized platform for interaction between students, alumni, employers, and university career centers in IT and related fields.",
        readme: tramplinReadme
    },
    {
        images: [
            {
                id: 3,
                url: "/images/portfolio/finance/main.png"
            },
            {
                id: 4,
                url: "/images/portfolio/finance/profile.png"
            },
            {
                id: 5,
                url: "/images/portfolio/finance/login.png"
            },
            {
                id: 6,
                url: "/images/portfolio/finance/mobile.png"
            },
        ],
        href: "https://github.com/nakle1ka/finance",
        title: "Finance",
        description: "Finance is a personal income & expense diary — one of my first web projects. It supports user authentication, transaction cards, profile stats, and a dark/light theme toggle.",
        readme: financeReadme
    },
    {
        images: [
            {
                id: 2355,
                url: "/images/portfolio/arithmetic/cli.png"
            },
        ],
        href: "https://github.com/nakle1ka/quadratic-equation",
        title: "Arbitrary-Precision Arithmetic",
        description: "This project implements a quadratic equation solver using arbitrary-precision arithmetic and input validation. It supports calculations with large numbers that exceed the limits of standard data types.",
        readme: ArbitraryPrecisionArithmeticReadme
    },
]
