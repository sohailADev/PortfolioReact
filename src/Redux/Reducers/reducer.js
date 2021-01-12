import projectsList from "./projects.json";
export const defaultState = {
projects:projectsList
  };

import {
  ADD_PROJECT,
  DELETE_PROJECT,
} from "./actions.js";

const intialState = {
  projects: projectsList
};

const projectsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //action is looks like {type:ADD_TODO, payload:newTodo}
      const newprojects = state.projects.slice();
      newprojects.push(action.payload);
      return { projects: newprojects };
    case TOGGLE_TODO: {
      const newprojects = state.projects.map(project => {
        //find project to modify
        if (project.id === action.payload) {
          return { ...project, completed: !project.completed };
        }
        return project;
      });
      return { projects: newprojects };
    }

    case DELETE_TODO: {
      const todoAfterDel = state.projects.filter(
        project => project.id !== action.payload
      );
      return { projects: todoAfterDel };
    }
    case CLEAR_COMPLETED_projects:
      const todoAfterDelAllCompleted = state.projects.filter(
        project => project.completed === false
      );
      return { projects: todoAfterDelAllCompleted };
    default:
      return state;
  }
};

export default projectsReducer;
