import PersonCard from "./feedComponents/PersonCard";

export default function Feed() {
    return (
        <>
            <div className="feed-container">
                <div className="cards-container">
                    <PersonCard name="John"></PersonCard>
                    <PersonCard name="Alexandrette"></PersonCard>
                    <PersonCard name="Annete"></PersonCard>
                    <PersonCard name="Annete"></PersonCard>
                </div>
            </div>
        </>
    );
}
