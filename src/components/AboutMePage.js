import React from 'react'

const AboutMePage = () => (
    <div className="content-container content-container--top-padding">
        <div className="horizontal horizontal--white-background">
            <img className="profile-image" src="/images/Foto.png" alt="Foto de perfil"></img>
            <div className="vertical vertical--white-background">
                <h3 className="text__title">Lisandro Pastinante</h3>
                <p className="text">Soy un desarrollador web fullstack en busca de oportunidades para crecer en mi carrera profesional. Escribo y hablo fluído inglés, italiano y español, actualmente estudio japonés.</p>
                <p className="text">Nací el 19/11/1991 en Arroyo Seco, provincia de Santa Fe. A 12 años me mudé a Rosario en donde donde actualmente vivo.
                Luego de graduarme en la secundaria Dante Alighieri, estudié ingniería electrónica por 3 años. Actualmente me desempeño como vendedor en la empresa PackGroup S.A.</p>
            </div>
        </div>
        <div className="vertical vertical--white-background">
            <h3 className="text_title">Educación</h3>
            <p className="text">Bachiller en Economía y Administración / Instituto Superior Dante Alighieri </p>
            <p className="text">Ingeniería Electrónica (3 años) / Universidad Nacional de Rosario</p>
            <a target="_blank" href="https://ed.team/cursos/css-avanzado"><p className="text">EDteam: Flex-box y Grid avanzado</p></a> 
            <a className="text" target="_blank" href="https://www.udemy.com/modern-javascript/">Udemy: The modern Javascript Bootcamp</a>
            <a className="text" target="_blank" href="https://www.udemy.com/the-complete-nodejs-developer-course-2/">Udemy: The complete Node.js Developer course</a>
            <a className="text" target="_blank" href="https://www.udemy.com/react-2nd-edition/">Udemy: The Complete React Web Developer Course</a>
            <a className="text" target="_blank" href="https://university.mongodb.com/">Mongo University: Administración de Bases de datos</a>
        </div>
    </div>
)

export default AboutMePage