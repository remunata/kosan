export interface Criteria {
    id: string,
    name: string,
    status: string,
    weight: number,
};

export const getCriterias = (): Criteria[] => [
    {
        id: 'C1',
        name: 'Jarak Kos',
        status: 'Benefit',
        weight: 40,
    },
    {
        id: 'C2',
        name: 'Biaya Sewa',
        status: 'Cost',
        weight: 40,
    },
    {
        id: 'C3',
        name: 'Fasilitas',
        status: 'Benefit',
        weight: 10,
    },
    {
        id: 'C4',
        name: 'Kebersihan',
        status: 'Benefit',
        weight: 10,
    },
    {
        id: 'C5',
        name: 'Keamanan',
        status: 'Benefit',
        weight: 10,
    },
    {
        id: 'C6',
        name: 'Luas Kamar',
        status: 'Benefit',
        weight: 20,
    },
    {
        id: 'C7',
        name: 'Keramaian',
        status: 'Benefit',
        weight: 30,
    },
];