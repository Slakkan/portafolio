import database from '../firebase/firebase'

export const setProjects = (projects) => ({
    type: "SET_PROJECTS",
    projects
})

export const getProjects = () => {
    return (dispatch) => {
        return database.ref('projects').orderByChild('number').once('value').then((snapshot) => {
            const projects = []

            snapshot.forEach((child) => {
                projects.push({
                    title: child.key,
                    ...child.val()
                })
            })

            dispatch(setProjects(projects))
        })
    }
}