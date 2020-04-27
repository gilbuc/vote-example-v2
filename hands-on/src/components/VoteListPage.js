import React from "react"
import { fetchJson, sendJson } from  "../backend"
import VoteController from "./VoteController";

function VoteLoadingIndicator(){
    return(
        <div className="Row VotingRow Spacer">
            <h1 className="Title">Votes are loading...</h1>
        </div>
    );
}

export default function VoteListPage(){
    const [allVotes, setAllVotes] = React.useState(null);

    async function loadVotes(){
        const votes = await fetchJson("/api/votes");
        setAllVotes(votes);
    };

    React.useEffect(() => {
        loadVotes();
    }, 
    []//nur einmal ausführen
    );

    async function registerVote(vote, choice){
        await sendJson(
            "PUT",
            `/api/votes/${vote.id}/choices/${choice.id}/vote`
        );
        loadVotes();
    }

    async function addVote(vote){
        const newVote = await sendJson(
            "POST",
            "/api/votes",
            vote
        );
        setAllVotes( currentVotes => [...currentVotes, newVote]);
    }
    if (!allVotes){
        return <VoteLoadingIndicator />;
    }

    return (
        <VoteController
            votes = {allVotes}
            onRegisterVote = {registerVote}
            onSaveVote = {addVote}
            />
    )
}