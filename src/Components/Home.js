import React, { Component } from 'react';
import { Banner } from './Banner';
import { Kompetencer } from './Kompetencer';
import { Reference } from './Reference';
import { Projekter } from './Projekter';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <Kompetencer></Kompetencer>
                <Reference></Reference>
                <Projekter></Projekter>
            </div>
        )
    }
}
