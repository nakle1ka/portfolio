type CardImage = {
    id: number;
    url: string;
}

export type TPortfolioCard = {
    images: CardImage[],
    href: string,
    title: string,
    description: string,
    readme: string
}