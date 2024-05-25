import { OmitType } from '@nestjs/mapped-types';
import { Todo } from '../entities/todo.entity';
import { IsBoolean, IsNotEmpty, Length, Max, MaxLength } from 'class-validator';
export class CreateTodoDto extends OmitType(Todo, ['id']) {
  @IsNotEmpty()
  @MaxLength(20)
  title: string;

  @Length(30, 100)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
