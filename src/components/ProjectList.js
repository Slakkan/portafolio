import React from 'react'
import { connect } from 'react-redux'

import ProjectListItem from './ProjectListItem'

export const ProjectList = ({ projects }) => (
    <div className="content-container">
        <h2 className="list-header">Proyectos</h2>
        <div>
            {projects.map((project) => <ProjectListItem key={project.number} {...project} />)}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps)(ProjectList)