abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): Record<string, number> | { candidate: string, votes: number }[];
  }
  
  class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate] += 1;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): Record<string, number> {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate] += 1;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): { candidate: string, votes: number }[] {
      const sortedCandidates = Object.keys(this.votes)
        .map(candidate => ({ candidate, votes: this.votes[candidate] }))
        .sort((a, b) => b.votes - a.votes); 
      return sortedCandidates;
    }
  }
  
  
  const election = new Election();
  election.voteFor("Candidato A");
  election.voteFor("Candidato B");
  election.voteFor("Candidato A");
  election.voteFor("Candidato C");
  election.voteFor("Candidato B");
  console.log("Resultado da eleição:", election.getResults()); 
  
  const poll = new Poll();
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Y");
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Z");
  poll.voteFor("Candidato Y");
  poll.voteFor("Candidato Y");
  console.log("Resultado da pesquisa:", poll.getResults());
