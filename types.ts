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