export interface IUser {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface IMessage {
    id: string;
    text: string;
    sender: string;
    receiver: string;
    timestamp: number;
}
