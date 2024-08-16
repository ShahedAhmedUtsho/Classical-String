import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useAuth from '@/Hooks/useAuth';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
    const { user, logOut, Alert } = useAuth();
    const navigate = useNavigate();

    return (
        <aside className="flex flex-col h-full">
            <Card className="border-none rounded-none mb-4">
                <CardHeader>
                    <CardTitle>Classical strings</CardTitle>
                    <CardDescription>
                        Discover premium classical guitars with specifications, prices, and top picks.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="mt-auto border-none rounded-none">
                <CardHeader className=" gap-4">
                    <Avatar className="border flex justify-center items-center">
                        <AvatarImage src={user?.photoURL} alt={user?.displayName} />
                        <AvatarFallback className="flex justify-center items-center text-center">
                            <User />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle>{user?.displayName}</CardTitle>
                        <CardDescription>Premium classical guitar enthusiast</CardDescription>
                    </div>
                </CardHeader>

                <CardFooter className="pt-4">
                    {user ? (
                        <button
                            className="text-red-500  font-thin"
                            variant="warning"
                            onClick={() => {
                                logOut();
                                navigate('/auth')
                                Alert("default", "Done", "Logout successful");
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                        variant="ghost"
                            onClick={() => {
                                navigate("/auth");
                            }}
                        >
                            Login
                        </button>
                    )}
                </CardFooter>
            </Card>
        </aside>
    );
};

export default Aside;
