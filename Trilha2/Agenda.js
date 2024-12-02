
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso \"".concat(compromisso, "\" adicionado \u00E0 agenda."));
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("A agenda está vazia.");
        }
        else {
            console.log("Compromissos na agenda:");
            this.compromissos.forEach(function (compromisso, index) {
                console.log("".concat(index + 1, ". ").concat(compromisso));
            });
        }
    };
    return Agenda;
}());

var minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Aulas às 19h30");
minhaAgenda.adicionarCompromisso("Correr às 18h");

minhaAgenda.listarCompromissos();
