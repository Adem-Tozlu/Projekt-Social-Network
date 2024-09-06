import { main } from '@popperjs/core'
import React from 'react'

function Header() {
    return (
        <>
            <main>
                <div id='home'>
                    <div className="img-overlay">
                        <div className="container home-inner">
                            <div className="row">
                                <div className="col-lg-8 d-none d-lg-block">
                                    <h1 className="display-4">
                                        <strong>Discover</strong> The Colorful World
                                    </h1>
                                    <div className="d-flex">
                                        <div className="p-3 align-self-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                        </div>
                                        <div className="p-3 align-self-end">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-3 align-self-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                        </div>
                                        <div className="p-3 align-self-end">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-3 align-self-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                        </div>
                                        <div className="p-3 align-self-end">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card bg-primary text-center">
                                        <div className="card-body">
                                            <h3>
                                                Join Us
                                            </h3>
                                            <p>Please fill out the form</p>
                                            <form>
                                                <div className="mb-3">
                                                    <input type="text" className='form-control form-control-lg' placeholder='Username' />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="email" className='form-control form-control-lg' placeholder='Email' />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" className='form-control form-control-lg' placeholder='Password' />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" className='form-control form-control-lg' placeholder='Repassword' />
                                                </div>
                                                <button type='submit' className='btn btn-outline-light btn-block w-100'>Submit</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <section id='discover'>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center py-5">
                                <h1 className="display-4">Discover</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sunt modi? Consequuntur, error perspiciatis. Vitae consectetur quo quasi, error repellat quas corporis earum cupiditate iste dolor odio illo facilis animi.</p>
                                <a href="#" className='btn btn-outline-light btn-lg'>Find out more</a>
                            </div>
                        </div>
                    </div>

                </section>
                <section id='discover-bottom' className='bg-light text-muted py-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="../public/images/explore.jpg" className='img-fluid mb-3 rounded-circle' alt="" />
                            </div>
                            <div className="col-md-6">
                                <h3>Explore New Places</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, ut. Fugiat, dolorem id. Adipisci esse corporis nemo dolorem. Repudiandae magnam aliquid in rerum eveniet? Vel tempora sunt dolores tempore molestiae!</p>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='friends' className='bg-primary'>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center py-5">
                                <h1 className="display-4">Friends</h1>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sunt modi? Consequuntur, error perspiciatis. Vitae consectetur quo quasi, error repellat quas corporis earum cupiditate iste dolor odio illo facilis animi.</p>
                                <a href="#" className='btn btn-outline-light btn-lg'>Find out more</a>
                            </div>
                        </div>
                    </div>

                </section>
                <section id='friends-bottom' className='py-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 order-2">
                                <img src="../public/images/enjoy.jpg" className='img-fluid mb-3 rounded-circle' alt="" />
                            </div>
                            <div className="col-md-6 order-1">
                                <h3>Find New Friends</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, ut. Fugiat, dolorem id. Adipisci esse corporis nemo dolorem. Repudiandae magnam aliquid in rerum eveniet? Vel tempora sunt dolores tempore molestiae!</p>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-3 align-self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </div>
                                    <div className="p-3 align-self-end">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, excepturi.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="joinus" className="bg-primary py-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <h1 className="mb-3">Join Us</h1>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" class="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" class="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" class="form-control" placeholder="Enter subject" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Enter message"></textarea>
                                    </div>
                                    <button className="btn btn-outline-light btn-block">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <footer class="bg-dark py-5 text-center">
                Social Network
            </footer>
        </>

    )
}

export default Header