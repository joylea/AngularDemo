import {  PipeTransform, Pipe } from '@angular/core';
import { UserDetail } from './user-detail';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

    transform(value: UserDetail[], filterBy: string): UserDetail[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((user: UserDetail) =>
          user.employeeId.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
