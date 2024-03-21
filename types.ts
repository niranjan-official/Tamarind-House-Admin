export type StudentData = {
    year?: number | string;
    program?: "btech" | "mba" | string;
    gender?: "male" | "female" | string;
    email: string;
    id: string;
    date?: Date;
}
export interface STATUS {
    success: boolean;
    error: string | null;
}
export interface ADMIN {
    admin: boolean;
    error: string | null;
}
export interface TOKEN_CARD {
    tokenId : string | number,
    studentId: string,
    isCollected: boolean,
    date: string,
    generationTime: string,
    dispenseTime?: string
}