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
var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tasks = [];
        return _this;
    }
    Project.prototype.addTask = function (task) {
        if (this.tasks.indexOf(task) === -1) {
            this.tasks.push(task);
        }
    };
    Project.prototype.listTasks = function () {
        return this.tasks;
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tasks = [];
        return _this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (this.tasks.indexOf(task) === -1) {
            this.tasks.push(task);
        }
    };
    DailyTasks.prototype.listTasks = function () {
        return this.tasks;
    };
    return DailyTasks;
}(TaskManager));
var project = new Project();
project.addTask("Desenhar o site");
project.addTask("Desenvolver a homepage");
project.addTask("Desenhar o site");
console.log(project.listTasks());
var dailyTasks = new DailyTasks();
dailyTasks.addTask("Exercício matinal");
dailyTasks.addTask("Verificar e-mails");
dailyTasks.addTask("Exercício matinal");
console.log(dailyTasks.listTasks());
