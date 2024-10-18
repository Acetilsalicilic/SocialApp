interface Props {
    name: string;
}

export default function PersonCard({ name }: Props) {
    if (!name) name = "undefined";
    return (
        <>
            <div className="person-card">
                <div className="person-card-info">
                    <p className="person-card-title">{name}</p>
                </div>
            </div>
        </>
    );
}
