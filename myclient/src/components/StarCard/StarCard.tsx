
// Define the TypeScript interface for the expected object
import React from "react";

interface PersonInfo {
    name: string;
    origin: string;
    work: string[];
    url: string[];
    extraInfo: boolean;
    fanbase: number;
    netWorth: number;
    photoUrl: string; // Assuming a photo URL is provided
}

interface CardProps {
    person: PersonInfo;
}
const StarCard: React.FC<CardProps> = ({person}) => {
    const {name,origin,work,url,fanbase,netWorth,photoUrl} = person;
    return (
        <div className="md:flex">
            <div className="md:shrink-0">
                <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={`src/assets/images/${photoUrl?photoUrl:"MaDong.png"}`}
                    alt={`${photoUrl?photoUrl:"MaDong.png"}`}
                />
            </div>
            <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Movie star</div>
                <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                    {name}
                </a>
                <p className="mt-2 text-gray-500">
                    Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                    places to do just that.
                </p>
            </div>

        </div>

    )
}

export default StarCard
