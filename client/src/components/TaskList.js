import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TaskItem from './TaskItem';
import '../css/taskList.css';

export default class TaskList extends Component {
    constructor(props) {
        super();
        this.state = {
            tasks: props.tasks,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState( (state, props) => ({
                tasks: props.tasks
            }));
        }
    }

    render() {
        return (
            <div className="divStyle">
                <Grid container justify="space-evenly">
                    <Grid item xs={9}>
                        <Grid container alignItems="center" justify="space-evenly" spacing={4}>
                            {this.state.tasks.map( (task, index) => 
                                <TaskItem key={index} task={task} />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}