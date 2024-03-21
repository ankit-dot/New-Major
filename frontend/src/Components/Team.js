import React from 'react'
import "../App.css"



const teamMembers = [
    {
        imgUrl: './teamPhoto/Deva-image.jpg',
        name: 'Devashish Upadhayay',
        position: 'Dev Ops'
    },

    {
        imgUrl: './teamPhoto/my-image.jpg',
        name: 'Ankit Solanki',
        position: 'Website Developer'
    },

    {
        imgUrl: './teamPhoto/Gaurav-image.jpg',
        name: 'Gaurav Shukla',
        position: 'Frontend Developer'
    },

    {
        imgUrl: "./teamPhoto/Vedant-image.jpg",
        name: 'Vedant Agrawal',
        position: 'Notes Collector'
    },
    {
        imgUrl: "./teamPhoto/Vikas-image.jpg",
        name: 'Vikas Verma',
        position: 'Database manager'
    },
    {
        imgUrl: "./teamPhoto/Parag-image1.jpg",
        name: 'Parag Agrawal',
        position: 'Notes Collector'
    },
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content work-section-top'>
                <p className="primary-subheading">Team</p>
        <h1 className="primary-heading">Meet Our Team</h1>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' style = {{objectFit:"contain"}} />
                                </div>
                                <div className='team__details'>
                                    <h4 className = "team_mate_name">{item.name}</h4>
                                    <p className='description team_mate_description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team