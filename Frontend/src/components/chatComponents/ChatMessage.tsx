interface Props {
    message: string;
    from: string;
    isLocal: boolean;
}

export default function ChatMessage({ message, from, isLocal }: Props) {
    const className = isLocal ? "message-body local-message" : "message-body";
    return (
        <>
            <div className={className}>
                <p>From: {from}</p>
                <p>{message}</p>
            </div>
        </>
    );
}
