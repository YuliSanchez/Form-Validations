export class ManageStyleClass {

    TASK_STATUS_ENDED='status-ended'; 
    TASK_STATUS_TODO='status-todo';
    TASK_STATUS_INPROGRESS='status-inprogress';
    TASK_STATUS_OTHER='status-other';

    getClassStatus(status){
        let cleanStatus = status.toLowerCase().replace(' ', '');
        if (cleanStatus==='todo')
            return this.TASK_STATUS_TODO;

        if(cleanStatus==='ended')
            return this.TASK_STATUS_ENDED;

        if(cleanStatus==='inprogress')
            return this.TASK_STATUS_INPROGRESS;

        return this.TASK_STATUS_OTHER
    }

}