import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Page',
 description: 'This is the about page of my website',
 keywords: ['About Page', 'Jespejo', 'Information']
};

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">AboutPage</span>
        </>
    )
}