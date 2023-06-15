import { Component, ComponentInterface, Prop, h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
import { CardDataI } from '../../interfaces/card.interface';

@Component({
    tag: 'to-do-cards',
    styleUrl: 'to-do-cards.css',
    shadow: false,
})
export class ToDoCards implements ComponentInterface {

    constructor() {

    }

    @Event() removeTodoTask: EventEmitter<CardDataI>;
    @Event() updateTodoTask: EventEmitter<CardDataI>;

    @Prop() cardData: CardDataI;

    @State() isEditable = false;

    @State() cardEditValue = "";


    toggleEdition = () => {
        this.isEditable = !this.isEditable;
    };

    handleKeyDown = e => {
        if (e.code === "Enter") {
            this.isEditable = false;
            let updatedTask = { ...this.cardData };
            updatedTask.title = this.cardEditValue;
            this.updateTodoTask.emit(updatedTask);
        }
    };

    removeThisTodo = () => {
        this.removeTodoTask.emit(this.cardData);
    }

    render() {
        const todoTemplate = <div class="card-title">
            <div class="card-title-txt">
                {this.cardData.title}
            </div>
            <div>
                <button type="button" class="btn btn-danger btn-sm" onClick={this.removeThisTodo}>
                    X
                </button>
            </div>
        </div>;



        return (
            <div class="column" onDblClick={this.toggleEdition}>
                <div class="card">
                    {todoTemplate}
                    {this.cardData.description}
                </div>
            </div>
        );
    }

}