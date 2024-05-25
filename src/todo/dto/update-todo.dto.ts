import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsNotEmpty, Length, MaxLength } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsNotEmpty()
  @MaxLength(20)
  title: string;

  @Length(30, 100)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
