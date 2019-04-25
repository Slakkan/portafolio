import React from 'react'

const ProjectListItem = ({ title, description, link }) => (
    <a className="list-item" href={link} target="_blank">
        <div>
            <h3 className="list-item__title">{title}</h3>
            <p>{description}</p>
        </div>
    </a>
)

export default ProjectListItem