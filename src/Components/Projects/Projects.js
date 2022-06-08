import React from 'react';
import plumber from '../../img/projects/Plumber/p-1.png'
import ihouse from '../../img/projects/Plumber/i-house.png';
import photographer from '../../img/projects/Plumber/photographer.png';

const Projects = () => {
    return (
        <div className='my-12 '>
            <h2 className='text-center text-5xl my-8 underline decoration-solid'>Projects</h2>

            <div className='grid lg:grid-cols-3 gap-4'>




                <div className="card  lg:w-96 bg-base-100  shadow-xl ">
                    <figure><img className='hover:animate-shake' src={plumber} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">Plumber</h2>
                        <p>Plumber is a nice-looking Fully created for the online hardware manufacturing selling tools, pipes, pipe seal, spanners, paintbrushes, tapes, thread seals, non-flammable seals, and wrenches.</p>

                        <div class="card-actions justify-start">
                            <a href="https://github.com/trshawonbd/Plumber-client-side">
                                <div class="badge badge-outline button">Client</div>
                            </a>
                            <a href="https://github.com/trshawonbd/Plumber-client-side">
                                <div class="badge badge-outline button">Server</div>
                            </a>
                            <a href="https://plumber-26cab.web.app/">
                                <div class="badge badge-outline button">Live</div>
                            </a>

                        </div>
                        <div className="card-actions  items-center justify-end">

                            <label for="my-modal-1" class="btn modal-button btn-primary button">Explore</label>


                            <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                            <div class="modal   ">
                                <div class="modal-box lg:w-11/12 lg:max-w-5xl  sm:modal-middle">
                                    <label for="my-modal-1" class="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    <div className='flex items-center justify-between sm: flex-wrap my-4'>
                                        <div>
                                            <h3 class="font-bold my-2 uppercase text-2xl">PLUMBER</h3>
                                        </div>
                                        <div class="card-actions justify-start">
                                            <a href="https://github.com/trshawonbd/Plumber-client-side">
                                                <div class="badge badge-outline button">Client</div>
                                            </a>
                                            <a href="https://github.com/trshawonbd/Plumber-client-side">
                                                <div class="badge badge-outline button">Server</div>
                                            </a>
                                            <a href="https://plumber-26cab.web.app/">
                                                <div class="badge badge-outline button">Live</div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="card lg:card-side bg-base-100 flex-wrap ">
                                        <div>
                                            <h1 className='text-3xl my-4'>Technology Used:</h1>
                                            <div className='mt-3 font-bold'>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Node</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">MongoDB</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Express</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">cors</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">json webtoken</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Middleware</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">env</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Atlas</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React router</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React query</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React hook form</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Bootstrap</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Axios</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Toastify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Bootstrap</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">tailwind</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">daisy UI</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">flowbite</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Heroku</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase hooks</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">netlify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">API</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">es6</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">JS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">CSS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">HTML</div>

                                            </div>

                                        </div>
                                        <div class="card-body">
                                            <h2 class="card-title">Projet Details</h2>
                                            <p>Plumber is a nice-looking Fully created for the online hardware manufacturing selling tools, pipes, pipe seal, spanners, paintbrushes, tapes, thread seals, non-flammable seals, and wrenches. Well categorized mega menu and advanced search option empower clients to get results without delay. Attractive blogs with active social channels allow clients to get the product and offer details once they launched. Highly upgraded collections and product sorting provide a smooth online shopping feel to your buyers. You also get testimonials, product carousel, banners, payments method and much more.
                                                On the Othere Hand Admin Panel is also developed for this manufacturing company. Here, admin can easily set up their products, managing their products, managing orders and able to change order status.
                                            </p>
                                            <h2 class="card-title">Clent Features</h2>

                                            
                                                <li>Client can easily see the homepage.</li>
                                                <li>Client can easily create an account in the website.</li>
                                                <li>Client can easily purchase any product as much as he/she wants but make sure the items must be in between available quantity and minimum purchase quantity.</li>
                                                <li>Client can pay their for their order by credit or debit card with a secure payment network.</li>
                                                <li>Client can remove their unpaid items which are added in the order list.</li>
                                                <li>Client can easily write a review from his/her dashboard menu (make sure he/ she is logged in) and the review will display in the review section in homepage.</li>
                                                <li>Client can update his/her profile (can add image, education, address, location, linkedIn ID, phone no etc.) in the My profile page in dashboard.</li>
                                           
                                            <h2 class="card-title">Admin Features</h2>

                                           
                                                <li>Admin can easily see the homepage.</li>
                                                <li>Admin can easily create an account in the website.</li>
                                                <li>Admin can easily add a product as much as he/she wants from Add a tool in dashboard.</li>
                                                <li>Admin can delete a product from Manage Tools in dashboard</li>
                                                <li>Admin can remove their unpaid items and also set status from pending to shipped which are added in the order list.</li>
                                                <li>Admin can make another user admin or delete the user.</li>
                                                <li>Admin can update his/her profile (can add image, education, address, location, linkedIn ID, phone no etc.) in the My profile page in dashboard.</li>
                                            
                                        </div>
                                    </div>
                                    <div class="modal-action">
                                        <label for="my-modal-1" class="btn btn-error">close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd project */}


                <div className="card  lg:w-96 bg-base-100  shadow-xl ">
                    <figure><img className='hover:animate-shake' src={ihouse} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">I-house</h2>
                        <p>I-House is designed to be lightweight and easy to use for SME or hobbyist applications, where many existing stock management solutions are bloated and cumbersome to use.</p>

                        <div class="card-actions justify-start">
                            <a href="https://github.com/trshawonbd/I-House-Client-Side">
                                <div class="badge badge-outline button">Client</div>
                            </a>
                            <a href="https://github.com/trshawonbd/I-House-Backend">
                                <div class="badge badge-outline button">Server</div>
                            </a>
                            <a href="https://i-house-7d97b.web.app/">
                                <div class="badge badge-outline button">Live</div>
                            </a>

                        </div>
                        <div className="card-actions  items-center justify-end">

                            <label for="my-modal-2" class="btn modal-button btn-primary button">Explore</label>


                            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                            <div class="modal   ">
                                <div class="modal-box lg:w-11/12 lg:max-w-5xl  sm:modal-middle">
                                    <label for="my-modal-2" class="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    <div className='flex items-center justify-between sm: flex-wrap my-4'>
                                        <div>
                                            <h3 class="font-bold my-2 uppercase text-2xl">i-house</h3>
                                        </div>
                                        <div class="card-actions justify-start">
                                            <a href="https://github.com/trshawonbd/I-House-Client-Side">
                                                <div class="badge badge-outline button">Client</div>
                                            </a>
                                            <a href="https://github.com/trshawonbd/I-House-Backend">
                                                <div class="badge badge-outline button">Server</div>
                                            </a>
                                            <a href="https://i-house-7d97b.web.app/">
                                                <div class="badge badge-outline button">Live</div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="card lg:card-side bg-base-100 flex-wrap ">
                                        <div>
                                            <h1 className='text-3xl my-4'>Technology Used:</h1>
                                            <div className='mt-3 font-bold'>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Node</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">MongoDB</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Express</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">cors</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">json webtoken</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Middleware</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">env</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Atlas</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React router</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React query</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Toastify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Bootstrap</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Heroku</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase hooks</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">netlify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">API</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">es6</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">JS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">CSS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">HTML</div>

                                            </div>

                                        </div>
                                        <div class="card-body">
                                            <h2 class="card-title">Projet Details</h2>
                                            <p>I-House is an open-source Inventory Management System which provides powerful low-level stock control. The core of the I-House system is a MongoDB database backend which provides an admin interface (web-based) and a REST API for interaction with external interfaces and applications.

                                                I-House is designed to be lightweight and easy to use for SME or hobbyist applications, where many existing stock management solutions are bloated and cumbersome to use. Updating stock is a single-action process and does not require a complex system of work orders or stock transactions.

                                                Powerful business logic works in the background to ensure that stock tracking history is maintained, and users have ready access to stock level information.
                                            </p>
                                            <h2 class="card-title">Features</h2>

                                            
                                                <li>Stock tracking</li>
                                                <li>Manage Suppliers</li>
                                                <li>Instant Stock Knowledge</li>
                                                <li>Extend and Customize to fit your usage</li>
                                                <li>Stock update</li>
                                                <li>Item information</li>
                                                <li>Email/password-and Google based authentication</li>
                                            
                                        </div>
                                    </div>
                                    <div class="modal-action">
                                        <label for="my-modal-2" class="btn btn-error">close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* 3rd project */}

                <div className="card  lg:w-96 bg-base-100  shadow-xl ">
                    <figure><img className='hover:animate-shake' src={photographer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">your photographer</h2>
                        <p>Your PhotoGrapher website is developed for an individual photographer. In Your PhotoGrapher website has login and register options are available for booking a service or several services.</p>

                        <div class="card-actions justify-start">
                            <a href="https://github.com/trshawonbd/Your-PhotoGrapher">
                                <div class="badge badge-outline button">Client</div>
                            </a>
                            <a href="https://your-photographer.web.app/">
                                <div class="badge badge-outline button">Live</div>
                            </a>

                        </div>
                        <div className="card-actions  items-center justify-end">

                            <label for="my-modal-3" class="btn modal-button btn-primary button">Explore</label>


                            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                            <div class="modal   ">
                                <div class="modal-box lg:w-11/12 lg:max-w-5xl  sm:modal-middle">
                                    <label for="my-modal-3" class="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    <div className='flex items-center justify-between sm: flex-wrap my-4'>
                                        <div>
                                            <h3 class="font-bold my-2 uppercase text-2xl">Your photographer</h3>
                                        </div>
                                        <div class="card-actions justify-start">
                                            <a href="https://github.com/trshawonbd/Your-PhotoGrapher">
                                                <div class="badge badge-outline button">Client</div>
                                            </a>
                                            <a href="https://your-photographer.web.app/">
                                                <div class="badge badge-outline button">Live</div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="card lg:card-side bg-base-100 flex-wrap ">
                                        <div >
                                            <h1 className='text-3xl my-4'>Technology Used:</h1>
                                            <div className='mt-3 font-bold'>

                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React router</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React query</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React hook form</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Bootstrap</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>

                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Toastify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">React Awesome</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">Bootstrap</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">firbase hooks</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">netlify</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">API</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">es6</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">JS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">CSS</div>
                                                <div class="badge badge-lg badge-primary my-2 uppercase mr-2">HTML</div>

                                            </div>

                                        </div>
                                        <div class="card-body">
                                            <h2 class="card-title">Website Details</h2>
                                            <p>Your PhotoGrapher website is developed for an individual photographer.
                                                Your PhotoGrapher website contains several sections like NavBar, Banner, Gratitude, Services and Footer.
                                                NavBar in Your PhotoGrapher website has title, logo and several options so that user can navigate from one place to another place.
                                                Banner in Your PhotoGrapher website has few carousel photos which are clicked by this photographer.
                                                Gratitude in Your PhotoGrapher website pays the gratitude to the user who will be in this websites to see the providing services.
                                                Services in Your PhotoGrapher website shows five categories of services, details, prices and booking button to book the packages.
                                                Footer in Your PhotoGrapher website shows a simple layout and copyright symbols and the social media links.
                                                In Your PhotoGrapher website has login and register options are available for booking a service or several services.
                                                Project Descr
                                            </p>
                                            <h2 class="card-title">Project Features</h2>

                                            
                                                <li>The project is designed by React Library.</li>
                                                <li>This project is designed to keep it mind SPA(Single Page Application).</li>
                                                <li>React Bootstrap is used for making the website responsive.</li>
                                                <li>React Dom Router is used for navigate like a SPA.</li>
                                                <li>React Tostify is used to show the toast.</li>
                                                <li>React FontAwesome is used to show the font.</li>
                                                <li>React Firebase is used for authentication.</li>
                                                <li>React Firebase hooks are used to implement Google and user and email authentication.</li>
                                                <li>Firebase hosting is used to deploy the website</li>
                                            

                                        </div>
                                    </div>
                                    <div class="modal-action">
                                        <label for="my-modal-3" class="btn btn-error">close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;