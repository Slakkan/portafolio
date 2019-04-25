import React from 'react'

const AboutMePage = () => (
    <div className="content-container content-container--top-padding">
        <div className="horizontal">
            <img className="profile-image" src="/images/Foto.png" alt="Foto de perfil"></img>
            <div className="vertical">
                <h3 className="text__title">Lisandro Pastinante</h3>
                <p className="text">Soy un desarrollador web fullstack en busca de oportunidades para crecer en mi carrera profesional. Hablo fluído inglés italiano y español y estoy aprendiendo japonés.</p>
                <p className="text">Nací el 19/11/1991 en Arroyo Seco, provincia de Santa Fe. Cuando tenía 12 años nos mudamos a Rosario en donde me anoté en la secundaria Dante Alighieri.
                Luego de graduarme en la secundaria estudié ingniería electrónica por 3 años. En este período trabajé en un cyber y luego como vendedor.
                Ver que mi progreso era lento me desmotivó y abandoné la carrera.</p>
            </div>
        </div>
        <div className="horizontal">
            <p className="text">Hace no mucho tiempo un amigo me contó sobre un curso online de programación, el cual tomé principalmente como un hobbie para concretar algunos de mis proyectos caseros.
        Y así comenzó...curso tras curso mi motivación crecía y ahí es cuando supe: “¡Esto es lo que quiero hacer por el resto de mi vida!”</p>
        </div>

        <div className="vertical">
            <h3 className="text_title">Educación</h3>
            <p className="text">Bachiller en Economía y Administración / Dante Alighieri </p>
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