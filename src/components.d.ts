/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CardDataI } from "./interfaces/card.interface";
export { CardDataI } from "./interfaces/card.interface";
export namespace Components {
    interface AppRoot {
    }
    interface ToDoCardList {
    }
    interface ToDoCards {
        "cardData": CardDataI;
    }
}
export interface ToDoCardsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLToDoCardsElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLToDoCardListElement extends Components.ToDoCardList, HTMLStencilElement {
    }
    var HTMLToDoCardListElement: {
        prototype: HTMLToDoCardListElement;
        new (): HTMLToDoCardListElement;
    };
    interface HTMLToDoCardsElement extends Components.ToDoCards, HTMLStencilElement {
    }
    var HTMLToDoCardsElement: {
        prototype: HTMLToDoCardsElement;
        new (): HTMLToDoCardsElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "to-do-card-list": HTMLToDoCardListElement;
        "to-do-cards": HTMLToDoCardsElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ToDoCardList {
    }
    interface ToDoCards {
        "cardData"?: CardDataI;
        "onRemoveTodoTask"?: (event: ToDoCardsCustomEvent<CardDataI>) => void;
        "onUpdateTodoTask"?: (event: ToDoCardsCustomEvent<CardDataI>) => void;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "to-do-card-list": ToDoCardList;
        "to-do-cards": ToDoCards;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "to-do-card-list": LocalJSX.ToDoCardList & JSXBase.HTMLAttributes<HTMLToDoCardListElement>;
            "to-do-cards": LocalJSX.ToDoCards & JSXBase.HTMLAttributes<HTMLToDoCardsElement>;
        }
    }
}