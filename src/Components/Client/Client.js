import React from 'react';
import hoc from '../../img/hoc.png';
import CountUp from 'react-countup';

const Client = () => {
    return (
        <div class="card lg:h-64 my-8 shadow-xl image-full">
            <figure><img src={hoc} alt="Shoes" /></figure>
            <div class="card-body ">
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat  place-items-center">
                        <div class="stat-title">Clients</div>

                        <div class="stat-value">                        <CountUp  start={0} end={10} delay={1}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='stat-value' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Projects</div>
                        
                        <div class="stat-value">                        <CountUp  start={0} end={11} delay={1}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='stat-value' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Awards</div>
                        
                        <div class="stat-value">                        <CountUp  start={0} end={4} delay={1}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='stat-value' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Experiences</div>
                        
                        <div class="stat-value">                        <CountUp  start={0} end={2} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='stat-value' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;