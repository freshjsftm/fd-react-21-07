import React from 'react';
import {useTodo} from '../../hooks';
import { Formik, Form, Field } from 'formik';

const Todo = () => {
  const {tasks, addTask, deleteTask} = useTodo([
    {
    id:Date.now(),
    body:'test task',
    isDone: false
  }]);
  return (
    <div>
      <Formik initialValues={{body:''}} onSubmit={addTask}>
        <Form>
          <Field name="body"/>
          <input type="submit" value="+" />
        </Form>
      </Formik>
      <section>
        {
          tasks.map((task)=>(
            <p key={task.id}>{task.body}<span onClick={()=>{deleteTask(task.id)}}>X</span>
            </p>
          ))
        }
      </section>
    </div>
  );
}

export default Todo;

