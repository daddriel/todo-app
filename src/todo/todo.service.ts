import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private id = 2;
  private todos: Todo[] = [
    {
      id: 1,
      title: 'First todo',
      description: 'This is the first todo',
      done: false,
    },
    {
      id: 2,
      title: 'Second todo',
      description: 'This is the second todo',
      done: false,
    },
  ];

  create(createTodoDto: CreateTodoDto): Todo {
    ++this.id;
    const newTodo: Todo = {
      id: this.id,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string | number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    console.log(todo);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    } else {
      return todo;
    }
    //return this.todos.find((todo) => todo.id === id);
  }

  update(id: string | number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    const updateTodo = Object.assign(todo, updateTodoDto);
    //this.todos = this.todos.map((todo) =>  todo.id === id ? updateTodo: todo );
    return updateTodo;
  }

  remove(id: string | number) {
    const todo = this.findOne(id);
    return this.todos.splice(this.todos.indexOf(todo), 1);
    //return this.todos.filter((todo) => todo.id !== id);
  }
}
