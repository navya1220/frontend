import React from 'react'
import Navbar from '../Navbar/Navbar'
import mobile from '../Asserts/mobile.png'
import computer from '../Asserts/computer.png'
import image_3 from '../Asserts/image_3.png'
import image_4 from '../Asserts/image_4.png'
import image_5 from '../Asserts/image_5.png'
import phone_image1 from '../Asserts/phone_image1.png'
import phone_image2 from '../Asserts/phone_image2.png'
import phone_image3 from '../Asserts/phone_image3.png'
import phone_image4 from '../Asserts/phone_image4.png'
import phone_case_img from '../Asserts/phone_case_img.png'
import './Home.css'
const Home = () => {
return (
    <div>
        <div className='home-container'>
            <div className='home-container-left'>
                <h1>Best Mobile App Showcase</h1>
                <p>Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.</p>
                <button>Read More</button>
            </div>
            <div className='home-container-right'>
                <Navbar/>
                <img src={mobile} alt="" />
            </div>
        </div>
        <div className='home-container-2'>
            <h1>Engaging & Spacious School Campus</h1>
            <p>Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.</p>
            <div className='uidesign-cards'>
                <div className='uidesign-card'>
                    <div className='computer-image'>
                        <img src={computer} alt="" />
                    </div>
                        <h1>Perfect UI Design</h1>
                        <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                        <button></button>
                </div> 
                <div className='uidesign-card'>
                    <div className='computer-image'>
                        <img src={computer} alt="" />
                    </div>
                        <h1>Perfect UI Design</h1>
                        <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                        <button></button>
                </div> 
                <div className='uidesign-card'>
                    <div className='computer-image'>
                        <img src={computer} alt="" />
                    </div>
                        <h1>Perfect UI Design</h1>
                        <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                        <button></button>
                </div> 
            </div>
        </div>
        <div className='home-container-3'>
            <div className='left-image'>
                <img src={image_3} alt="" />
            </div>
            <div className='right-content'>
                <h1>Easy And Perfect Solution For Your Business App</h1>
                <p>Aliquam aliquet purus a est consequat lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis.Consequat purus aliquet a est aliquam lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae....</p>
                <button>Read more</button>
            </div>
        </div>
        <div className='home-container-4'>
            <div className='left-content'>
                <h1>How does This App Work?</h1>
                <div className='card-item'>
                    <div className='card-image'>
                        <div>
                        <svg className='user-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3199 12.4893L14.9505 11.8864C14.7113 12.0311 14.58 12.3017 14.6151 12.5777C14.6501 12.8536 14.8449 13.0834 15.1127 13.1646L15.3199 12.4893ZM8.68006 12.4893L8.88726 13.1646C9.15504 13.0834 9.34985 12.8536 9.38495 12.5777C9.4199 12.3017 9.28861 12.0311 9.04947 11.8864L8.68006 12.4893ZM17.6835 7.05882C17.6835 9.10304 16.5907 10.8943 14.9505 11.8864L15.6893 13.0923C17.7354 11.8547 19.1044 9.61595 19.1044 7.05882H17.6835ZM12 1.41176C15.1389 1.41176 17.6835 3.94004 17.6835 7.05882H19.1044C19.1044 3.16035 15.9236 0 12 0V1.41176ZM6.31654 7.05882C6.31654 3.94004 8.8611 1.41176 12 1.41176V0C8.07639 0 4.89568 3.16035 4.89568 7.05882H6.31654ZM9.04947 11.8864C7.4093 10.8943 6.31654 9.10306 6.31654 7.05882H4.89568C4.89568 9.61595 6.26462 11.8547 8.31066 13.0923L9.04947 11.8864ZM8.47287 11.8141C3.98756 13.173 0.609792 17.0547 0.015701 21.7979L1.42568 21.9723C1.94941 17.7908 4.92957 14.3636 8.88726 13.1646L8.47287 11.8141ZM0.015701 21.7979C-0.141318 23.0516 0.903896 24 2.05396 24V22.5882C1.63459 22.5882 1.38888 22.2662 1.42568 21.9723L0.015701 21.7979ZM2.05396 24H21.9461V22.5882H2.05396V24ZM21.9461 24C23.0961 24 24.1413 23.0516 23.9843 21.7979L22.5742 21.9723C22.611 22.2662 22.3654 22.5882 21.9461 22.5882V24ZM23.9843 21.7979C23.3902 17.0547 20.0124 13.173 15.527 11.8141L15.1127 13.1646C19.0704 14.3636 22.0505 17.7908 22.5742 21.9723L23.9843 21.7979Z" fill="white"/></svg>
                        </div>
                    </div>
                    <div className='card-details'>
                        <h1>Make A Profile</h1>
                        <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                    </div>
                </div>
                <div className='card-item'>
                    <div className='card-image'>
                        <div>
                        <svg className='user-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3199 12.4893L14.9505 11.8864C14.7113 12.0311 14.58 12.3017 14.6151 12.5777C14.6501 12.8536 14.8449 13.0834 15.1127 13.1646L15.3199 12.4893ZM8.68006 12.4893L8.88726 13.1646C9.15504 13.0834 9.34985 12.8536 9.38495 12.5777C9.4199 12.3017 9.28861 12.0311 9.04947 11.8864L8.68006 12.4893ZM17.6835 7.05882C17.6835 9.10304 16.5907 10.8943 14.9505 11.8864L15.6893 13.0923C17.7354 11.8547 19.1044 9.61595 19.1044 7.05882H17.6835ZM12 1.41176C15.1389 1.41176 17.6835 3.94004 17.6835 7.05882H19.1044C19.1044 3.16035 15.9236 0 12 0V1.41176ZM6.31654 7.05882C6.31654 3.94004 8.8611 1.41176 12 1.41176V0C8.07639 0 4.89568 3.16035 4.89568 7.05882H6.31654ZM9.04947 11.8864C7.4093 10.8943 6.31654 9.10306 6.31654 7.05882H4.89568C4.89568 9.61595 6.26462 11.8547 8.31066 13.0923L9.04947 11.8864ZM8.47287 11.8141C3.98756 13.173 0.609792 17.0547 0.015701 21.7979L1.42568 21.9723C1.94941 17.7908 4.92957 14.3636 8.88726 13.1646L8.47287 11.8141ZM0.015701 21.7979C-0.141318 23.0516 0.903896 24 2.05396 24V22.5882C1.63459 22.5882 1.38888 22.2662 1.42568 21.9723L0.015701 21.7979ZM2.05396 24H21.9461V22.5882H2.05396V24ZM21.9461 24C23.0961 24 24.1413 23.0516 23.9843 21.7979L22.5742 21.9723C22.611 22.2662 22.3654 22.5882 21.9461 22.5882V24ZM23.9843 21.7979C23.3902 17.0547 20.0124 13.173 15.527 11.8141L15.1127 13.1646C19.0704 14.3636 22.0505 17.7908 22.5742 21.9723L23.9843 21.7979Z" fill="white"/></svg>
                        </div>
                    </div>
                    <div className='card-details'>
                        <h1>Make A Profile</h1>
                        <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                    </div>
                </div>
                <div className='card-item'>
                    <div className='card-image'>
                        <div>
                        <svg className='user-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3199 12.4893L14.9505 11.8864C14.7113 12.0311 14.58 12.3017 14.6151 12.5777C14.6501 12.8536 14.8449 13.0834 15.1127 13.1646L15.3199 12.4893ZM8.68006 12.4893L8.88726 13.1646C9.15504 13.0834 9.34985 12.8536 9.38495 12.5777C9.4199 12.3017 9.28861 12.0311 9.04947 11.8864L8.68006 12.4893ZM17.6835 7.05882C17.6835 9.10304 16.5907 10.8943 14.9505 11.8864L15.6893 13.0923C17.7354 11.8547 19.1044 9.61595 19.1044 7.05882H17.6835ZM12 1.41176C15.1389 1.41176 17.6835 3.94004 17.6835 7.05882H19.1044C19.1044 3.16035 15.9236 0 12 0V1.41176ZM6.31654 7.05882C6.31654 3.94004 8.8611 1.41176 12 1.41176V0C8.07639 0 4.89568 3.16035 4.89568 7.05882H6.31654ZM9.04947 11.8864C7.4093 10.8943 6.31654 9.10306 6.31654 7.05882H4.89568C4.89568 9.61595 6.26462 11.8547 8.31066 13.0923L9.04947 11.8864ZM8.47287 11.8141C3.98756 13.173 0.609792 17.0547 0.015701 21.7979L1.42568 21.9723C1.94941 17.7908 4.92957 14.3636 8.88726 13.1646L8.47287 11.8141ZM0.015701 21.7979C-0.141318 23.0516 0.903896 24 2.05396 24V22.5882C1.63459 22.5882 1.38888 22.2662 1.42568 21.9723L0.015701 21.7979ZM2.05396 24H21.9461V22.5882H2.05396V24ZM21.9461 24C23.0961 24 24.1413 23.0516 23.9843 21.7979L22.5742 21.9723C22.611 22.2662 22.3654 22.5882 21.9461 22.5882V24ZM23.9843 21.7979C23.3902 17.0547 20.0124 13.173 15.527 11.8141L15.1127 13.1646C19.0704 14.3636 22.0505 17.7908 22.5742 21.9723L23.9843 21.7979Z" fill="white"/></svg>
                        </div>
                    </div>
                    <div className='card-details'>
                        <h1>Make A Profile</h1>
                        <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                    </div>
                </div>
            </div>
            <div className='right-image'>
                <img src={image_4} alt="" />
            </div>
        </div>
        <div className='home-container-5'>
            <div className='left-container-image'>
                <img src={image_5} alt="" />
            </div>
            <div className='right-container-content'>
                <h1>Designed & Worked By The Latest Partners</h1>
                <h3>Aliquam varius ligula nec leo tempus porta.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                <h3>Suspendisse vitae varius diam, a vulputate urna.</h3>
                <h3>Aliquam aliquet purus eget lacus pretium.</h3>
            </div>
        </div>
        <div className='home-container-6'>
            <h1>App Screenshots</h1>
            <p>Saepe quo labore aenean dictumst expedita commodi auctor, nisl, lorem iusto feugiat nemo reiciendis laboris.</p>
            <div className='phone_screens'>
                <img src={phone_image1} alt="" />
                <img src={phone_image2} alt="" />
                <img src={phone_case_img} alt="" />
                <img src={phone_image3} alt="" />
                <img src={phone_image4} alt="" />
            </div>
        </div>

    </div>
)
}

export default Home
