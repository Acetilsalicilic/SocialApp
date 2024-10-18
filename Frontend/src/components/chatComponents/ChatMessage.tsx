interface Props {
    message: string;
    from: string;
    isLocal: boolean;
}

export default function ChatMessage({ message, from }: Props) {
    return (
        <>
            <div className="message-body">
                <p>From: {from}</p>
                <p>{message}</p>
            </div>
        </>
    );
}
