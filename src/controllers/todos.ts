import { RequestHandler } from "express";
import Todo, { TodoModel } from "../modals/todo"

// export const createTodo = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => { };

// const TODOS: Todo[] = [];
/*
export const createTodo: RequestHandler = async (req, res, next) => {

    try {
        const data: TodoModel = req.body;
        console.log('Data', data);
        let todos = await Todo.create(data);
        return res
            .status(200)
            .json({ message: 'Todo created sucessfully', data: todos });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}*/

export const createTodo: RequestHandler = async (req, res, next) => {

    try {
        const data: TodoModel = req.body;
        let todos = await Todo.create(data);
        res
            .status(200)
            .json({ message: 'Todo created sucessfully', data: todos });
    } catch (error: any) {

    }
};

export const getTodos: RequestHandler = async (req, res, next) => {
    try {
        let todos = await Todo.find({});
        res.status(200).json({ message: 'All todos', data: todos });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
/*
    const data: TodoModel = req.body;
    const text = (req.body as { text: string }).text;

    const newTodo = new Todo((Math.round(Math.random() * 1000)).toString(), text);
    let todos = Todo.create(data);

    res.status(201).json({ message: "Created to todo", createTodo: newTodo })
};*/



/*
export const createTodo: RequestHandler = (req, res, next) => {

    const text = (req.body as { text: string }).text;

    const newTodo = new Todo((Math.round(Math.random() * 1000)).toString(), text);
    TODOS.push(newTodo);

    res.status(201).json({ message: "Created to todo", createTodo: newTodo })
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: TODOS });
}

export const updateTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText = (req.body as { text: string }).text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error("Could not find index");
    }
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: "Updated todo!", updateTodo: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText = (req.body as { text: string }).text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error("Could not find index");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "Deleted todo!", deleted_ID: todoId });
}*/
