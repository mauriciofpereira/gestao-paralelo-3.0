export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface House {
    id: string;
    address: string;
    ownerId: string;
}

export interface Car {
    id: string;
    model: string;
    ownerId: string;
}

export interface Worksite {
    id: string;
    location: string;
    projectId: string;
}

export interface WorkLog {
    id: string;
    userId: string;
    worksiteId: string;
    hoursWorked: number;
    date: string;
}

export interface Expense {
    id: string;
    amount: number;
    description: string;
    date: string;
}

export interface Revenue {
    id: string;
    amount: number;
    source: string;
    date: string;
}