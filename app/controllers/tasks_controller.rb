class TasksController < ApplicationController
  class TasksController < ApplicationController
    before_action :set_task, only: [ :update, :destroy ]

    def index
      @tasks = Task.all
    end

    def create
      @task = Task.create(task_params)
    end

    def update
      @task.update!(task_params)
    end

    def destroy
      @task.destroy!
    end

    private

    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:description, :completed)
    end
  end
end
