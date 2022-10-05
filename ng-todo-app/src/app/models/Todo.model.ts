export class Todo {
    id: number;
    title: string;
    // description: string; // field is missing in response from server
    completed: boolean;

    constructor(id: number, title: string, completed: boolean) {
        this.id = id;
        this.title = title;
        // this.description = description;
        this.completed = completed;
    }
}