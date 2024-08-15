import { Avatar } from '@/components/ui/avatar';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const Aside = () => {
    return (
        <>
           <Card className="border-none rounded-none" >
            <CardHeader className="border-none ">
            <CardTitle> Classical strings</CardTitle>
            <CardDescription className="border-none ">
            Discover premium classical guitars with specifications, prices, and top picks
            </CardDescription>
            </CardHeader>
            
           </Card>
           <Card className="!mt-auto">
            <CardHeader >
                <Avatar className="border-2" />

            <CardTitle> Classical strings</CardTitle>
            <CardDescription >
            Discover premium classical guitars with specifications, prices, and top picks
            </CardDescription>
            </CardHeader>
            
           </Card>
        </>
    );
};

export default Aside;