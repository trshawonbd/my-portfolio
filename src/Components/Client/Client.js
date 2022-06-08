import React from 'react';
import hoc from '../../img/hoc.png';

const Client = () => {
    return (
        <div class="card lg:h-64 my-8 shadow-xl image-full">
            <figure><img src={hoc} alt="Shoes" /></figure>
            <div class="card-body ">
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat  place-items-center">
                        <div class="stat-title">Clients</div>
                        <div class="stat-value">10</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Projects</div>
                        <div class="stat-value">11</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Awards</div>
                        <div class="stat-value">4</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Experiences</div>
                        <div class="stat-value">2+ </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;