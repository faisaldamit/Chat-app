export interface IUser {
    id: string;
    username: string;
    avatarUrl: string;

}

export interface IMessage {
    id: string;
    text: string;
    sender: string;
    receiver: string;
    timestamp: string;
}
