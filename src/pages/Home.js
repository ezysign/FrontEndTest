import React from 'react'
import { MasterLayout } from '../components';
import Title from 'antd/lib/typography/Title';


function Home() {


    return (
        <MasterLayout>
            <div className="text-center">
                <Title >Welcome</Title>
            </div>
        </MasterLayout>
    )


}

export default Home;