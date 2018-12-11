import { Controller, Get, Post, Param} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll() {
        return 'this action returns all tasks';
    }

    @Get(':id')
    findOne(@Param() params) {
        console.log(params);

        return `this action return a #${params.id} task`;
    }

    @Post()
    create() {
        return 'this action adds a new task';
    }
}