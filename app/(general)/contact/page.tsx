import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'This is a contact page for your website',
 keywords: ['Contact Page','Contact','Information'],
};
export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">ContactPage</span>
        </>
    )
}