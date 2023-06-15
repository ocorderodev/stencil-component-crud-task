import { Component, ComponentInterface, h, State, Listen } from '@stencil/core';
import { CardDataI } from '../../interfaces/card.interface';

interface TaskI {
    title: string;
    description: string;
}

@Component({
    tag: 'to-do-card-list',
    styleUrl: 'to-do-card-list.css',
    shadow: false,
})
export class ToDoCardList implements ComponentInterface {

    constructor() { }

    cardId = 1;
    @State() tasks: Array<CardDataI> = [];
    @State() task: TaskI = { title: '', description: '' }
    @State() messageError: string = "";

    componentDidUpdate(): void {
        console.log(this.task);
    }

    @Listen('updateTodoTask', { capture: true })
    updateValue(event: CustomEvent<CardDataI>) {
        let updatedTask: CardDataI = event.detail;
        let todoToUpdate: Array<CardDataI> = this.tasks.map((task) => {
            if (task.cardId === updatedTask.cardId) {
                return task = updatedTask;
            };
            return task;
        });
        this.tasks = [...todoToUpdate];
    }

    @Listen('removeTodoTask', { capture: true })
    onRemoveToDoHandler(event: CustomEvent<CardDataI>) {
        this.tasks = [...this.tasks.filter((cards: CardDataI) => {
            return cards.cardId != event.detail.cardId;
        })]
    }

    onInputChangeHandler = (event: any) => {
        this.task = {
            ...this.task,
            [event.target.name]: event.target.value
        }
    }

    generateCardId = (): string => {
        return Math.random().toString(36).substring(7) + this.cardId.toString();
    }

    onButtonClickHandler = () => {
        if (this.task.title !== "" && this.task.description !== "") {
            const cardData: CardDataI = {
                cardId: this.generateCardId(),
                title: this.task.title,
                description: this.task.description
            };

            this.tasks = [...this.tasks, cardData];
            this.cardId++;
            this.task = {
                title: '',
                description: ''
            }
            console.log('ENTRANDO AQUII');
            this.messageError = "";
            return;
        }

        this.messageError = "Por favor, complete todos los campos";

    }

    render() {
        return (
            <div class="container pt-4">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card card-body">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Task"
                                    value={this.task.title}
                                    name="title"
                                    onInput={(e) => this.onInputChangeHandler(e)}
                                />
                            </div>

                            <div class="form-group">
                                <textarea
                                    name="description"
                                    rows={3}
                                    placeholder='Description'
                                    class={'form-control'}
                                    value={this.task.description}
                                    onInput={(e) => this.onInputChangeHandler(e)}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                class="btn btn-success"
                                onClick={this.onButtonClickHandler}
                            >Add Task</button>
                        </div>

                        {this.messageError && <div class="pt-3">
                            <div class="alert alert-danger" role="alert">
                                {this.messageError}
                            </div>
                        </div>}
                    </div>
                    <div class="col-lg-8">
                        {this.tasks.length > 0 ? this.tasks.map(cardData => {
                            return <to-do-cards cardData={cardData}></to-do-cards>;
                        }) : "No Card Avaliable !!"}
                    </div>
                </div>
            </div>
        );
    }


}