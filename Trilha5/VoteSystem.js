var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.votes = {};
        return _this;
    }
    Election.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
    };
    Election.prototype.getResults = function () {
        return this.votes;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.votes = {};
        return _this;
    }
    Poll.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
    };
    Poll.prototype.getResults = function () {
        var _this = this;
        var sortedCandidates = Object.keys(this.votes)
            .map(function (candidate) { return ({ candidate: candidate, votes: _this.votes[candidate] }); })
            .sort(function (a, b) { return b.votes - a.votes; });
        return sortedCandidates;
    };
    return Poll;
}(VoteSystem));
var election = new Election();
election.voteFor("Candidato A");
election.voteFor("Candidato B");
election.voteFor("Candidato A");
election.voteFor("Candidato C");
election.voteFor("Candidato B");
console.log("Resultado da eleição:", election.getResults());
var poll = new Poll();
poll.voteFor("Candidato X");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato X");
poll.voteFor("Candidato Z");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato Y");
console.log("Resultado da pesquisa:", poll.getResults());
